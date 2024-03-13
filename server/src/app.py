from flask import Flask, request, render_template
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

# MongoDB connection
uri = "mongodb+srv://sebas13gomez:3AapJrngbz03OsKF@cluster0.mjiyknu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
client = MongoClient(uri)
mongo = client[
    "QuickServerDB"
]  # Reemplaza 'tu_base_de_datos' por el nombre de tu base de datos


@app.route("/Productos", methods=["POST"])
def create_Productos():
    request_data = request.get_json()
    id_producto = mongo.db.Productos.insert_one(
        {"nombre_producto": request_data["nombre_producto"]}
    ).inserted_id

    opciones = request_data.get("ListaOpciones", {})
    for key, opcion in opciones.items():
        mongo.db.Opciones.insert_one(
            {
                "producto_id": id_producto,
                "nombre_opcion": opcion["nombre_opcion"],
                "descripcion_opcion": opcion["descripcion_opcion"],
                "precio_opcion": opcion["precio_opcion"],
                "src_opcion": opcion["src_opcion"],
            }
        )

    return {"message": "received"}


if __name__ == "__main__":
    app.run(debug=True)
