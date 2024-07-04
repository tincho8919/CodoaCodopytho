/* let numeros = [6, 7, 11, 0, 1, 5]
for(let i=0 ; i < numeros.length ; i++ ){
    console.log(numeros[i]);
}

console.log("---------------------------------");

for (let elemento of numeros){
    console.log(elemento);
}

console.log("---------------------------------");

for (let indice in numeros){
    console.log(indice + "/" + numeros[i]);
}

console.log(numeros)
numeros.sort()
console.log(numeros)
numeros.sort((a,b)=> a-b)   //  a-b > 1 invierto sino lo dejo como esta
//console.log(numeros[0])
/*for ( let i=0; i < numeros.length ; i++){
    console.log( numeros[i]   )
}*/

/* for (let elemento of numeros){
    console.log(elemento)
}





//console.log(i)  // error no encuentra i por ser declarada local al bloque del for

let nombres = ["ana", "juan", "Zoe"]
nombres.sort()

console.log("---------------------------------");

console.log(nombres)

for 

const alfabetica = function (a, b) {
    return a.toUpperCase() > b.toUpperCase()? 1 :-1  //<0 lo deja igual  >0 lo invierte
};




nombres.sort(alfabetica)

console.log("Bien ordenado: " +nombres)




for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i])
}
for (let nombre of nombres){
    console.log(nombre)
}

for(let indice in nombres){
    console.log(nombres[indice])
}

1


localStorage.setItem("tutor","Felix")
let tutor=localStorage.getItem("tutor")
console.log(tutor)

let mesa={
    materia:"madera",
    precio: 100
}
localStorage.setItem("mesa",JSON.stringify(mesa))

let newMesa=JSON.parse(localStorage.getItem("mesa"))
console.log(newMesa) */




fotos = [
    "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
    "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
    "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
    "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
    "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
    "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
    "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
    "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
    "https://rickandmortyapi.com/api/character/avatar/12.jpeg",
    "https://rickandmortyapi.com/api/character/avatar/13.jpeg",
    "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
    "https://rickandmortyapi.com/api/character/avatar/15.jpeg",
    "https://rickandmortyapi.com/api/character/avatar/16.jpeg",
    "https://rickandmortyapi.com/api/character/avatar/17.jpeg",
    "https://rickandmortyapi.com/api/character/avatar/18.jpeg",
    "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
    "https://rickandmortyapi.com/api/character/avatar/20.jpeg",
    "https://rickandmortyapi.com/api/character/avatar/21.jpeg",
    "https://rickandmortyapi.com/api/character/avatar/22.jpeg",
    "https://rickandmortyapi.com/api/character/avatar/23.jpeg",
    "https://rickandmortyapi.com/api/character/avatar/24.jpeg",
    "https://rickandmortyapi.com/api/character/avatar/25.jpeg",
    "https://rickandmortyapi.com/api/character/avatar/26.jpeg",
    "https://rickandmortyapi.com/api/character/avatar/27.jpeg",
]


/* for (let elemento of fotos){
    document.write(`<img src=${elemento} >`)
} */



/*
for(let foto of fotos){
    document.write(`<img src=${foto}   >  `)
}
*/





/*
for(let foto of fotos){
    document.write(`<img src=${foto}  >`)
}
*/


let data = [
    {
        id: 1,
        nombre: "Rick Sanchez",
        estado: "Alive",
        especie: "Human",
        tipo: "",
        genero: "Male",
        imagen: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        creado: "2017-11-04T18:48:46.250Z"
    },
    {
        id: 2,
        nombre: "Morty Smith",
        estado: "Alive",
        especie: "Human",
        tipo: "",
        genero: "Male",
        imagen: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        creado: "2017-11-04T18:50:21.651Z"
    },
    {
        id: 3,
        nombre: "Summer Smith",
        estado: "Alive",
        especie: "Human",
        tipo: "",
        genero: "Female",
        imagen: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
        creado: "2017-11-04T19:09:56.428Z"
    },
    {
        id: 4,
        nombre: "Beth Smith",
        estado: "Alive",
        especie: "Human",
        tipo: "",
        genero: "Female",
        imagen: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
        creado: "2017-11-04T19:22:43.665Z"
    },
    {
        id: 5,
        nombre: "Jerry Smith",
        estado: "Alive",
        especie: "Human",
        tipo: "",
        genero: "Male",
        imagen: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
        creado: "2017-11-04T19:26:56.301Z"
    },
    {
        id: 6,
        nombre: "Abadango Cluster Princess",
        estado: "Alive",
        especie: "Alien",
        tipo: "",
        genero: "Female",
        nombre: "Abadango",
        imagen: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
        creado: "2017-11-04T19:50:28.250Z"
    },
    {
        id: 7,
        nombre: "Abradolf Lincler",
        estado: "unknown",
        especie: "Human",
        tipo: "Genetic experiment",
        genero: "Male",
        imagen: "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
        creado: "2017-11-04T19:59:20.523Z"
    },
    {
        id: 8,
        nombre: "Adjudicator Rick",
        estado: "Dead",
        especie: "Human",
        tipo: "",
        genero: "Male",
        imagen: "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
        creado: "2017-11-04T20:03:34.737Z"
    },
    {
        id: 9,
        nombre: "Agency Director",
        estado: "Dead",
        especie: "Human",
        tipo: "",
        genero: "Male",
        imagen: "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
        creado: "2017-11-04T20:06:54.976Z"
    },
    {
        id: 10,
        nombre: "Alan Rails",
        estado: "Dead",
        especie: "Human",
        tipo: "Superhuman (Ghost trains summoner)",
        genero: "Male",
        imagen: "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
        creado: "2017-11-04T20:19:09.017Z"
    },
    {
        id: 11,
        nombre: "Albert Einstein",
        estado: "Dead",
        especie: "Human",
        tipo: "",
        genero: "Male",
        imagen: "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
        creado: "2017-11-04T20:20:20.965Z"
    },
    {
        id: 12,
        nombre: "Alexander",
        estado: "Dead",
        especie: "Human",
        tipo: "",
        genero: "Male",
        nombre: "Earth (C-137)",
        imagen: "https://rickandmortyapi.com/api/character/avatar/12.jpeg",
        creado: "2017-11-04T20:32:33.144Z"
    },
    {
        id: 13,
        nombre: "Alien Googah",
        estado: "unknown",
        especie: "Alien",
        tipo: "",
        genero: "unknown",
        imagen: "https://rickandmortyapi.com/api/character/avatar/13.jpeg",
        creado: "2017-11-04T20:33:30.779Z"
    }
    ,
    {
        id: 14,
        nombre: "Alien Morty",
        estado: "unknown",
        especie: "Alien",
        tipo: "",
        genero: "Male",
        imagen: "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
        creado: "2017-11-04T20:51:31.373Z"
    },
    {
        id: 15,
        nombre: "Alien Rick",
        estado: "unknown",
        especie: "Alien",
        tipo: "",
        genero: "Male",
        nombre: "unknown",
        imagen: "https://rickandmortyapi.com/api/character/avatar/15.jpeg",
        creado: "2017-11-04T20:56:13.215Z"
    },
    {
        id: 16,
        nombre: "Amish Cyborg",
        estado: "Dead",
        especie: "Alien",
        tipo: "Parasite",
        genero: "Male",
        imagen: "https://rickandmortyapi.com/api/character/avatar/16.jpeg",
        creado: "2017-11-04T21:12:45.235Z"
    },
    {
        id: 17,
        nombre: "Annie",
        estado: "Alive",
        especie: "Human",
        tipo: "",
        genero: "Female",
        nombre: "Earth (C-137)",
        imagen: "https://rickandmortyapi.com/api/character/avatar/17.jpeg",
        creado: "2017-11-04T22:21:24.481Z"
    },
    {
        id: 18,
        nombre: "Antenna Morty",
        estado: "Alive",
        especie: "Human",
        tipo: "Human with antennae",
        genero: "Male",
        nombre: "unknown",
        imagen: "https://rickandmortyapi.com/api/character/avatar/18.jpeg",
        creado: "2017-11-04T22:25:29.008Z"
    },
    {
        id: 19,
        nombre: "Antenna Rick",
        estado: "unknown",
        especie: "Human",
        tipo: "Human with antennae",
        genero: "Male",
        nombre: "unknown",
        imagen: "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
        creado: "2017-11-04T22:28:13.756Z"
    },
    {
        id: 20,
        nombre: "Ants in my Eyes Johnson",
        estado: "unknown",
        especie: "Human",
        tipo: "Human with ants in his eyes",
        genero: "Male",
        imagen: "https://rickandmortyapi.com/api/character/avatar/20.jpeg",
        creado: "2017-11-04T22:34:53.659Z"
    },
    {
        id: 21,
        nombre: "Aqua Morty",
        estado: "unknown",
        especie: "Humanoid",
        tipo: "Fish-Person",
        genero: "Male",
        imagen: "https://rickandmortyapi.com/api/character/avatar/21.jpeg",
        creado: "2017-11-04T22:39:48.055Z"
    },
    {
        id: 22,
        nombre: "Aqua Rick",
        estado: "unknown",
        especie: "Humanoid",
        tipo: "Fish-Person",
        genero: "Male",
        imagen: "https://rickandmortyapi.com/api/character/avatar/22.jpeg",

        creado: "2017-11-04T22:41:07.171Z"
    },
    {
        id: 23,
        nombre: "Arcade Alien",
        estado: "unknown",
        especie: "Alien",
        tipo: "",
        genero: "Male",
        nombre: "unknown",
        imagen: "https://rickandmortyapi.com/api/character/avatar/23.jpeg",
        creado: "2017-11-05T08:43:05.095Z"
    },
    {
        id: 24,
        nombre: "Armagheadon",
        estado: "Alive",
        especie: "Alien",
        tipo: "Cromulon",
        genero: "Male",
        imagen: "https://rickandmortyapi.com/api/character/avatar/24.jpeg",
        creado: "2017-11-05T08:48:30.776Z"
    },
    {
        id: 25,
        nombre: "Armothy",
        estado: "Dead",
        especie: "unknown",
        tipo: "Self-aware arm",
        genero: "Male",
        imagen: "https://rickandmortyapi.com/api/character/avatar/25.jpeg",
        creado: "2017-11-05T08:54:29.343Z"
    },
    {
        id: 26,
        nombre: "Arthricia",
        estado: "Alive",
        especie: "Alien",
        tipo: "Cat-Person",
        genero: "Female",
        nombre: "Purge Planet",
        imagen: "https://rickandmortyapi.com/api/character/avatar/26.jpeg",
        creado: "2017-11-05T08:56:46.165Z"
    },
    {
        id: 27,
        nombre: "Artist Morty",
        estado: "Alive",
        especie: "Human",
        tipo: "",
        genero: "Male",
        imagen: "https://rickandmortyapi.com/api/character/avatar/27.jpeg",
        creado: "2017-11-05T08:59:07.457Z"
    },
    {
        id: 28,
        nombre: "Attila Starwar",
        estado: "Alive",
        especie: "Human",
        tipo: "",
        genero: "Male",
        imagen: "https://rickandmortyapi.com/api/character/avatar/28.jpeg",
        creado: "2017-11-05T09:02:16.595Z"
    },
    {
        id: 29,
        nombre: "Baby Legs",
        estado: "Alive",
        especie: "Human",
        tipo: "Human with baby legs",
        genero: "Male",
        imagen: "https://rickandmortyapi.com/api/character/avatar/29.jpeg",
        creado: "2017-11-05T09:06:19.644Z"
    },
    {
        id: 30,
        nombre: "Baby Poopybutthole",
        estado: "Alive",
        especie: "Poopybutthole",
        tipo: "",
        genero: "Male",
        imagen: "https://rickandmortyapi.com/api/character/avatar/30.jpeg",
        creado: "2017-11-05T09:13:16.483Z"
    },
    {
        id: 31,
        nombre: "Baby Wizard",
        estado: "Dead",
        especie: "Alien",
        tipo: "Parasite",
        genero: "Male",
        imagen: "https://rickandmortyapi.com/api/character/avatar/31.jpeg",
        creado: "2017-11-05T09:15:11.286Z"
    },
    {
        id: 32,
        nombre: "Bearded Lady",
        estado: "Dead",
        especie: "Alien",
        tipo: "Parasite",
        genero: "Female",
        imagen: "https://rickandmortyapi.com/api/character/avatar/32.jpeg",

    },
    {
        id: 33,
        nombre: "Beebo",
        estado: "Dead",
        especie: "Alien",
        tipo: "",
        genero: "Male",
        imagen: "https://rickandmortyapi.com/api/character/avatar/33.jpeg",
    },
    {
        id: 34,
        nombre: "Benjamin",
        estado: "Alive",
        especie: "Poopybutthole",
        tipo: "",
        genero: "Male",

        imagen: "https://rickandmortyapi.com/api/character/avatar/34.jpeg",

    },
    {
        id: 35,
        nombre: "Bepisian",
        estado: "Alive",
        especie: "Alien",
        tipo: "Bepisian",
        genero: "unknown",
        imagen: "https://rickandmortyapi.com/api/character/avatar/35.jpeg",
    },
    {
        id: 36,
        nombre: "Beta-Seven",
        estado: "Alive",
        especie: "Alien",
        tipo: "Hivemind",
        genero: "unknown",
        imagen: "https://rickandmortyapi.com/api/character/avatar/36.jpeg",
    },
    {
        id: 37,
        nombre: "Beth Sanchez",
        estado: "Alive",
        especie: "Human",
        tipo: "",
        genero: "Female",
        imagen: "https://rickandmortyapi.com/api/character/avatar/37.jpeg",
    },
    {
        id: 38,
        nombre: "Beth Smith",
        estado: "Alive",
        especie: "Human",
        tipo: "",
        genero: "Female",

        imagen: "https://rickandmortyapi.com/api/character/avatar/38.jpeg",

    },
    {
        id: 39,
        nombre: "Beth Smith",
        estado: "Alive",
        especie: "Human",
        tipo: "",
        genero: "Female",
        imagen: "https://rickandmortyapi.com/api/character/avatar/39.jpeg",
    },
    {
        id: 40,
        nombre: "Beth's Mytholog",
        estado: "Dead",
        especie: "Mythological Creature",
        tipo: "Mytholog",
        genero: "Female",
        imagen: "https://rickandmortyapi.com/api/character/avatar/40.jpeg",
    },
    {
        id: 41,
        nombre: "Big Boobed Waitress",
        estado: "Alive",
        especie: "Mythological Creature",
        tipo: "",
        genero: "Female",
        imagen: "https://rickandmortyapi.com/api/character/avatar/41.jpeg",
    },
    {
        id: 42,
        nombre: "Big Head Morty",
        estado: "unknown",
        especie: "Human",
        tipo: "Human with giant head",
        genero: "Male",
        imagen: "https://rickandmortyapi.com/api/character/avatar/42.jpeg",
    },
    {
        id: 43,
        nombre: "Big Morty",
        estado: "Dead",
        especie: "Human",
        tipo: "",
        genero: "Male",
        imagen: "https://rickandmortyapi.com/api/character/avatar/43.jpeg",
    },
    {
        id: 44,
        nombre: "Body Guard Morty",
        estado: "Dead",
        especie: "Human",
        tipo: "",
        genero: "Male",
        imagen: "https://rickandmortyapi.com/api/character/avatar/44.jpeg",
    },
    {
        id: 45,
        nombre: "Bill",
        estado: "Alive",
        especie: "Human",
        tipo: "",
        genero: "Male",
        imagen: "https://rickandmortyapi.com/api/character/avatar/45.jpeg",
    },
    {
        id: 46,
        nombre: "Bill",
        estado: "unknown",
        especie: "Animal",
        tipo: "Dog",
        genero: "Male",
        imagen: "https://rickandmortyapi.com/api/character/avatar/46.jpeg",
    },
    {
        id: 47,
        nombre: "Birdperson",
        estado: "Alive",
        especie: "Alien",
        tipo: "Bird-Person",
        genero: "Male",
        imagen: "https://rickandmortyapi.com/api/character/avatar/47.jpeg",
    },
    {
        id: 48,
        nombre: "Black Rick",
        estado: "Alive",
        especie: "Human",
        tipo: "",
        genero: "Male",
        imagen: "https://rickandmortyapi.com/api/character/avatar/48.jpeg",
    },
    {
        id: 49,
        nombre: "Blamph",
        estado: "Alive",
        especie: "Alien",
        tipo: "",
        genero: "unknown",
        imagen: "https://rickandmortyapi.com/api/character/avatar/49.jpeg",
    },
    {
        id: 50,
        nombre: "Blim Blam",
        estado: "Alive",
        especie: "Alien",
        tipo: "Korblock",
        genero: "Male",
        imagen: "https://rickandmortyapi.com/api/character/avatar/50.jpeg",
    },
    {
        id: 51,
        nombre: "Blue Diplomat",
        estado: "Alive",
        especie: "Alien",
        tipo: "",
        genero: "Male",
        imagen: "https://rickandmortyapi.com/api/character/avatar/51.jpeg",
    },
    {
        id: 52,
        nombre: "Blue Footprint Guy",
        estado: "Dead",
        especie: "Human",
        tipo: "",
        genero: "Male",
        imagen: "https://rickandmortyapi.com/api/character/avatar/52.jpeg",
    },
    {
        id: 53,
        nombre: "Blue Shirt Morty",
        estado: "unknown",
        especie: "Human",
        tipo: "",
        genero: "Male",
        imagen: "https://rickandmortyapi.com/api/character/avatar/53.jpeg",
    },
    {
        id: 54,
        nombre: "Bobby Moynihan",
        estado: "Alive",
        especie: "Human",
        tipo: "",
        genero: "Male",
        imagen: "https://rickandmortyapi.com/api/character/avatar/54.jpeg",
    },
    {
        id: 55,
        nombre: "Boobloosian",
        estado: "Dead",
        especie: "Alien",
        tipo: "Boobloosian",
        genero: "unknown",
        imagen: "https://rickandmortyapi.com/api/character/avatar/55.jpeg",
    },
    {
        id: 56,
        nombre: "Bootleg Portal Chemist Rick",
        estado: "Dead",
        especie: "Human",
        tipo: "",
        genero: "Male",
        imagen: "https://rickandmortyapi.com/api/character/avatar/56.jpeg",
    },
    {
        id: 57,
        nombre: "Borpocian",
        estado: "Alive",
        especie: "Alien",
        tipo: "Elephant-Person",
        genero: "Male",
        imagen: "https://rickandmortyapi.com/api/character/avatar/57.jpeg",
    },
    {
        id: 58,
        nombre: "Brad",
        estado: "Alive",
        especie: "Human",
        tipo: "",
        genero: "Male",
        imagen: "https://rickandmortyapi.com/api/character/avatar/58.jpeg",
    },
    {
        id: 59,
        nombre: "Brad Anderson",
        estado: "Dead",
        especie: "Human",
        tipo: "",
        genero: "Male",
        imagen: "https://rickandmortyapi.com/api/character/avatar/59.jpeg",
    },
    {
        id: 60,
        nombre: "Calypso",
        estado: "Dead",
        especie: "Human",
        tipo: "Superhuman",
        genero: "Female",
        imagen: "https://rickandmortyapi.com/api/character/avatar/60.jpeg",
    }
]
let cad = ``
for (let elemento of data) {
    cad = cad + ` <div class="tarjeta">
    <img src= ${elemento.imagen} alt=${elemento.nombre}>
    <div class="cuerpo">
        <p><b>Nombre:</b>${elemento.nombre}</p>
        <p>Especie:${elemento.especie}</p>
        <p>Genero:${elemento.genero}</p>
    </div>    
</div>
    `
}

document.querySelector(".contenedor").innerHTML=cad
/* let cad1 = ``
for (let elemento of fotos){
    /* document.write(`<img src=${elemento}>`) */
/*         cad1 = cad1 +
        `<img src=${elemento} > `

} */
/* document.getElementById("fotos").innerHTML=cad1 */
/* document.querySelector("#fotos").innerHTML=cad1 */

/* let cad = ``
for (elemento of data) {
    cad = cad + `<div class="tarjeta">
    <img src="${elemento.imagen}" alt="${elemento.nombre}">
    <div class="cuerpo">
        <p>${elemento.nombre}</p>
        <p>${elemento.especie}</p>
        <p>${elemento.genero}</p>
    </div>
    </div>
}
/* document.querySelector(".contenedor").innerHTML = cad */
/* cad = ``
for (let personaje of data) {
    cad = cad + `
    <div class="tarjeta">
    <img src=${personaje.imagen} alt=${personaje.nombre}>
    <div class="cuerpo">
        <h3>${personaje.nombre}</h3>
        <h4>${personaje.especie}</h4>
    </div>
</div>
    `
}
 */
//document.querySelector(".contenedor").innerHTML=cad


