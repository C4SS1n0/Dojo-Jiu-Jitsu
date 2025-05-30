from fastapi import FastAPI
app = FastAPI()
from routes.maestros import user

app.include_router(user)


@app.get("/maestros")
def leerMaestros():
    return {"Soy un usuario"}