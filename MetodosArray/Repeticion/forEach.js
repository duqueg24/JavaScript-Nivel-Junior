const paises = [
  "España",
  "Francia",
  "Holanda",
  "EEUU",
  "Jordania",
  "Australia",
  "Egipto",
];

paises.forEach(function (item, index) {
  console.log("El país " + item + " está en la posición " + index);
});
/*Como podemos ver el método recibe una función de callback con dos 
elementos, por un lado el item que será el elemento sobre el que se 
itera y por otro el índice que ocupa dentro de la lista. De esta 
forma el código que tengamos dentro de la función se ejecutará por 
cada uno de los elementos que tenemos dentro de la lista.

La función podrá ser una función anónima dentro del método .forEach()
 o bien podremos definirla y asignársela al método.

De esta manera podríamos mostrar por pantalla los elementos del array 
con el método forEach() de la siguiente manera:ZZ */