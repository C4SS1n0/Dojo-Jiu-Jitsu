from fastapi import FastAPI
from app.rutas import router as usuarios_router

app = FastAPI()

@app.get("/")
def inicio():
    return {"Bienvenido al Dojo API 🥋"}

app.include_router(usuarios_router)


