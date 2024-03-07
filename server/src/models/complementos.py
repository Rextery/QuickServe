class Complementos:
    def __init__(self,producto_id,nombre,descripcion,precio,disponible):
        self.producto_id = producto_id
        self.nombre = nombre
        self.descripcion = descripcion
        self.precio=precio
        self.disponible = disponible

    def toDBCollection(self):
        return{
            'producto_id':self.producto_id,
            'nombre':self.nombre,
            'descripcion': self.descripcion,
            'precio': self.precio,
            'disponible': self.disponible
        }