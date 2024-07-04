class Articulo():
    def __init__(self,titulo,periodista,texto,id):
        self.titulo=titulo
        self.periodista=periodista
        self.texto=texto
        self.id=id
        self.temas=[]

    def __str__(self):
        return f"Titulo:{self.titulo} Periodista:{self.periodista} Texto:{self.texto} ID:{self.id} Temas:{self.temas}"

    def add_temas(self,tema):
        self.temas.append(tema)


class Revista():
    def __init__(self,titulo,ejemplar):
        self.titulo=titulo
        self.ejemplar=ejemplar
        self.articulos=[]
        
    def agregar_nota(self,articulo):
        self.articulos.append(articulo)
        
    def __str__(self):
        cad=""
        for articulo in self.articulos:
            cad+=articulo.__str__() + "\n"
        return f"Revista\nTitulo:{self.titulo}\nNro Ejemplar:{self.ejemplar}\nArticulos:\n{cad}"
    
#programa principal

revista1=Revista("Junio 2024",111)

art1=Articulo("Boca campeon Libertadores","Gimena","assd asdasdasd asdasd asdasda",1)
art1.add_temas("futbol")
art1.add_temas("copa libertadores")
revista1.agregar_nota(art1)

art2=Articulo("Ecosistema","Gimena","bbbb bbbb bbbbb",2)
art1.add_temas("ecosistema")
art1.add_temas("planeta")
revista1.agregar_nota(art2)
print(revista1)