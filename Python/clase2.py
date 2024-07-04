'''
def suma(a, b): # Comentario en línea
    """Esta función devuelve la suma de las variables  a y b""" # docString
    return a + b
1-Leer nota y decir si esta aprobado si  nota >= 7  y <10 exelente , sino decirle desaprobado
'''
'''
nota = float(input("Ingrese la nota : "))

while nota<0 or nota >10:
    nota = float(input("Error - Ingrese la nota : "))

""" if nota< 0 or nota > 10 :
    print("Error") """
if nota >= 7 and nota <10 :
    print("Bien")
elif nota == 10 :
    print("Excelente")
else:
    print("Desaprobado")
    pares negativos hasta -10
'''

inicio= 0
final= -11
paso= -2

for i  in range(inicio, final , paso): # 0  -2  -4 -6  -8 -10 
    print(i)