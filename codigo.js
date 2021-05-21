class App {
  constructor(descargas, puntuacion, peso) {
    this.descargas = descargas;
    this.puntuacion = puntuacion;
    this.peso = peso;
    this.iniciada = false;
    this.instalada = false;
  }
  instalar() {
    if (this.instalada == false) {
      this.instalada = true;
      alert("app instalada correctamente");
    }
  }
  desinstalar() {
    if (this.instalada == true) {
      this.instalada = false;
      alert("app desinstalada correctamente");
    }
  }
  abrir() {
    if (this.iniciada == false && this.instalada == true) {
      this.iniciada = true;
      alert("app iniciada");
    }
  }
  cerrar() {
    if (this.iniciada == true && this.instalada == true) {
      this.iniciada = false;
      alert("app cerrada");
    }
  }
  appInfo() {
    return`
    Descargas: <b>${this.descargas}</b><br>
    Puntuacion: <b>${this.puntuacion}</b><br>
    Peso: <b>${this.peso}</b><br>
    `
  }
}

app = new App("16.000", "5 estrellas", "900 mb");
document.write(app.appInfo())