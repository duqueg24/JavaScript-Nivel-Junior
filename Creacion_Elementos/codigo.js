const contenedor = document.querySelector(".contenedor");
const item = document.createElement("LI");
const textDelItem = document.createTextNode("Este es un item de la lista");
item.appendChild(textDelItem);
contenedor.appendChild(item);
console.log(item);