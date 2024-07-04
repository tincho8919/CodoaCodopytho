print("Hola Mundo")
print("Marcela"+ "" + "Cerda")
print("Marcela" , "Cerda")
print(3)
print(3+3)
print("3"+"3")
print("3"+ str(3))
print("3", 3)

a= int(input("Ingrese el numero : "))
b= int(input("Ingrese el numero : "))

print(a+b)
print("La suma entre" ,  a , "y" ,b ,"es" , a+b)
print("La suma entre " + str(a)+ " y " + str(b)  + " es " + str(a+b) )
print(f"La suma entre {a} y {b} es {a+b} " )

altura = float(input("Ingrese su altura : "))


'''
comentario de bloque
'''
c = 3 # comentario de linea

def suma(a, b): # Comentario en línea
    """Esta función devuelve la suma de los parámetros a y b""" # docString
    return a + b
def resta(a,b):
    c=a+b
    c=c+3
    c=c+5
    return a+b

print(type(a))
nombre="Marcela"
print(type(nombre))