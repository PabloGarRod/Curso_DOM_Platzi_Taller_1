const url = "https://platzi-avo.vercel.app/api/avo"

// //web api
// //Conectarnos al server
// window.fetch(url)
// //Procesar la respuesta y convertirla en JSON
// .then((respuesta)=>respuesta.json())
// //JSON --> Data --> Rendereizar info browser
// .then((respuestaJson)=>{
//     respuestaJson.data.forEach(item => {
//         console.log(item.name)
//     });
// });


const datos = await fetch(url);
const respuestaJson =  await datos.json();
const todos = []
respuestaJson.data.forEach(item => {
    //crear imagen
    const image = document.createElement('img')
    //crear titulo
    const title = document.createElement('h2')
    //crear precio
    const price = document.createElement('div')

    const container = document.createElement('div')
    container.append(image,title,price)
    todos.push(container)
});

document.body.append(...todos)
