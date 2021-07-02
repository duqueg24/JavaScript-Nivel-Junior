// .textContent - devuelve el texto de cualquier nodo
// no devuelve html
const titulo = document.querySelector(".titulo");
let resutado = titulo.textContent;
document.write(resutado);
alert(resutado);

// .innerText - devuelve el texto Visible de cualquier nodo element
// no devuelve html
let resutado1 = titulo.innerText;
document.write("<br>" + resutado1);
alert(resutado1);

// .innerHTML - devuelve el contenido html de un elemento
let resutado2 = titulo.innerHTML;
document.write("<br>" + resutado2);
alert(resutado2);

// .outerHTML - devuelve el codigo html completo del elemento
let resutado3 = titulo.outerHTML;
document.write("<br>" + resutado3);
alert(resutado3);