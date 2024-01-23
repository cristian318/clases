// js es un lenguage de programación
// ejecutado en/por: nodejs o un navegador

console.log("hola");

// html -> etiquetas
// interpretado por el navegador

// css -> estilos
// interpretado por el navegador

// DOM: Document object model
// Lo que usamos para que js entienda la estructura de
// mi html
// como lo entiende? en un objeto
// que usa? o que entiende por cada cosa? Nodo o nodos

// const elH2 = document.getElementById("h2xd");
// const elH2 = document.getElementsByTagName("h2");
const elH2 = document.querySelector("h2");
const miNuevoSpan = document.createElement("span");

elH2.innerText = "prueba";
elH2.appendChild(miNuevoSpan);
miNuevoSpan.innerHTML = "<p>este es el nuevo span</p>";

miNuevoSpan.classList.add("texto-rojo");
miNuevoSpan.style.textTransform = "uppercase";
miNuevoSpan.remove();
