from password import crear_txt, crear_contrasena,leer_txt, escribir_contrasena
import random
lista_passwords=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"]
print("Bienvenido")
nombre = input("Ingrese el nombre del archivo(al terminar de escribir su nombre deseado, porfavor terminarlo con .txt): ")
nombre_archivo = crear_txt(nombre)
print("Su archivo se creara con el ", nombre)
longitud = int(input("Ingrese la longitud de la contasena: "))
cantidad = int(input("Ingrese la cantidad de contrasenas deseadas: "))
passwords = crear_contrasena(cantidad,longitud,lista_passwords,nombre)
escribir_contrasena(passwords,nombre)
print("Listo, revise su carpeta junto a este programa.")



