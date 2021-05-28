materias = {
  fisica: ["Perez", "pedro", "maria", "pepito", "cofla"],
  programacion: ["Dalto", "pedro", "juan", "pepito"],
  logica: ["Hernandez", "pedro", "maria", "juan", "pepito", "cofla"],
  quimica: ["Rodriguez", "pedro", "maria", "juan", "pepito", "cofla"],
};

const inscribir = (alumno, materia) => {
    personas = materias[materia];
    personas.shift();
    alumnos = personas;
    if (alumno.length >= 2) {
        document.write(`lo siento ${alumno}, las clases de ${materia} ya estan llenas `)
    }else{
        
    }
};
