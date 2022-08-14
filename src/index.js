const baseUrl = "https://platzi-avo.vercel.app"
const appNode = document.querySelector('#app')

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


const datos = await fetch(`${baseUrl}/api/avo`);
const respuestaJson =  await datos.json();
const todos = []
respuestaJson.data.forEach(item => {
    //crear imagen
    const image = document.createElement('img')
    image.src = `${baseUrl}${item.image}`;
    //crear titulo
    const title = document.createElement('h2')
    title.textContent = item.name;
    //crear precio
    const price = document.createElement('div')
    price.textContent = item.price;

    const container = document.createElement('div')
    container.append(image,title,price)
    todos.push(container)
});

appNode.append(...todos)
