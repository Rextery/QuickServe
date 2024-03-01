from django.db import models

# Create your models here.


class Vasos(models.Model):
    _id = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=100)
    description = models.TextField()
    price_tradicional = models.DecimalField(max_digits=10, decimal_places=2)
    price_sin_licor = models.DecimalField(max_digits=10, decimal_places=2)
    price_cremoso = models.DecimalField(max_digits=10, decimal_places=2)
    image_url = models.URLField()


class Sabores(models.Model):
    _id = models.IntegerField(primary_key=True)
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()
    disponible = models.BooleanField(default=True)
    tipo = models.CharField(max_length=100)


class Nevera(models.Model):
    _id = models.IntegerField(primary_key=True)
    nombre = models.CharField(max_length=100)
    tipo = models.CharField(max_length=100)
    disponible = models.BooleanField(default=True)
