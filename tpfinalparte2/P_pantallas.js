function verInstrucciones() {
  background(0, 150);
  textAlign(CENTER, TOP);
  fill(255);
  textSize(20);
  textStyle(BOLD);

  text(
    "¡Cazá el jabalí antes de que se termine el tiempo!\nClick para disparar\n Presioná ENTER para comenzar",
    width / 2,
    height / 2 - 60
    );
}

function pantallaVictoria() {
  textAlign(CENTER, TOP);
  fill(0, 255, 0);
  textSize(30);
  text("¡Ganaste!\n ¿Alguien dijo cena?\n Presiona R para reiniciar", width / 2, height / 2); 
  botonCreditos(width / 2 - 50, height - 60, 100, 40, "Créditos");
}

function pantallaDerrota() {
  textAlign(CENTER, TOP);
  fill(255, 0, 0);
  textSize(30);
  text("¡Perdiste!\n El jabalí logró escapar...\n Presiona R para reiniciar", width / 2, height / 2);
  botonCreditos(width / 2 - 50, height - 60, 100, 40, "Créditos");
}

function pantallaCreditos() {
  background(30);
  textAlign(CENTER, TOP);
  fill(255);
  textSize(25);
  text("Créditos", width / 2, height / 2 - 100);

  textSize(18);
  text("Hecho por:\nLucia Amatriain Legajo: 93459/8\n Sofía Rottoli Legajo: 94732/6\nInspirado en Duck Hunt :')", width / 2, height / 2 - 20);

  textSize(15);
  text("Presiona R para reiniciar el juego", width / 2, height - 50);
}

function iniciarJuego() {
  estado = "jugando";
  tiempoInicio = millis();
  j = new Jabali();
  flechas = [];
  if (!cancion.isPlaying()) {
    cancion.play();
  }
}

function reiniciarJuego() {
  estado = "inicio";
  cancion.stop(); 
  cancion.play();
}

function botonCreditos(x, y, ancho, alto, texto) {
  fill(234, 157, 0);
  rect(x, y, ancho, alto, 10);
  fill(0);
  textSize(14);
  textAlign(CENTER, CENTER);
  text(texto, x + ancho / 2, y + alto / 2);
}
