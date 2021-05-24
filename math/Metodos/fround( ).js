let numero = Math.fround(9.46557972364796874);
document.write(numero);// 9.465579986572266
/*
avaScript utiliza internamente números dobles de coma flotante de 64 bits, que ofrecen una precisión muy alta. Sin embargo, a veces puede estar trabajando con números de coma flotante de 32 bits, por ejemplo, si está leyendo valores de un archivo Float32Array. Esto puede crear confusión: verificar la igualdad de un flotante de 64 bits y uno de 32 bits puede fallar aunque los números sean aparentemente idénticos.

Para resolver esto, Math.fround()se puede utilizar para convertir el flotante de 64 bits en un flotante de 32 bits. Internamente, JavaScript continúa tratando el número como un flotante de 64 bits, simplemente realiza un "redondeo a par" en el bit 23 de la mantisa y establece todos los siguientes bits de mantisa en 0. Si el número está fuera del rango de un flotante de 32 bits, Infinityo -Infinityse devuelve.

Debido a que fround()es un método estático de Math, siempre lo usa como Math.fround(), en lugar de como un método de un Mathobjeto que creó ( Mathno es un constructor).
*/