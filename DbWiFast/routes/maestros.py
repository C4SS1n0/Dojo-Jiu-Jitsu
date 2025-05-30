from fastapi import APIRouter, HTTPException
from config.db import conn
from schemas.maestros import MaestrosObjeto, listaMaestros
from schemas.estudiantes import EstudianteObjeto
from models.Usuarios import Maestro
from models.Usuarios import Estudiante
from bson import ObjectId

user = APIRouter()
def docADict(doc):
     return {
        "id": str(doc["_id"]),
        "nombre": doc["nombre"],
        "rango": doc.get("rango"),
        "medallasObtenidas": doc["medallasObtenidas"],
        "email": doc["email"],
        "contraseña": doc["contraseña"],
        "tipo": doc.get("tipo"),
    }


@user.post("/crearMaestro")
def crearMaestro(maestro: Maestro):
    nuevoMaestro=dict(maestro)
    nuevoMaestro.pop("id", None)
    id = conn.proyectoJodo3.Maestros.insert_one(nuevoMaestro).inserted_id
    conn.proyectoJodo3.Maestros.find_one({"_id":id})
    return str (id)

@user.post("/crearEstudiante")
def crearEstudiante(estudiante: Estudiante):
    nuevoEstudiante=dict(estudiante)
    nuevoEstudiante.pop("id", None)
    id = conn.proyectoJodo3.Estudiantes.insert_one(nuevoEstudiante).inserted_id
    conn.proyectoJodo3.Maestros.find_one({"_id":id})
    return str (id)

@user.get("/estudiantes")
def mostrarEstudiantes():
    cursor = conn.proyectoJodo3.Estudiantes.find()
    return [docADict(doc)for doc in cursor]

@user.get("/maestros")
def mostrarMaestros():
    cursor = conn.proyectoJodo3.Maestros.find()
    return [docADict(doc)for doc in cursor]

@user.delete("/removeEstudiante/{id: str}")
def eliminarEstudiante(id: str):
    result = conn.proyectoJodo3.Estudiantes.delete_one({"_id": ObjectId(id)})
    if result.deleted_count==1:
        return {"message": "Estuduante eliminado correctamente."}
    else:
        raise HTTPException(status_code=404, detail="Estudiante no encontrado.")

@user.delete("/removeMaestro/{id: str}")
def eliminarMaestro(id: str):
    result = conn.proyectoJodo3.Maestros.delete_one({"_id": ObjectId(id)})
    if result.deleted_count==1:
        return {"message": "Maestro eliminado correctament."}
    else: 
        raise HTTPException(status_code=404, detail="Maestro no encontrado.")
    




