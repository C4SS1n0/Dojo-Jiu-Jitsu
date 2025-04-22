from pydantic import BaseModel

class Usuario(BaseModel):
    nombre: str
    telefono: str
    email: str
    password: str

miguel = Usuario(nombre="Miguel", telefono="123456789", email="miguel@gmail.com", password="123Password")

clientes= [miguel]