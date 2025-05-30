from pydantic import BaseModel, Field
from typing import Union, Literal, Optional
from typing_extensions import Annotated


class Usuarios(BaseModel):
        nombre: str
        rango: Optional[str]
        medallasObtenidas: str
        email: str
        contraseña: str

class Maestro(Usuarios):
        tipo: Literal["Maestro"] = "Maestro"
        def __str__(self):
                return f"Maestro(nombre={self.nombre}, rango={self.rango}, medallasObtenidas={self.medallasObtenidas}, email={self.email})"

class Estudiante(Usuarios):
        tipo: Literal["Estudiante"] = "Estudiante"
        def __str__(self):
                return f"Estudiante(nombre={self.nombre}, rango={self.rango}, medallasObtenidas={self.medallasObtenidas}, email={self.email})"

Usuario = Annotated[Union[Maestro, Estudiante], Field(discriminator= "tipo")]


