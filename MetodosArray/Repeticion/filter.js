const words = [
  "spray",
  "limit",
  "elite",
  "exuberant <br>",
  "destruction <br>",
  "present <br>",
];
const result = words.filter((word) => word.length > 6);
document.write(result);
/*filter() llama a la función callback  sobre cada elemento del array, 
y construye un nuevo array con todos los valores para los cuales  callback
 devuelve un valor verdadero. callback es invocada sólo para índices del array 
 que tengan un valor asignado. No se invoca sobre índices que hayan sido borrados
  o a los que no se les haya asignado algún valor. Los elementos del array que no 
  cumplan la condición callback  simplemente los salta, y no son incluidos en el nuevo array.

callback se invoca con tres argumentos:

El valor de cada elemento
El índice del elemento
El objeto Array que se está recorriendo */