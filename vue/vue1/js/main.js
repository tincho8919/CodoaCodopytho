const { createApp, ref } = Vue

createApp({
  setup() {
    
    return {
      nombre:"marcela",
      apellido:"cerda",
      edad:15,
      logica:true,
      hijos:["Ana","Mariano","Luis","Zoe"],
      etiquetashtml:"<h1>Persona</h1>",
      error:false,
      foto:"",
      link:"https://api.coindesk.com/v1/bpi/currentprice.json"
    }
  }
}).mount('#app')
