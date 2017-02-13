class Navegador(object):
	def __init__(self, nombre):
		self.nombre = nombre
		self.tabs = []

	def agregar_tab(self, tab):
		self.tabs.append(tab)
		return self.tabs

	def cerrar_tab(self,tab):
		self.tabs.pop(tab-1)
		return self.tabs

	def cambiar_tab(indice, nombre, url,tabs):
		self.tabs[indice].cambiar(nombre,url)
		return self.tabs

	def cerrar_todas_tabs(self):
		self.tabs = []
		return self.tabs

	def mostrar_tabs(self):
		mostrar = ""
		contador = 0
		for self.tab in self.tabs:
			contador += 1
			mostrar += (str(contador)+ ". " + "Nombre: " + str(self.tab.nombre))
			mostrar += ("\n")
			mostrar += ("Url: " + str(self.tab.url))
			mostrar += ("\n")
		return mostrar



	def guardar_tabs(self,nombre):
		archivo = open(nombre,"w")
		archivo.write(str(self.nombre))
		archivo.write(":")
		archivo.write("\n")
		for self.tab in self.tabs:
			archivo.write(str(self.tab.nombre))
			archivo.write(": ")
			archivo.write(str(self.tab.url))
			archivo.write("\n")
		archivo.close
		return archivo