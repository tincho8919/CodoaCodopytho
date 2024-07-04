class Persona:
    
    def __init__(self, nombre, edad, dni):  # _init_ metodo contructor de clase
        self.nombre = nombre  # al atributo nombre le asigno el parametro nombre
        self.edad = edad  # al atributo edad le asigno el parametro edad
        self.dni = dni  # al atributo dni le asigno el parametro dni

    def identificarse(self):
        print("Nombre:", self.nombre, "Edad:", self.edad, "DNI:", self.dni)


# programa principal
yo = Persona("Marcela", 59, 17330973)  # yo es un objeto de la clase persona
yo.identificarse()  # Nombre: Marcela Edad: 59 DNI:1733093

mati = Persona("Marias", 25, 35353353)
mati.identificarse()
