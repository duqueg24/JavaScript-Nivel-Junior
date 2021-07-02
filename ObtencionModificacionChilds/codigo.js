const contenedor = document.querySelector(".contenedor");
const primerHijo = contenedor.lastElementChild;
//console.log(primerHijo);

/*
------------------contenedor.firstChild
firstChild devuelve el primer nodo hijo como un nodo de elemento,
 un nodo de texto o un nodo de comentario (según cuál sea el primero)
Los espacios en blanco dentro de los elementos se consideran texto y
el texto se considera nodos
---Esta propiedad es de sólo lectura.
*/

/* 
--------------------contenedor.lastChild;
firstChild devuelve el ultimo nodo hijo como un nodo de elemento,
 un nodo de texto o un nodo de comentario (según cuál sea el primero)
Los espacios en blanco dentro de los elementos se consideran texto y
el texto se considera nodos
---Esta propiedad es de sólo lectura.
*/

/*
---------------------contenedor.firstElementChild;
La propiedad firstElementChild devuelve el primer elemento secundario del elemento especificado.
---Esta propiedad es de sólo lectura.
*/

/*
----------------------contenedor.lastElementChild;
La propiedad firstElementChild devuelve el ultimo elemento secundario del elemento especificado.
---Esta propiedad es de sólo lectura.
*/

// const hijos = contenedor.childNodes
// console.log(hijos);
// hijos.forEach(hijo => console.log(hijo));

/*
---------------------- contenedor.childNodes
La propiedad childNodes devuelve una colección de los nodos secundarios de un nodo, como un objeto NodeList.

Los nodos de la colección se ordenan como aparecen en el código fuente y se puede acceder a ellos mediante números de índice. El índice comienza en 0.

Nota: Los espacios en blanco dentro de los elementos se consideran texto y el texto se considera nodos. Los comentarios también se consideran nodos.

Consejo: Puede utilizar el longitud propiedad del objeto NodeList para determinar el número de nodos hijo, entonces se puede recorrer todos los nodos secundarios y extraer la información que desee.

Esta propiedad es de sólo lectura.
*/

//const hijos = contenedor.children;
//console.log(hijos);

/*
---------------------- contenedor.children
La propiedad children devuelve una colección de elementos secundarios de un elemento, como un objeto HTMLCollection.

Los elementos de la colección se ordenan como aparecen en el código fuente y se puede acceder a ellos mediante números de índice. El índice comienza en 0.

Sugerencia: Puede usar la propiedad length del objeto HTMLCollection para determinar la cantidad de elementos secundarios, luego puede recorrer todos los elementos secundarios y extraer la información que desee.
*/

const hijos = contenedor.children;

for (hijo of hijos) {
  console.log(hijo);
}
