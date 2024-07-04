class Equipo():
    def __init__(self,nombre,max_jugadores):
        self.nombre=nombre
        self.max_jugadores=max_jugadores
        self.jugadores= []
    def __str__(self):
        return f"Nombre Equipo:{self.nombre} \nCant.MaxJugadores: {self.max_jugadores} \nJugadores:{self.jugadores}\n"
    def add_jugadores(self,nombre):
        self.jugadores.append(nombre)
        
class Reserva():
    def __init__(self,fecha, equipo1 , equipo2):
       self.fecha=fecha
       self.equipo1=equipo1
       self.equipo2=equipo2

    def __str__(self):
        return f"Reserva:\nFecha:{self.fecha} \nEquipo1:{self.equipo1}\nEquipo2:\n{self.equipo2}\n"
        
        
        
        
        
# programa principal

equipo1=Equipo("sacachispas",7)
equipo1.add_jugadores("Dalila")
equipo1.add_jugadores("Matias")
#print(equipo1)
    
equipo2=Equipo("Boca",7)
equipo2.add_jugadores("Gimena")
equipo2.add_jugadores("Luciano")
#print(equipo2)

reserva1=Reserva("11/6/34",equipo1,equipo2)
print(reserva1)

reserva2=Reserva("18/6/34",equipo1,equipo2)
print(reserva2)