from pydantic import BaseModel, EmailStr
from typing import Optional

class MaestroUpt(BaseModel):
    nombre: Optional[str]
    contraseña: Optional[str]
    rol: Optional[str]
    afiliado: Optional[str]
    academia: Optional[str]
