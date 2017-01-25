import random 
def crear_txt(nombre):
	archivo = open(nombre,'w')
	archivo.close()
	return nombre

def crear_contrasena(cantidad,longitud,lista,nombre):
	contras = []
	clave = ""
	for i in range(cantidad):
		for i in range(longitud):
			x = random.randint(0,61)
			clave += (lista[x])
			contras.append(clave)
	return contras

def escribir_contrasena(contras,nombre):
	archivo = open(nombre,'a')
	for i in contras:
		archivo.write(i+"\n")
	archivo.close()
	return "Ok"

def leer_txt(nombre):
	archivo = open(nombre,'r') 
	lineas = archivo.readlines()
	archivo.close()
	return lineas
	