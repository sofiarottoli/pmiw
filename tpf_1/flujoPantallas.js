function flujoDePantallas() {
  image(imagenes[pantalla], 0, 0); //secuencia de imagenes por pantalla

  if (pantalla === 0) {
    textSize(45);
    image(flecha, 535, 404);
    guionCSV(331, 83, 0, 0, 0, 0, pantallasIDs[pantalla]); // Sin marcos en pantalla 0
  
} else if (pantalla === 1) {
    image(marco2, 60, 80, 530, 320); // Dibuja marco de introducción (marco 2)
    textAlign(TOP, TOP);
    guionCSV(325, 75, 0, 0, 0, 0, pantallasIDs[pantalla]); 
    fill(200);
    textSize(17);
    text("Jean, un cadete competitivo, se enoja cuando su \n compañera Sasha lo supera fácilmente durante un \n entrenamiento mata-titanes. La discusión entre \n ambos escala y, su borracho superior Pixis, interviene.\n Sólo pensando en la cena, recuerda un jabalí que \n había estado causando problemas en el bosque. \n Pixis propone una solución al conflicto: quien \n lo cace podrá usarlo en un duelo de cocina épico, \n donde él será el juez. El autor del mejor \n plato será el mejor soldado", 324, 140);
    image(flecha, 535, 404);
  
} else if (pantalla === 2) {
    image(marco1, 70, 295); // Dibuja botón izquierdo
    image(marco1, 370, 295); // Dibuja botón derecho
    textAlign(TOP, TOP);
    textSize(25);
    guionCSV(306, 90, 165, 362, 0, 0, pantallasIDs[pantalla]); // Texto para botones
    fill(200);
    text("Ir con Annie \n y Armin", 470, 340);
    dibujarBoton(70, 295);
    dibujarBoton(370, 295);
  
} else if (pantalla === 3 || pantalla === 4 || pantalla === 5) {
    guionCSV(300, 90, 0, 0, 0, 0, pantallasIDs[pantalla]); // Sin marcos en pantallas 3, 4 y 5
    image(flecha, 535, 404);
  
} else if (pantalla === 6) {
    image(marco1, 70, 295); //Dibuja botón izquierdo
    image(marco1, 370, 295); // Dibuja botón derecho
    guionCSV(310, 90, 165, 362, 466, 363, pantallasIDs[pantalla]); // Texto para botones
    dibujarBoton(70, 295);
    dibujarBoton(370, 295);
  
} else if (pantalla===7) {
    image(marco3, 170, 330);
    guionCSV(300, 90, width/2, 392, 0, 0, pantallasIDs[pantalla]);
  
} else if (pantalla === 8) {
    image(marco3, 170, 330);
    guionCSV(300, 90, width/2, 392, 0, 0, pantallasIDs[pantalla]);
  
} else if (pantalla=== 9) {
    image(marco1, 70, 295);
    image(marco1, 370, 295);
    dibujarBoton(70, 295);
    dibujarBoton(370, 295);
    guionCSV(310, 90, 170, 362, 466, 363, pantallasIDs[pantalla]); // Texto para botones
  
} else if (pantalla=== 10) {
    image(marco1, 70, 295);
    image(marco1, 370, 295);
    dibujarBoton(70, 295);
    dibujarBoton(370, 295);
    guionCSV(310, 90, 173, 362, 470, 363, pantallasIDs[pantalla]);
  
} else if (pantalla >= 11 && pantalla <= 17) {
    guionCSV(300, 90, 0, 0, 0, 0, pantallasIDs[pantalla]); // Sin marcos en estas pantallas
    image(flecha, 535, 404);
  
} else if (pantalla === 18) {
    image(marco2, 60, 80, 530, 320);
    guionCSV(324, 172, 326, 223, 326, 283, pantallasIDs[pantalla]); // marco de cierre/créditos (Marco 2)
  }
}
