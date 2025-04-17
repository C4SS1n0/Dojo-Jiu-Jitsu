from fastapi import APIRouter
from app.modelos import UsuarioCrear, UsuarioRespuesta

router = APIRouter(prefix="/usuarios", tags=["Usuarios"])

@router.post("/", response_model=UsuarioRespuesta)
def crear_usuario(usuario: UsuarioCrear):
    # Aquí solo retornamos datos de ejemplo por ahora
    return {
        "id": 1,
        "nombre": usuario.nombre,
        "apellido": usuario.apellido,
        "email": usuario.email
    }

@router.get("/")
def listar_usuarios():
    return [{"id": 1, "nombre": "Juan", "apellido": "Pérez", "email": "juan@email.com"}]


