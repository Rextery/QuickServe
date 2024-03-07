class Producto:
    def __init__(self, nombre):
        self.nombre = nombre
    

    def toDBCollection(self):
        return{
            'nombre':self.nombre
        }