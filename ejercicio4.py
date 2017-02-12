print("Bienvenido")
inventario = {}
seguir = "si"
while seguir == "si":
	elemento = input("Ingrese el nombre del material: ")
	cantidad = int(input("Ingrese la cantidad: "))
	inventario[elemento]= cantidad
	seguir = input("Desea continuar? (si/no): ")

for elemento in inventario:
	print (elemento , "  =  ", inventario[elemento])