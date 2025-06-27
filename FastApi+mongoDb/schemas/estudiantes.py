def EstudianteObjeto(objeto)->dict:
    return{
        "id": getattr(objeto,"id", None),
        "nombre": objeto.nombre,
        "rango": objeto.rango,
        "medallasObtenidas": objeto.medallasObtenidas,
        "email": objeto.email,
        "contraseña": objeto.contraseña,
    }

def listaEstudiantes(usuarios)->list:
        return [EstudianteObjeto(usuario) for usuario in usuarios if getattr(usuario, "tipo", None)=="Estudiante"]
       