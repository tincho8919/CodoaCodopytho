
cad = ``
/* url = "https://mcerda.pythonanywhere.com/productos" */
fetch(url)
    .then(response => response.json())
    .then(
        data => {
            console.log(data)
            for (item of data) {
                cad = cad + `<tr class="">
                    <td scope="row">${item.id}</td>
                    <td>${item.nombre}</td>
                    <td>${item.stock}</td>
                    <td>${item.precio}</td>
                    <td>
                    <img width="200" src=
                    ${item.imagen} alt=${item.nombre} </img>
                    </td>
                    <td>
                    
                    </td>
                    </tr>
                    `
            }
            console.log(cad);
           document.querySelector("tbody").innerHTML=cad



        }
    )
     .catch(error => {
        console.log("Error:" + error)
        this.error = true
    }); 


