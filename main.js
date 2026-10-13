/*

    Cargar comidas en memoria desde el JSON
*/
let comidas = 
  [
    {
      "nombre": "Asado",
      "categoria": "Parrilla",
      "provincia": "Buenos Aires",
      "ingredientes": ["Carne vacuna", "Sal", "Chimichurri"]
    },
    {
      "nombre": "Empanadas",
      "categoria": "Horno",
      "provincia": "Tucumán",
      "ingredientes": ["Carne", "Cebolla", "Aceitunas", "Huevo"]
    },
    {
      "nombre": "Locro",
      "categoria": "Guiso",
      "provincia": "Salta",
      "ingredientes": ["Maíz", "Porotos", "Chorizo", "Panceta", "Zapallo"]
    },
    {
      "nombre": "Milanesa",
      "categoria": "Frito",
      "provincia": "Buenos Aires",
      "ingredientes": ["Carne", "Huevo", "Pan rallado", "Aceite"]
    },
    {
      "nombre": "Humita en Chala",
      "categoria": "Horno",
      "provincia": "Jujuy",
      "ingredientes": ["Maíz", "Queso", "Cebolla", "Ají molido"]
    },
    {
      "nombre": "Choripán",
      "categoria": "Parrilla",
      "provincia": "Córdoba",
      "ingredientes": ["Chorizo", "Pan", "Chimichurri"]
    },
    {
      "nombre": "Provoleta",
      "categoria": "Parrilla",
      "provincia": "Buenos Aires",
      "ingredientes": ["Queso provolone", "Orégano", "Aceite de oliva"]
    },
    {
      "nombre": "Milanesas a la napolitana",
      "categoria": "Frito",
      "provincia": "Santa Fe",
      "ingredientes": ["Carne", "Tomate", "Queso", "Jamón", "Orégano"]
    },
    {
      "nombre": "Matambre a la pizza",
      "categoria": "Parrilla",
      "provincia": "Buenos Aires",
      "ingredientes": ["Matambre", "Queso", "Tomate", "Orégano"]
    },
    {
      "nombre": "Torta Frita",
      "categoria": "Frito",
      "provincia": "Entre Ríos",
      "ingredientes": ["Harina", "Agua", "Sal", "Grasa"]
    }
  ]
;
fetch('./data/comidas.json')          // Ruta al archivo JSON
  .then(response => response.json())  // Convertir la respuesta en JSON
  .then(data => {                     // Aquí tienes acceso al JSON en formato de objeto JS
    console.log('Comidas cargadas desde JSON:');
    console.log(data);    
    comidas = data;  
    mostrarComidasConForEach(comidas)                 // Asignar el JSON a la variable comidas
  })
  .catch(error => {                   // Manejo de errores al leer el archivo JSON
    console.error('Error al leer el archivo JSON:', error);
  });



const container = document.getElementById('comidaContainer');

function mostrarComidasConForEach(lista){


  container.innerHTML = ""

  lista.forEach(comida => {
    container.innerHTML += `
    <article class="card">
      <p>${comida.provincia}</p>
            <h2>${comida.nombre}</h2>

      <h3>${comida.categoria}</h3>
      <ul class= 'ingredientes'>
      ${comida.ingredientes.map(ingrediente => `<li class='ingrediente'>${ingrediente}</li>`).join('')}
      </ul>
    </article>
  `
  });
}
const agregarComidaForm = document.getElementById("agregarComidaForm")

agregarComidaForm.addEventListener("submit", (event) =>{

  event.preventDefault()


  let nuevacomida = {

    nombre: event.target.nombre.value,
    provincia: event.target.provincia.value,
    categoria: event.target.categoria.value,
    ingredientes: event.target.ingredientes.value.split(",")
  }
console.log(nuevacomida)

comidas.push(nuevacomida)
mostrarComidasConForEach(comidas)
event.target.reset()
})


const filtroCategoria = document.getElementById("filtroCategoria")

filtroCategoria.addEventListener("change", () => {

 let comidasFiltradas = comidas.filter( comida => {
  return comida.categoria.includes(filtroCategoria.value)
})

  mostrarComidasConForEach(comidasFiltradas)

})

/*
function mostrarComidasConFor(){
  for (let i = 0; i < comidas.length; i++) {
    container.innerHTML += `
      <article class="card">
        <h2>${comidas[i].nombre}</h2>
        <p>${comidas[i].provincia}</p>
        <span>${comidas[i].categoria}</span>
        <ul>
        ${comidas[i].ingredientes.map(ingrediente => `<li>${ingrediente}<li/>`).join('')}
        </ul<
      </article>
    `;
  }
  }
  */