class RepositorioMaestros():
    def __init__(self, coleccion):
        self.coleccion = coleccion

    async def obtenerPorMail(self,email):
        return await self.coleccion.find_one({"email": email})
    
    async def insertarMaestro(self,maestroDic):
        return await self.coleccion.insert_one(maestroDic)
    
    async def eliminarMaestro(self, email):
        return await self.coleccion.delete_one({"email": email})

    async def actualizarMaestro(self, email, nuevosDatos):
        return await self.coleccion.update_one({"email": email}, {"$set": nuevosDatos})
    
    async def obtenerMaestros(self):
        maestros = []
        cursor = self.coleccion.find()
        async for maestro in cursor:
            maestro["_id"] = str(maestro["_id"])
            maestros.append(maestro)
        return maestros
