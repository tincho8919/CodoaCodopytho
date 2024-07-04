#cadena.join(separador) 
cadena="Hola"
print("-".join(cadena) ) # H-O-L-A


cadena1 = """En Python es posible definir
cadenas de caracteres utilizando más de una
línea de código"""

# Definición de cadenas usando comillas simples triples:
cadena2 = '''Por supuesto, se puede hacer
lo mismo utilizando comillas simples'''

cadena = "Hola Codo a Codo"
print(len(cadena))  # 16
print(cadena[0])    # H
print(cadena[5])    # C
print(cadena[-1])   # o
print(cadena[-2])   # d

print(cadena.upper()) # CODO A CODO
print(cadena)         # Hola Codo a Codo
caddena=cadena.upper()
print(cadena.lower()) # codo a codo
print(cadena.capitalize()) # Codo a codo

cadena = "¡Hola mundo!"
print(cadena[6:11])   # mundo
print(cadena[2:12:2]) # oamno
print(cadena[6:])     # mundo!
print(cadena[:5])     # ¡Hola
print(cadena[:])      # ¡Hola mundo!
print(cadena[::2])    # ¡oamno
print(cadena[::-1])   # !odnum aloH¡



cadena = "¡Hola mundo!"
print(cadena[6:11])   # mundo
print(cadena[2:12:2]) # oamno
print(cadena[6:])     # mundo!
print(cadena[:5])     # ¡Hola
print(cadena[:])      # ¡Hola mundo!
print(cadena[::2])    # ¡oamno
print(cadena[::-1])   # !odnum aloH¡


cadena = "Codo a Codo"
print("C" in cadena)     # True
print("n" in cadena)     # False
print("Codo" in cadena)  # True
print("A" not in cadena) # True
print("o" not in cadena) # False
cadena = "Python el mejor lenguaje del mundo"
for i in range ( 0,len(cadena) ,1 ):
   print(cadena[i])






for letra in cadena:
   print(letra)

cadena = "Programador"  # ASCII
print(max(cadena)) # r
print(min(cadena)) # P

cadena = "12345"
cadena = '-'.join(cadena)
print(cadena) #1-2-3-4-5

cadena = "Codo a Codo"
lista = cadena.split(' ')
print(lista)  #['Codo', 'a', 'Codo']
cadena = "Codo a Codo"
cadena = cadena.replace('Codo', 'Mano')
print(cadena) # Mano a Mano

cad1 = "1234"
cad2 = "1234a"
print(cad1.isdigit())  # True
print(cad2.isdigit())  # False

cad1 = "12Ab"
cad2 = "12Ab%"
print(cad1.isalnum()) # devuelve si todos los caracteres son numericos o alfanumericos  True
print(cad2.isalnum()) # False

cad1 = "aprendiendo programación"
print(cad1.title()) # Aprendiendo Programación
cad1 = "Este es un TEXTO"
print(cad1.title())  # Este Es Un Texto
cad1 = "Hola"
cad2 = cad1.center(10,"*")
print(cad2)    # ***Hola***

cad1 = "Python"
cad1 = cad1.ljust(10, '-')
print(cad1)    # Python----

cad1 = "Python"
cad1 = cad1.rjust(10, '-')
print(cad1)    # ----Python

cad1 = "120"
cad1 = cad1.zfill(8)
print(cad1)   # 00000120

cad1 = "---Hola-Mundo----"
print( cad1.lstrip('-') )  # Hola-Mundo----
print( cad1.rstrip('-'))   # ---Hola-Mundo
print( cad1.strip('-'))    # Hola-Mundo

cad="Codo a Codo"
print( cad.find("Codo"))  # 0
print(cad.rfind("Codo"))  # 7

print(" Cantidad de o :" , cad.count("o"))


#Listas
numeros = [1,2,3,4,5]                   #Lista de números
dias = ["Lunes", "Martes", "Miércoles"] #Lista de strings
elementos = []                          #Lista vacía
matriz = [ [1,2,3] , [4,5,6] ]           #lista de listas, matriz de 3 * 2 

dias = ["Lunes", "Martes", "Miércoles"]
print(dias) # ["Lunes", "Martes", "Miércoles"]
print(dias[0]) # "Lunes"
print(dias[1]) #  "Martes"
print(dias[-1]) # "Miércoles"
# print(dias[3]) error out or range

lista = [2,3,4,5,6.6,9,9,7]
suma = 0
for i in range(len(lista)):
   suma = suma + lista[i]
print(suma) # 20
 
lista = [2,3,4,5,6]
print(lista) #
for i in range(0,len(lista),1): # 0 1 2 3 4
   print(lista[i])
print()
suma=0
for item in lista:
   suma=suma + item
   
print(suma)

suma=0
i=0
while i < len(lista):
   suma+=lista[i] # suma=suma+lista[i]
   i+=1  # i=i+1
   
print(suma)

suma = 0
i = 0
while i < len(lista):
   suma = suma + lista[i]
   i = i + 1
print(suma) # 20

vocales = ['a','e','i','o','u']
# El bucle recorre la lista
for letra in vocales:
   print(letra)

dias = ["Lunes", "Martes", "Miércoles"]
d1, d2, d3 = dias
print(d1) # Lunes
print(d2) # Martes
print(d3) # Miercoles

lista1 = [1,2,3]
lista2 = [4,5,6]
lista3 = lista1 + lista2
print(lista3) # [1,2,3,4,5,6]

lista = [3,4,5,6]
print(max(lista)) # 6
print(min(lista)) # 3
print(sum(lista)) # 18

lista = list(range(6))  #funcion list() - range(0,6,1) 0 1 2 3 4 5 
print(lista) # [0,1,2,3,4,5]
cadena = "Hola"
print(list(cadena)) # ["H","O","L","A"]

lista2 = [3,4,5,6]  # operador in  y  not in
print(4 in lista2)  #true
print(8 in lista2)  # False
print("A" not in lista2) #True

#.index(), count() y reverse()
lista = [3,4,5]
print(lista.index(5)) #Resultado: 2

lista = [3,4,5,3,5,8,5]
print(lista.count(5))   # Resultado: 3
print(lista.count(2))   # Resultado: 0

lista = [3,4,5]
print(lista.reverse())   # Resulado: [5,4,3]
print(lista)             # Resulado: [3,4,5]

lista = [5, 1, 7, 2]
lista.sort()
print(lista)  #Resultado: [1,2,5,7]

lista = [5, 1, 7, 2 , 10 , 100]
lista.sort(reverse=True)
print(lista) #Resultado: [7,5,2,1 ,10 , 100]

lista = [3,4,5]
lista.clear()
print(lista)   #Resultado: []

# Creación: Por extensión
diccionario  = {'Juan': 56, 'Ana': 15}
# Creación: Por compresión
diccionario  = {x: x ** 2 for x in (2, 4, 6)}

'''
{}                          # diccionario vacío
{'Juan': 56}                # diccionario de un elemento
{'Juan': 56, 'Ana': 15}     # diccionario de dos elementos
'''
diccionario = {1: 'uno', 2:'dos', 3:'tres'}
print(diccionario.keys())
for i in diccionario.keys():
    print(diccionario[i])    
for clave, valor in diccionario.items():
    print(clave, ':', valor, end= '; ')

# Tuplas - Creación: Por extensión
tupla1 = ('uno', 'dos', 'tres',9,8, True)
# Creación: Mediante empaquetado
tupla2 = 'Palotes, Juan de', (1930, 11, 13), 3000936
# desempaquetado de tuplas
nombre,  nacimiento, dni  =( 'Palotes, Juan de', (1930, 11, 13), 3000936)

''' ejemplos de tuplas
()                                              # tupla vacía
'un valor',                                     # tupla con un valor
('uno', 'dos', 'tres')                          # cadenas   
('Palotes, Juan de', (1930, 11, 13), 3000936)   # datos de persona


'''
tupla = ('Palotes, Juan de', (1930, 11, 13), 3000936)
nombre, fecha, dni = tupla # Desempaque
# Acceso por índices:
print('Nombre: ', tupla[0], '. Fecha nac.: ', tupla[1], '. DNI: ', tupla[2])
print(tupla[::]) # Acceso mediante rebanadas 

#ejemplo de conjuntos (set)
set()                                           # conjunto vacío
{'un valor'}                                    # conjunto con un valor
{'uno', 'dos', 'tres'}                          # conjunto de cadenas
{'Palotes, Juan de', (1930, 11, 13), 3000936}   # datos de persona

conjunto = {'Empleado', (1930, 11, 13), 36}
print(conjunto) 



















