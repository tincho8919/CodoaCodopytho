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
       

