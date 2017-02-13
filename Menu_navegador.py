from Navegador_class import Navegador
from Tab_class import Tab

print("Bienvenido")
seguir = 0
continuar = "si"
while continuar == "si":
	print("""	
	1. Abrir Navegador
	2. Crear un Tab 
 	3. Cambiar URL de Tab 
  	4. Cerrar Tab 
   	5. Cerrar todos los tabs 
   	6. Mostrar mis tabs 
   	7. Guardar Tabs      \n """  )
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
		print(mi_navegador.mostrar_tabs())
		que_tab = int(input("Que tab desea cambiar su URL? ( Ingrese un numero entero: ) \n : "))
		que_url = input("Ingrese su URL: ")
		que_nombre = input("Ingrese el nuevo nombre: ")
		que_tab -= 1
		mi_navegador.cambiar_tab(que_tab, que_nombre, que_nombre , mi_navegador.tabs)

	elif seguir == 4: 
		print("\n")
		print(mi_navegador.mostrar_tabs())
		que_tab = int(input("Que tab desea eliminar? (Ingrese un numero entero: ) : "))
		mi_navegador.cerrar_tab(que_tab)

	elif seguir == 5:
		print("\n")
		decision = input("Esta realmente seguro de cerrar todo los tabs? (si/no)")
		if decision == "si":
			mi_navegador.cerrar_todas_tabs()
		else:
			print("Pienselo mejor la proxima vez \n")
		
	elif seguir == 6:
		print(mi_navegador.mostrar_tabs())
	elif seguir == 7: 
		nombre = input("Ingrese el nombre de su archivo.(Al terminar, debe tener al final .txt): ")
		mi_navegador.guardar_tabs(nombre)
	seguir = 0
	continuar = input("Desea hacer algo mas? (si/no): ")
		

