from fastapi import APIRouter, UploadFile, File, Form, HTTPException, status, Path
from fastapi.responses import JSONResponse
import bcrypt
from repositorios.repositorioMaestros import RepositorioMaestros
from DataBase.mongo import coleccionMaestros
from pydantic import BaseModel, EmailStr
from schemas.maestroUpt import MaestroUpt
import os, uuid

router = APIRouter()
repo = RepositorioMaestros(coleccionMaestros)

class LoginRequest(BaseModel):
    email: EmailStr
    contraseña: str

class crearMaestroRequest(BaseModel):
    nombre: str
    email: EmailStr
    contraseña: str
    rol: str = "maestro"

from fastapi import Request

@router.post("/routes/loginMaestro")
async def loginMaestro(data: LoginRequest, request: Request):
    import traceback
    try:
        maestro = await repo.obtenerPorMail(data.email)
        if not maestro:
            raise HTTPException(status_code=401, detail="Credenciales inválidas.")

        if not bcrypt.checkpw(data.contraseña.encode("utf-8"), maestro["contraseña"].encode("utf-8")):
            raise HTTPException(status_code=401, detail="Credenciales inválidas.")

        maestro["_id"] = str(maestro["_id"])
        del maestro["contraseña"]

        return {"mensaje": "Inicio de sesión exitoso", "maestro": maestro}

    except HTTPException as http_ex:
        raise http_ex  # Sigue lanzando errores HTTP explícitos normalmente

    except Exception as ex:
        print("Error interno en loginMaestro:")
        traceback.print_exc()
        raise HTTPException(status_code=500, detail="Error interno en el servidor")

@router.post("/routes/registrarMaestro")
async def registrarMaestro(
    nombre: str = Form(...),
    email: str = Form(...),
    contraseña: str = Form(...),
    rol: str = Form(...),
    afiliado: str = Form(None),
    academia: str = Form(None),
    titulo: UploadFile = File(None)
):
    try:
        existe = await repo.obtenerPorMail(email)
        if existe:
            raise HTTPException(status_code=400, detail="El mail ya está registrado")

        hashed = bcrypt.hashpw(contraseña.encode("utf-8"), bcrypt.gensalt())

        maestroDic = {
            "nombre": nombre,
            "email": email,
            "contraseña": hashed.decode("utf-8"),
            "rol": rol.lower(),
        }

        if afiliado:
            maestroDic["afiliado"] = afiliado
        if academia:
            maestroDic["academia"] = academia

        if titulo:
            contenido = await titulo.read()
            nombre_archivo = f"{uuid.uuid4().hex}_{titulo.filename}"
            carpeta = "uploads/titulos"
            os.makedirs(carpeta, exist_ok=True)
            ruta = os.path.join(carpeta, nombre_archivo)

            with open(ruta, "wb") as f:
                f.write(contenido)

            maestroDic["titulo_ruta"] = ruta
            maestroDic["titulo_nombre_archivo"] = titulo.filename

        resultado = await repo.insertarMaestro(maestroDic)

        return JSONResponse(
            status_code=status.HTTP_201_CREATED,
            content={"mensaje": "Maestro creado con éxito", "id": str(resultado.inserted_id)},
        )
    except Exception as e:
        import traceback
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=str(e))

@router.delete("/routes/eliminarMaestro/{email}")
async def eliminar_maestro(email: str = Path(...)):
    try:
        resultado = await repo.eliminarMaestro(email)
        if resultado.deleted_count == 0:
            raise HTTPException(status_code=404, detail="Maestro no encontrado")

        return JSONResponse(
            status_code=status.HTTP_200_OK,
            content={"mensaje": f"Maestro con email {email} eliminado exitosamente"},
        )
    except Exception as e:
        import traceback
        traceback.print_exc()
        raise HTTPException(status_code=500, detail="Error interno al eliminar maestro")

@router.put("/routes/actualizarMaestro/{email}")
async def actualizarMaestro(email: str, datos: MaestroUpt):
    try:
        nuevosDatos = datos.dict(exclude_unset=True)

        if "contraseña" in nuevosDatos:
            nuevosDatos["contraseña"] = bcrypt.hashpw(
                nuevosDatos["contraseña"].encode("utf-8"), bcrypt.gensalt()
            ).decode("utf-8")

        resultado = await repo.actualizarMaestro(email, nuevosDatos)
        if resultado.matched_count == 0:
            raise HTTPException(status_code=404, detail="Maestro no encontrado")

        return JSONResponse(
            status_code=status.HTTP_200_OK,
            content={"mensaje": f"Maestro con email {email} actualizado exitosamente"},
        )
    except Exception as e:
        import traceback
        traceback.print_exc()
        raise HTTPException(status_code=500, detail="Error interno al actualizar maestro")

@router.get("/routes/maestros")
async def obtenerMaestros():
    try:
        maestros = []
        cursor = repo.coleccion.find()
        async for maestro in cursor:
            maestro["_id"] = str(maestro["_id"])
            del maestro["contraseña"]
            maestros.append(maestro)

        return maestros
    except Exception as e:
        import traceback
        traceback.print_exc()
        raise HTTPException(status_code=500, detail="Error interno al obtener maestros")












