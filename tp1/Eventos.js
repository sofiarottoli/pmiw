// EVENTOS DEL MOUSE Y EL TECLADO PARA CAMBIAR COLORES
function mouseDragged() {
  if (mouseX > width / 2) {
    cambioColor1 = true;
    color1 = obtenerValor(minValor, maxValor);
    color2 = obtenerValor(minValor, maxValor);
  } else {
    cambioColor1 = false;
  }
}

function mouseReleased() {
  cambioColor1 = false;
}

function keyPressed() {
  if (key === 'r' || key === 'R') {
    cambioColor2 = true;
  }
  if (key === 'm' || key === 'M') {
    cambioColor2 = false;
  }
  
  if (key === 'a' || key === 'A') {
    movimientoCirculos = true;
  }
  
  if (key === 's' || key === 'S') {
    movimientoCirculos = false;
  }
}

function obtenerValor(min, max) {
  return (random (min, max + 1));
}
