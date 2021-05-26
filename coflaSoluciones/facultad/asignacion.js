const obtenerInformacion = (materia) => {
  materias = {
    fisica: ["Perez", "pedro", "maria", "pepito", "cofla"],
    programacion: ["Dalto", "pedro", "juan", "pepito"],
    logica: ["Hernandez", "pedro", "maria", "juan", "pepito", "cofla"],
    quimica: ["Rodriguez", "pedro", "maria", "juan", "pepito", "cofla"],
  };
  if (materias[materia] !== undefined) {
    return [materias[materia], materia];
  } else {
    return false;
  }
};

const mostrarInformacion = (materia) => {
  let informacion = obtenerInformacion(materia);

  if (informacion !== false) {
    let profesor = obtenerInformacion(materia)[0][0];
    let alumnos = obtenerInformacion(materia)[0];
    alumnos.shift();
    document.write(
      `el Profesor de  <b>${informacion[1]}  </b> es: <b style = "color:red">${profesor}</b> <br/>
    Los alumnos son: <b style = "color:blue">${alumnos}</b><br/><br/>`
    );
  }
};

mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("logica");
mostrarInformacion("quimica");
