from Navegador_class import Navegador
from Tab_class import Tab

print("Bienvenido \n")
seguir = 0
while seguir not in range(1, 9):
 print("""	
	1. Abrir Navegador
	2. Crear un Tab 
 	2. Cambiar URL de Tab 
  	3. Cerrar Tab 
   	4. Cerrar todos los tabs 
   	5. Mostrar mis tabs 
   	6. Guardar Tabs
	7. Salir       """  )
  seguir = int(input("Que opción desea?: "))
	if seguir == 1:
		id_nombre = input("Escriba el nombre del navegador: ")
		mi_navegador = Navegador(id_nombre)

	if seguir == 2:

	if seguir == 3:

	if seguir == 4:

	if seguir == 5:

	if seguir == 6:

	if seguir == 7:

	if seguir == 8:
		

