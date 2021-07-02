class Calculadora {
  sumar(num1, num2) {
    return parseInt(num1) + parseInt(num2);
  }

  restar(num1, num2) {
    return parseInt(num1) - parseInt(num2);
  }

  multiplicar(num1, num2) {
    return parseInt(num1) * parseInt(num2);
  }

  dividir(num1, num2) {
    return parseInt(num1) / parseInt(num2);
  }

  potenciar(base, exponente) {
    return base ** exponente;
  }
  raizCuadra(num) {
    return Math.sqrt(num);
  }
  raizCubica(num) {
    return Math.cbrt(num);
  }
}

const calculadora = new Calculadora();

alert("que operacion deseas realizar");
let operacion = prompt(
  "1: suma, 2: restar, 3: multiplicar, 4: dividir, 5:Potenciacion, 6:Raiz Cuadrada, 7:Raiz Cubica"
);

if (operacion == 1) {
  let num1 = prompt("primer numero para sumar");
  let num2 = prompt("segundo numero para sumar");
  let resultado = calculadora.sumar(num1, num2);
  alert(`el resultado es ${resultado} `);
} else if (operacion == 2) {
  let num1 = prompt("primer numero para restar");
  let num2 = prompt("segundo numero para restar");
  let resultado = calculadora.restar(num1, num2);
  alert(`el resultado es ${resultado} `);
} else if (operacion == 3) {
  let num1 = prompt("primer numero para multiplicar");
  let num2 = prompt("segundo numero para multiplicar");
  let resultado = calculadora.multiplicar(num1, num2);
  alert(`el resultado es ${resultado} `);
} else if (operacion == 4) {
  let num1 = prompt("primer numero para dividir");
  let num2 = prompt("segundo numero para dividir");
  let resultado = calculadora.dividir(num1, num2);
  alert(`el resultado es ${resultado} `);
} else if (operacion == 5) {
  let num1 = prompt("digite la base");
  let num2 = prompt("Digite el exponente");
  let resultado = calculadora.potenciar(num1, num2);
  alert(`el resultado es ${resultado} `);
} else if (operacion == 6) {
  let num1 = prompt("digite el numero");
  let resultado = calculadora.raizCuadra(num1);
  alert(`el resultado es ${resultado} `);
} else if (operacion == 7) {
  let num1 = prompt("digite el numero");
  let resultado = calculadora.raizCubica(num1);
  alert(`el resultado es ${resultado} `);
}
