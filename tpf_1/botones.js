let ancho= 200, alto=133;
let botonSonidoX, botonSonidoY, botonSonidoAncho, botonSonidoAlto;
let botonReinicioX, botonReinicioY, botonReinicioAncho, botonReinicioAlto;

function dibujarBoton(posX, posY) { //control flujo de pantallas
  noStroke();
  noFill();
  rect(posX, posY, ancho, alto);
  fill(0);  
}

function botonSonido() { //control play-pause sonido
  fill(180); 
  rect(botonSonidoX, botonSonidoY, botonSonidoAncho, botonSonidoAlto, 10); 
  fill(255);
  textSize(12);
  textAlign(CENTER, CENTER);
  
  if (cancion.isPlaying()) {
    fill(200, 10, 0);
    text("Pause song", botonSonidoX + botonSonidoAncho / 2, botonSonidoY + botonSonidoAlto / 2);
  } else {
    fill(10, 200, 0);
    text("Play song", botonSonidoX + botonSonidoAncho / 2, botonSonidoY + botonSonidoAlto / 2);
  }
}

function botonReinicio() { //control reinicio de flujo
  fill(150); 
  rect(botonReinicioX, botonReinicioY, botonReinicioAncho, botonReinicioAlto, 10); // botón con bordes redondeados
  fill(255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Reiniciar", botonReinicioX + botonReinicioAncho / 2, botonReinicioY + botonReinicioAlto / 2);
}
