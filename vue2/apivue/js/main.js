const { createApp, ref } = Vue

createApp({
  setup() {
    
    return {
      message:"Bienvenidos a VUE",
      nombre:"Marcela",
      apellido:"Cerda",
      edad:17,
      hijos:["Ana","Carlos","Zoe","Luis"],
      foto:"https://th.bing.com/th/id/OIP.K381jCrMxyg8axhL31G2iQHaFj?rs=1&pid=ImgDetMain",
      error:false
    }
  }
}).mount('#app')
