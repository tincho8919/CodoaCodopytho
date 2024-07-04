class Persona():
  # Método constructor
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad

    def identificarse(self): # Método normal
        print(f"Hola. Soy {self.nombre} y tengo {self.edad} años.")

# Instanciamos
persona1 = Persona("Juan", 42) 
persona1.identificarse()


'''
class Cuadrado:
  def __init__(self, lado):
      self.lado = lado
  def calcular_area(self):
      return self.lado * self.lado 
  def calcular_perimetro(self):
      return self.lado * 4
l=float(input("Ingrese el lado:"))
cuad1 = Cuadrado(l)  # Instanciamos
print("Area:",cuad1.calcular_area())      # l * l
print("Perimetro:",cuad1.calcular_perimetro()) # 4*l
'''

'''
class Punto():
    def __init__(self,x,y):
        self.x = x
        self.y = y

    def __str__(self):
        return f"({self.x},{self.y})"
    
    def distancia(self,pto):
        return (  (self.x-pto.x)**2 + (self.y-pto.y)**2)**(1/2)
    def distancia_al_origen(self):
        return (  (self.x)**2 + (self.y)**2)**(1/2)
    

pto1=Punto(1,1)
pto2=Punto(2,2)

print(pto1)
print(pto2)
print(pto1.distancia(pto2))
print(pto1.distancia_al_origen())
print(pto2.distancia_al_origen())
Clase banco, atributos nro, cliente, saldo
metodos depositar(importe), extraer(importe), transferencia(cta,importe)
'''

'''
class CuentaBancaria:
    def __init__(self,nro,cliente):
        self.nro=nro
        self.cliente=cliente
        self.saldo=0
    def depositar(self,importe):
        self.saldo+=importe
    def extraer(self,importe):
        self.saldo-=importe

    def transferencia(self,cta,importe):
        self.saldo-=importe
        cta.saldo+=importe
    def __str__(self):
        return f"Nro Cta: {self.nro} - Cliente: {self.cliente} - Saldo: {self.saldo}"

cta1=CuentaBancaria(1,"Juan")
cta2=CuentaBancaria(2,"Pedro")
cta1.depositar(100)
cta1.extraer(50)
print(cta1)
cta2.depositar(500)
cta2.transferencia(cta1,100)
print(cta1)
print(cta2)
       
'''