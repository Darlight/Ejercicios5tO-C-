import random 
def crear_txt(nombre):
	archivo = open(nombre,'w')
	archivo.close()

def crear_contrasena(cantidad,longitud,lista,nombre):
	contra = ""
	for i in range(cantidad)
		for i in range(longitud):
			x = random.randint(0,62)
			contra += lista[x]
		archivo = open(nombre,'a')
		archivo.write(contra,"\n")
		contra = ""




	