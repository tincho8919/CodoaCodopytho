# estado   hambre    0     100
#          suenio    0     100
#          animo     0     100
#          salud     0     100
'''
Botones   
comer   hambre -10    animo +5
dormir  suenio -10    animo +5
jugar   hambre +habre  animo +10
medicina    enfemedad -10    animo 10
pasoTiempo   animo-    hambre+ suenio+  enfermedad+
'''
class Tamagotchi():
    def __init__(self):
        self.hambre=50
        self.suenio=50
        self.animo=50
        self.salud=50
    def comer(self):
        self.hambre-=10
        self.animo+=10
    def dormir(self):
        self.hambre+=10
        self.animo+=10
        self.suenio-=10
    def paso_tiempo(self):
        self.hambre+=3
        self.animo-=10
        self.suenio+=3
        self.salud-=3
       
    def jugar(self):
        self.hambre+=10
        self.animo+=10
        self.suenio+=10        
    def curar(self):
        self.salud+=10
    def __str__(self):
        return f"Hambre:{self.hambre} - Animo:{self.animo} - Salud:{self.salud} - Suenio:{self.suenio} "

    def control_estado(self):
        return  self.hambre>0  and self.hambre<=100 and \
            self.suenio>0 and self.suenio<=100 and \
            self.animo>0 and self.animo<=100 and \
            self.salud>0 and self.salud<=100
    
#programa principal
pow=Tamagotchi()

opcion=int(input("Menu:\n1-Comer\n2-Jugar\n3-Curar\n4-Dormir\n5-Salir\nPresione una opcion:"))

while opcion != 5 and pow.control_estado():
    print(pow)
    if opcion==1:
        pow.comer()
    elif opcion==2:
        pow.jugar()
    elif opcion==3:
        pow.curar()
    elif opcion==4:
        pow.dormir()
    pow.paso_tiempo()
    
    opcion=int(input("Menu\n1-Comer\n2-Jugar\n3-Curar\n4-Dormir\n5-Salir\nPresione una opcion:"))
   








