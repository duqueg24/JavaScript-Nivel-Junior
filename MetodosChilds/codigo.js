const contenedor = document.querySelector(".contenedor");

const parrafoNuevo = document.createElement("P");
parrafoNuevo.innerHTML = "Parrafo";
parrafoViejo = document.querySelector(".pa");
contenedor.replaceChild(parrafoNuevo, parrafoViejo);

const h2Nuevo = document.createElement("H2");
h2Nuevo.innerHTML = "Titulo";
h2Antiguo = document.querySelector(".h2");
contenedor.replaceChild(h2Nuevo, document.querySelector(".h2"));

contenedor.removeChild(h2Nuevo);

if (contenedor.hasChildNodes()) {
  document.write("tiene hijos");
} else {
  document.write("no tiene hijos");
}
