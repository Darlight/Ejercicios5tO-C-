class Navegador(object):
	def __init__(self, nombre):
		self.nombre = nombre
		self.tabs = []

	def agregar_tab(self, tab):
		self.tabs.append(tab)

	def cerrar_tab(self,tab):
		self.tabs.pop(tab)

	def cerrar_todas_tabs(self,tab):
		self.tabs.pop(tab)

	def mostrar_tabs(self):
		for i in len(self.tabs):
			return self.tabs[i]

	def guardar_tabs(self,tabs):
		archivo = open("todoslostabs.txt","w")
		for i in len(tabs):
			archivo.write(i)
			archivo.write("\n")
		archivo.close
		return archivo