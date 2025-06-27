from pydantic import BaseModel, EmailStr

class loginMaestro(BaseModel):
    email: EmailStr
    contraseña: str

