from motor.motor_asyncio import AsyncIOMotorClient
cliente = AsyncIOMotorClient("mongodb://localhost:27017/")
db = cliente["Dojo-Jiu-Jit-Zu"]
coleccionMaestros = db["maestros"]