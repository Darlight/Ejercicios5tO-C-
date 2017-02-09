class Navegador(object):
	def __init__(self, nombre):
		self.nombre = nombre
		self.tabs = []
		self.cerrar = False

	def agregar_tab(self, tab):
		self.tabs.append(tab) 

	def cerrar_tab(self,tab):
		self.tabs.pop(tab-1)
		return self.tabs

	def cambiar_tab(indice, nombre, url,tabs):
		self.tabs[indice].cambiar(nombre,url)

	def cerrar_todas_tabs(self):
		self.tabs = []

	def mostrar_tabs(self):
		return self.tabs

	def guardar_tabs(self,nombre):
		archivo = open(nombre,"w")
		for i in range(len(tabs)):
			archivo.write(i)
			archivo.write("\n")
		archivo.close
		return archivo