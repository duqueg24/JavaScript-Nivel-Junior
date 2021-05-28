let materias = {
  fisica: ["Perez", "pedro", "maria", "pepito", "cofla"],
  programacion: ["Dalto", "pedro", "juan", "pepito"],
  logica: ["Hernandez", "pedro", "maria", "juan", "pepito", "cofla"],
  quimica: ["Rodriguez", "pedro", "maria", "juan", "pepito", "cofla"],
};

const inscribir = (alumno, materia) => {
  personas = materias[materia];
  if (personas.length >= 21) {
    document.write(
      `lo siento ${alumno}, las clases de ${materia} ya estan llenas <br> <br> `
    );
  } else {
    personas.push(alumno);
    if (materia == "fisica") {
      materias = {
        fisica: personas,
        programacion: ["programacion"],
        logica: ["logica"],
        quimica: ["quimica"],
      };
    } else if (materia == "programacion") {
      materias = {
        fisica: ["fisica"],
        programacion: personas,
        logica: ["logica"],
        quimica: ["quimica"],
      };
    } else if (materia == "logica") {
      materias = {
        fisica: ["fisica"],
        programacion: ["programacion"],
        logica: personas,
        quimica: ["quimica"],
      };
    } else if (materia == "quimica") {
      materias = {
        fisica: ["fisica"],
        programacion: ["programacion"],
        logica: ["logica"],
        quimica: personas,
      };
    }
    document.write(
      `Felcidades ${alumno} te has inscrito a ${materia} Correptamente`
    );
  }
};
document.write(materias["fisica"] + "<br>");
inscribir("fabio", "fisica");
document.write("<br>");
inscribir("fabio", "fisica");
document.write("<br>");
inscribir("fabio", "fisica");
document.write("<br>");
inscribir("fabio", "fisica");
document.write("<br>");
inscribir("fabio", "fisica");
document.write("<br>");
inscribir("fabio", "fisica");
document.write("<br>");
inscribir("fabio", "fisica");
document.write("<br>");
inscribir("fabio", "fisica");
document.write("<br>");
inscribir("fabio", "fisica");
document.write("<br>");
inscribir("fabio", "fisica");
document.write("<br>");
inscribir("fabio", "fisica");
document.write("<br>");
inscribir("fabio", "fisica");
document.write("<br>");
inscribir("fabio", "fisica");
document.write("<br>");
inscribir("fabio", "fisica");
document.write("<br>");
inscribir("fabio", "fisica");
document.write("<br>");
inscribir("fabio", "fisica");
document.write("<br>");
inscribir("fabio", "fisica");
document.write("<br>");

document.write(materias["fisica"] + "<br>");
