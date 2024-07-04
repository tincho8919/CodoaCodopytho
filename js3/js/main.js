

/* let dia= parseInt(prompt("Ingrese su nacimiento :"))

let mes= parseInt(prompt("Ingrese el mes de su nacimiento entre 1 y 12 :"))

let signo=""
switch (mes) {
        case 1:
        if (dia > 22) {
            signo = "Capricornio"
        } else {
            signo = "Acuario"
        }
        break
        case 2:
        
        if (dia > 22) {
            signo = "Acuario"
        } else {
            signo = "Piscis"
        }
        
        break
        case 3:

        if (dia > 22) {
            signo = "Piscis"
        } else {
            signo = "Aries"
        }
        default:
        alert("mes erroneo")
}

document.write("<p>El signo de zoodiaco es :"+signo+"</p>") */
/* for (let i = 1; i<10; i++) {
    document.write("<p> Buenos Dias</p>")
    
} */


// Escribir los números enteros entre 10 y 20

/* for (let i = 10; i<21; i++) {
    document.write("<p>"+i+"</p>")
    } */
// Escriba los numeros pares de 0 al 20.
/* for (let i = 0; i<21; i=i+2) {
    document.write("<p>"+ i +"</p>")
    } */
// Escribir los multiplos de 5   de   1 al 50
// Escribir los numeros del 100 al 1
 /* for (let i = 100; i>=1; i--) {
    document.write("<p>"+ i +"</p>")
    }  */
// Validar que la edad de una persona sea > 0 y < 105
/* let edad= parseInt (prompt("Ingrese la edad :"))
while (edad <=0 || edad>=105 ) {// va a repetir mientras esa condicion es verdadera
    alert("Edad erronea")
    edad= parseInt(prompt("Ingrese la edad"))

} 
alert("Gracias por utilizar este sitio") */
//
//
// tabla de multiplicar de n
/*
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21

7 x 10 = 30
for
*/
/* let n =prompt("Ingrese el nro de la tabla de multiplicar")
for (let i = 1; i < 11; i++) {
    document.write("<p>"+ n + "x" + i + " = " + i*n + "</p>")
    
}  */
// Leer numeros de legajos hasta que ingrese un 0
/* let legajo = parseInt(prompt("Ingrese el nuro de legajo (1 al 1000) o 0 para finalizar"))

while (legajo !== 0) {
    legajo = parseInt(prompt("Ingrese el nuro de legajo o 0 para finalizar"))
}
alert("Gracias por utilizar este sitio") */
//Programar la funcion calcularTablaMultiplicar(n)
//Programar la funcion sumar(a,b)

/* function sumar(a,b) {
    return a+b
}
function calcularPotencia(b,e) {
   return b**e
}
let x=parseInt(prompt("Ingrese la base"))
let y=parseInt(prompt("Ingrese el exponente"))
let z= calcularPotencia( x, y )

alert("El resultado de"+ x + "*" +y + "=" + z) */

function calcularTablaMultiplicar(n) {
    for (let i = 1; i < 11; i++) {
        document.write("<p>"+ n + " x "+ i + " = " + i*n + "</p>")
    }    
    
}


let x=parseInt(prompt("Ingrese el numero de tabla : "))
calcularTablaMultiplicar(x)