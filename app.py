from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from Controladores import maestroControlador  # ✅ Importás tu router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # ✅ Permitís el frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(maestroControlador.router)  # ✅ Registrás el controlador
