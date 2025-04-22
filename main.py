from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from modelos import clientes, Usuario
app = FastAPI()

@app.get("/")
def bienvenido():
    return {"mensaje": "Bienvenido a mi API"}

@app.get("/api/usuarios")
async def get_usuarios():
    return {"Usuarios": clientes}

@app.post("/api/usuarios")
async def create_usuario(usuario: Usuario):
    clientes.append(usuario)
    return {"mensaje": "Usuario creada", "Usuario": usuario}

@app.get("/api/usuarios/{id}")
async def get_usuario(id: int):
    if 0<=id<len(clientes):
        return {"Usuario": clientes[id]}
    return {"mensaje": "No se encontro la al usuario"}

@app.put("/api/usuarios/{id}")
async def update_usuario(id: int, usuario: Usuario):
    if 0<=id<len(clientes):
        clientes[id] = usuario
        return {"mensaje": "Usuario actualizado", "Usuario": usuario}
    return {"mensaje": "No se encontro la tarea"}

@app.delete("/api/usuarios/{id}")
async def delete_usuario(id: int):
    if 0<=id<len(clientes):
        usuarioBorrado = clientes.pop(id)
        return {"mensaje": "Usuario eliminado", "Usuario": usuarioBorrado}
    return {"mensaje": "No se encontro usuario"}


#Configuracion de CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins = ["*"],
    allow_credentials = True,
    allow_methods =["*"],
    allow_headers = ["*"],
)










