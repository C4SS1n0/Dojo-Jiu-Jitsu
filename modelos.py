from pydantic import BaseModel, EmailStr
from typing import Optional

class UsuarioBase(BaseModel):
    nombre: str
    apellido: str
    email: EmailStr

class UsuarioCrear(UsuarioBase):
    contraseña: str

class UsuarioRespuesta(UsuarioBase):
    id: int

    class Config:
        orm_mode = True
