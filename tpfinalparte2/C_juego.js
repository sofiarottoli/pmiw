class Juego {
  constructor() {
    this.estado = "inicio";
    this.jabali = new Jabali();
    this.flechas = [];
    this.tiempoInicio = 0;
    this.puntaje = 0;
  }

  iniciarJuego() {
    this.estado = "jugando";
    this.tiempoInicio = millis();
    this.jabali = new Jabali();
    this.flechas = [];
    this.puntaje = 0;
  }

  reiniciarJuego() {
    this.estado = "inicio";
  }

  dibujar() {
    background(180, 220, 255);

    if (this.estado === "inicio") {
      this.verPantallaInicio();
    } else if (this.estado === "jugando") {
      this.jugar();
    } else if (this.estado === "victoria") {
      this.mostrarPantallaVictoria();
    } else if (this.estado === "derrota") {
      this.verPantallaDerrota();
    }
  }
}
