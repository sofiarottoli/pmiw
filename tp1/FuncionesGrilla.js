// CREACIÓN DE GRILLA DE CUADROS
function serieCuadros(c1, c2) {
  for (var x = 0; x < cantidad; x++) {
    for (var y = 0; y < cantidad; y++) {
      let centroX = width - ((x + 1) * tamaño) + tamaño / 2;
      let centroY = height - ((y + 1) * tamaño) + tamaño / 2;

      if ((x + y) % 2 == 0) {
        if (cambioColor1) {
          fill(c1, c2, obtenerValor(minValor, maxValor));
        } else {
          fill(0);
        }
      } else {
        if (cambioColor1) {
          fill(c1, c2, obtenerValor(minValor, maxValor));
        } else {
          fill(255);
        }
      }
      rect(centroX - tamaño / 2, centroY - tamaño / 2, tamaño, tamaño);
    }
  }
}

// CREACIÓN DE SERIE DE CÍRCULOS
function serieCirculos(c1, c2) {
  for (var x = 0; x < cantidad; x++) {
    for (var y = 0; y < cantidad; y++) {
      let centroX = width - ((x + 1) * tamaño) + tamaño / 2;
      let centroY = height - ((y + 1) * tamaño) + tamaño / 2;

      let posXInteraccion = centroX;
      let posYInteraccion = centroY;

      // Si el movimiento está activado, los círculos se mueven con el mouse
      if (movimientoCirculos) {
        posXInteraccion = map(mouseX, 0, width, centroX, mouseX);
        posYInteraccion = map(mouseY, 0, height, centroY, mouseY);

        posXInteraccion = constrain(posXInteraccion, centroX - radio / 2, centroX + radio / 2);
        posYInteraccion = constrain(posYInteraccion, centroY - radio / 2, centroY + radio / 2);
      }

      if ((x + y) % 2 === 0) {
        if (cambioColor2) {
          fill(c1, c2, 0);
        } else {
          fill(255);
        }
      } else {
        if (cambioColor2) {
          fill(0, 0, c1);
        } else {
          fill(0);
        }
      }
      ellipse(posXInteraccion, posYInteraccion, radio, radio);
    }
  }
}
