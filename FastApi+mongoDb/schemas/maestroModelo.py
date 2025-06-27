from pydantic import BaseModel, EmailStr
from fastapi import UploadFile

class MaestroRegistro(BaseModel):
    nombre: str
    email: EmailStr
    contraseña: str
    rol: str
    afiliado: str
    academia: str | None = None
