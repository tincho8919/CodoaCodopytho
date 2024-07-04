//let nota = parseFloat (prompt ("Ingrese una nota:"))

/* if (nota >=7){
    calificacion("<h1>Aprobado</h1>")
}
else{
    calificacion("<h1>Desaprobado</h1>")
    
} 
document.write (calificacion) */

/* calificacion= nota>=7 ? "<h1>Aprobado</h1>" : "<h1>Desaprobado</h1>" */
/* document.write("<h1>FIN</h1>") */

//alert("Hello Words")

//document.write("<h1>Hello Words</h1>")

/* let num1 = parseFloat(prompt("Ingrese un numero :"))
let num2 = parseFloat(prompt("Ingrese un numero :"))
let num3 = parseFloat(prompt("Ingrese un numero :"))
/* console.log(num1+num2); */

/* if( num1 > num2  && num1 > num3 ){
    console.log("El mayor numero ingresado es "+num1);
}
else{
    if(num2>num3)
    console.log("El mayor numero ingresado es "+num2);
    else
    console.log("El mayor numero ingresado es "+num3);
}  */

let num1 = parseFloat(prompt("Ingrese un numero :"))
let num2 = parseFloat(prompt("Ingrese un numero :"))
let num3 = parseFloat(prompt("Ingrese un numero :"))
mensaje = num1 > num2 &&  num1 > num3 ? num1 :(num2>num3? num2 : num3)

console.log("el numero mayor es :" + mensaje);