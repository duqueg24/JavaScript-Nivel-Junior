let numeros = [1, 2, 3, 4, 8];
document.write(numeros + "<br>"); //1,2,3,4,8
numeros.splice(4, 1, 5, 6, 7, 8); //1, 2, 3, 4, 5, 6, 7, 8;
document.write(numeros);//primer parametro la posicion donde arranca,
// el segundo parametro numeros de elementos a eliminar desde el primer parametro
// y los demas parametros son los que se añaden al Array
