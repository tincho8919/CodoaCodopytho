
class Persona:
    def __init__(x,nombre,apellido,dni):
        x.nombre=nombre
        x.apellido=apellido
        x.dni=dni
     
    def __str__(self):
        return f"Nombre: {self.apellido}, {self.nombre} - DNI: {self.dni}"

class Alumno(Persona):
    def __init__(self,nombre,apellido,dni,nota):
        #Persona.__init__(self,nombre,apellido,dni)
        super().__init__(nombre,apellido,dni)
        self.nota=nota
        
    def __str__(self):
        #return Persona.__str__(self) + f" Nota:{self.nota}"
        return super().__str__( ) + f" Nota:{self.nota}"
    
class Personal():
    def __init__(x,cuil,cargo,salario):
        x.cuil=cuil
        x.cargo=cargo
        x.salario=salario
        
    def __str__(x):
        return f"CUIL : {x.cuil} - Cargo: {x.cargo} -Salario: {x.salario}"
    
class Docente(Persona, Personal):
    def __init__(self,nombre,apellido,dni,cuil,cargo,salario):
        Persona.__init__(self,nombre,apellido,dni)
        Personal.__init__(self,cuil,cargo,salario)
        #super().__init__(nombre,apellido,dni)
        
        
    def __str__(self):
        return "Docente: " +Persona.__str__(self) + Personal.__str__(self)
        #return "Docente: " + super().__str__( ) + f" Salario:{self.salario}"
    
    
    
    
#Programa principal
nom=str(input("ingrese su Nombre:"))
apellido=str(input("ingrese su Apellido:"))
dni=str(input("ingrese su dni:"))


p1=Persona(nom,apellido,dni)
print(p1)

a1=Alumno("Luz", "Perez", 45000000,10)
print(a1) 

d1=Docente("Marcela","Cerda",400007,1000000,"Docente fullstack",24657892)
print(d1) 