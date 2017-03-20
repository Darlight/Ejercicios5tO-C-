from django.contrib import admin
from estudiantes.models import Estudiante
from grados.models import Grado

# Register your models here.
admin.site.register(Estudiante)
admin.site.register(Grado)