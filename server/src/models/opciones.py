class Opciones:
    def __init__(self,producto_id,nombre,descripcion,precio,src):
        self.producto_id = producto_id
        self.nombre = nombre
        self.descripcion = descripcion
        self.precio = precio
        self.src = src
    
    def toDBCollection(self):
        return{
            'producto_id':self.producto_id,
            'nombre':self.nombre,
            'descripcion': self.descripcion,
            'precio': self.precio,
            'src':self.src
        }