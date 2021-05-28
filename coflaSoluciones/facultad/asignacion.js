const obtenerInformacion = (materia) => {
  materias = {
    fisica: ["Perez", "pedro", "maria", "pepito", "cofla"],
    programacion: ["Dalto", "pedro", "juan", "pepito"],
    logica: ["Hernandez", "pedro", "maria", "juan", "pepito", "cofla"],
    quimica: ["Rodriguez", "pedro", "maria", "juan", "pepito", "cofla"],
  };
  if (materias[materia] !== undefined) {
    return [materias[materia], materia, materias];
  } else {
    return materias;
  }
};

const mostrarInformacion = (materia) => {
  let informacion = obtenerInformacion(materia);

  if (informacion !== false) {
    let profesor = informacion[0][0];
    let alumnos = informacion[0];
    alumnos.shift();
    document.write(
      `el Profesor de  <b>${informacion[1]}  </b> es: <b style = "color:red">${profesor}</b> <br/>
    Los alumnos son: <b style = "color:blue">${alumnos}</b><br><br>`
    );
  }
};

const cantidadDeClases = (alumno) => {
  let cantidadTotal = 0;
  let informacion = obtenerInformacion();
  let clasesPresentes = [];
  for (info in informacion) {
    if (informacion[info].includes(alumno)) {
      cantidadTotal++;
      clasesPresentes.push(" " + info);
    }
  }
  return `<b style="color:blue" > ${alumno} </b> esta en ${cantidadTotal} Clases: <b style = "color:green">  ${clasesPresentes}</b><br>`;
};

mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("logica");
mostrarInformacion("quimica");
document.write(cantidadDeClases("cofla"));
