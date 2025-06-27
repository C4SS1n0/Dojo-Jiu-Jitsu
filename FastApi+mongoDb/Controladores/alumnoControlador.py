from fastapi import APIRouter, Form, UploadFile, File, HTTPException, status
from fastapi.responses import JSONResponse
from pydantic import EmailStr
from DataBase.mongo import coleccionAlumnos
from Utilidades.hashing import hashPassword
import uuid, shutil, os
from schemas.loginMaestro import LoginRequest
import bcrypt

router = APIRouter()

@router.post("/routes/registrarAlumno")
async def registrarAlumno(
    nombre: str = Form(...),
    email: EmailStr = Form(...),
    contraseña: str = Form(...),
    confirmarContraseña : str= Form(...)
):
    if len(contraseña) < 6:
        raise HTTPException(status_code=400, detail="La contraseña debe tener al menos 6 caracteres.")

    if email.find_one({"email": email}):
        raise HTTPException(status_code=400, detail="El email ya está registrado.")

    if contraseña != confirmarContraseña:
        raise HTTPException(status_code=400, detail="Las contraseñas no coinciden.")

    if coleccionAlumnos.find_one({"email": email}):
        raise HTTPException(status_code=400, detail="El email ya esta registrado") 

    # Insertar en DB
    alumno = {
        "nombre": nombre,
        "email": email,
        "contraseña": hashPassword(contraseña),
        "rol": "alumno"
    }

    resultado = coleccionAlumnos.insert_one(alumno)
    alumno["_id"] = str(resultado.inserted_id)
    del alumno["contraseña"]

    return JSONResponse(
        status_code=status.HTTP_201_CREATED,
        content={"mensaje": "Maestro registrado exitosamente.", "maestro": alumno}
    )


