const materias = {
  fisica: [90, 6, 3, "fisica"],
  matematica: [84, 8, 2, "matematica"],
  logica: [92, 8, 4, "logica"],
  quimica: [96, 8, 4, "quimica"],
  calculo: [91, 6, 3, "calculo"],
  programacion: [79, 7, 4, "programacion"],
  biologia: [75, 9, 2, "biologia"],
  bbdd: [98, 9, 1, "bbdd"],
  algebra: [100, 10, 4, "algebra"],
};

const aprobo = () => {
  for (materia in materias) {
    console.log(materias[materia][3]);
    if (materias[materia][0] >= 90) {
      console.log("%c    Aprobado", "color:green");
    } else {
      console.log("%c    Desaprobado", "color:red");
    }
    if (materias[materia][1] >= 7) {
      console.log("%c    Promedio en Orden", "color:green");
    } else {
      console.log("%c    Promedio Desaprobado", "color:red");
    }
    if (materias[materia][2] >= 3) {
      console.log("%c    trabajos Practicos en Orden", "color:green");
    } else {
      console.log("%c    trabajos Practicos en Desaprobado", "color:red");
    }
  }
};

aprobo();
