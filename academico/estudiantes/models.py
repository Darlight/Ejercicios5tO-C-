from django.db import models

# Create your models here.
class Estudiante(models.Model):
	nombre = models.CharField(max_length=200)
	apellido = models.CharField(max_length=200)
	edad = models.IntegerField(default=0)
	grado = models.ForeignKey('grados.Grado')

	def __str__(self):
		return"%s %s - %s" % (
			self.nombre,
			self.apellido,
			self.edad)
