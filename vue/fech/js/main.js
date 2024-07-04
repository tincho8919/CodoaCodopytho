fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
.then(response => response.json())
.then(data => {
    console.log(data)
   /*  document.write(`<p>`+data.chartName+`</p>`)
    document.write(`<p>`+data.time.updated+`</p>`)
    document.write(`<p>`+data.bpi.USD.code+`</p>`)
    document.write(`<p>`+data.bpi.USD.rate+`</p>`) */

    let cad =`<p>${data.chartName}</p>
              <p>${data.time.updated}</p>
              <p>${data.bpi.USD.code}</p>
              <p>${data.bpi.USD.rate}</p>
              `
              document.querySelector("main").innerHTML=cad
});







