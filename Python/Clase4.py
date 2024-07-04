'''
# Funcion Bienvenida que dice "Bienvenidos al curso de Back End " que no recibe parametros y no retorna nada
def bienvenida():
    print("Bienvenidos al curso de Back End ")

bienvenida()

# Declaramos la función, recibe 2 parametros y no retorna nada
def suma(a, b):
   s = a + b
   print(f"Suma entre {a} y {b} es: {s} ")

# Programa principal
num1=int(input("Ingrese un numero:"))
num2=int(input("Ingrese otro numero:"))
suma(num1, num2)
'''
'''
# Declaramos la función, recibe 2 parametros y no retorna la suma
def suma1(a, b):
   return a + b
#funcion lambda similar a la funcion flecha de js
cuadrado = lambda x: x ** 2
'''
suma1= lambda a,b : a+b
# Programa principal
num1=int(input("Ingrese un numero:"))
num2=int(input("Ingrese otro numero:"))
s=suma1(num1, num2)

print(f"Suma entre {num1} y {num2} es: {s} ")
'''
funcion que me muestre tabla de multiplicar de un numero dado
7 x 1 = 7
7 x 2 = 14

7 x 10 = 70
'''
'''
def tabla_de_multiplicar(n):
    for i in range(1,11,1):
        print(f"{n} x {i} = {n*i}")

num=int(input("Ingrese numero de tabla de multiplicar: "))
# programa principal
tabla_de_multiplicar(num)
'''
'''
#Tabla de Multiplicar

def tabla_multiplicar(n):
    for i in range(1,11):
        print(f'{n} x {i} = {n * i}')

num3=int(input("Ingrese  numero de tabla de multiplicar:"))
tabla_multiplicar(num3)
'''
def potencia(a,b=2):
    return (a**b)

# programa principal
base=int(input("Ingrese  numero base:"))
exponente=int(input("Ingrese  la potencia:"))
print(f"El numero {base} elevado al {exponente} da {potencia(base,exponente)}")

# programa principal
base=int(input("Ingrese otro  numero base:"))

print(f"El numero {base} al cuadrado da {potencia(base)}")

print("hola",end=" ")
print("Mundo")
'''
#parametros opcionales
def fn_raiz(num, raiz=2):  
    return num**(1/raiz)

def potencia(num, exponente=2):
    return num**exponente

# Programa principal
print(potencia(4))     # 4**2 = 16
print(potencia(8))     # 8**2 = 64
print(potencia(8,3))   # 8**3 = 512
'''
#funcion lambda similar a la funcion flecha de js
cuadrado = lambda x: x ** 2
print(cuadrado(4)) # 16

#La función map() en Python aplica una función a cada uno de los elementos de una lista:
lista=[1, 2, 3, 4, 5 ]

cuadrados=list(map(cuadrado, lista)) 
print(cuadrados)


'''

Actividad Práctica - Python Unidad 2
1) Desarrollar una función que reciba tres números positivos y devuelva el mayor
de los tres, sólo si éste es único (mayor estricto). En caso de no existir el mayor
estricto devolver -1. No utilizar operadores lógicos (and, or, not). Desarrollar
también un programa para ingresar los tres valores, invocar a la función y
mostrar el máximo hallado, o un mensaje informativo si éste no existe.
2) Desarrollar una función que reciba tres números enteros positivos y verifique si
corresponden a una fecha válida (día, mes, año). Devolver True o False según
la fecha sea correcta o no. Realizar también un programa para verificar el
comportamiento de la función.
3) Un comercio de electrodomésticos necesita para su línea de cajas un programa
que le indique al cajero el cambio que debe entregarle al cliente. Para eso se
ingresan dos números enteros, correspondientes al total de la compra y al
dinero recibido. Informar cuántos billetes de cada denominación deben ser
entregados al cliente como vuelto, de tal forma que se minimice la cantidad de
billetes. Considerar que existen billetes de $500, $100, $50, $20, $10, $5 y $1.
Emitir un mensaje de error si el dinero recibido fuera insuficiente. Ejemplo: si la
compra es de $317 y se abona con $500, el vuelto debe contener 1 billete de
$100, 1 billete de $50, 1 billete de $20, 1 billete de $10 y 3 billetes de $1.
4) Escribir dos funciones separadas para imprimir por pantalla los siguientes
patrones de asteriscos, donde la cantidad de filas se recibe como parámetro:
**********              *
**********              **
**********              ***
**********              ****
**********              ***** 
5) Crear una función lambda que devuelva el cuadrado de un valor recibido cómo
parámetro. Desarrollar además un programa para verificar el comportamiento
de la función.
6) Crear una función lambda para comprobar si un número es par o impar.
Desarrollar además un programa para verificar el comportamiento de la
función.
7) Crear una lista con los cuadrados de los números entre 1 y N (ambos
incluidos), donde N se ingresa desde el teclado. Luego se solicita imprimir los
últimos 10 valores de la lista.
8) Eliminar de una lista de palabras que se encuentren en una segunda lista.
Imprimir la lista original, la lista de palabras a eliminar y la lista resultante.
9) Escribir una función que reciba una lista como parámetro y devuelva True si la
lista está ordenada en forma ascendente o False en caso contrario. Por
ejemplo, ordenada([1, 2, 3]) retorna True y ordenada(['b', 'a']) retorna False.
Desarrollar además un programa para verificar el comportamiento de la
función.
10) Desarrollar una función que determine si una cadena de caracteres es capicúa,
sin utilizar cadenas auxiliares ni rebanadas. Escribir además un programa que
permita verificar su funcionamiento.
11) Leer una cadena de caracteres e imprimirla centrada en pantalla. Suponer que
la misma tiene 80 columnas.
12) Escribir una función que reciba como parámetro una tupla conteniendo una
fecha (día,mes,año) y devuelva una cadena de caracteres con la misma fecha
expresada en formato extendido. Por ejemplo, para (12, 10,17) devuelve “12 de
Octubre de 2017”. Escribir también un programa para verificar su
comportamiento.
13) Ingresar una frase desde el teclado y usar un conjunto para eliminar las
palabras repetidas, dejando un solo ejemplar de cada una. Finalmente mostrar
las palabras ordenadas según su longitud.
14) Desarrollar una función eliminar_claves() que reciba como parámetros un
diccionario y una lista de claves. La función debe eliminar del diccionario todas
las claves contenidas en la lista, devolviendo el diccionario modificado y un
valor de verdad que indique si la operación fue exitosa. Desarrollar también un
programa para verificar su comportamiento.
15) Escribir una función para eliminar una subcadena de una cadena de
caracteres, a partir de una posición y cantidad de caracteres dados,
devolviendo la cadena resultante. Escribir también un programa para verificar
el comportamiento de la misma. Escribir una función utilizando rebanadas.
'''