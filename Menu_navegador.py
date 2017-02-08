from Navegador_class import Navegador
from Tab_class import Tab

print("Bienvenido \n")
seguir = 0
while seguir not in range(1, 9):
	print("""	
	1. Abrir Navegador
	2. Crear un Tab 
 	3. Cambiar URL de Tab 
  	4. Cerrar Tab 
   	5. Cerrar todos los tabs 
   	6. Mostrar mis tabs 
   	7. Guardar Tabs
	8. Salir       """  )
	seguir = int(input("Que opcion desea?: "))
	if seguir == 1:
		id_nombre = input("Escriba el nombre del navegador: ")
		mi_navegador = Navegador(id_nombre)

	elif seguir == 2:
		nombre_tab = input("Escriba el nombre del tab: ")																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																					
		id_url = input("Ingrese su URL: ")
		id_tab = Tab(nombre_tab,id_url)
		mi_navegador.agregar_tab(id_tab)

	elif seguir == 3:
		print(" \n ")
		mi_navegador.mostrar_tabs()
		que_tab = int(input("Que tab desea cambiar su URL? ( Ingrese un numero entero: ) \n : "))
		que_url = input("Ingrese su URL: ")
		que_nombre = input("Ingrese el nuevo nombre: ")
		



	elif seguir == 4:
		
	elif seguir == 5:

	elif seguir == 6:

	elif seguir == 7:

	elif seguir == 8:
		

