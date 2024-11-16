/*TP Final 
Lucía Amatriain Legajo: 93459/8 
Sofía Rottoli Legajo: 94732/6
Video explicativo: https://youtu.be/pUNFUPajV7w
*/

//variables globales
let pantalla;
let imagenes = [];
let total= 19;
let marco1, marco2, marco3, flecha;
let cancion;
let nuestroDialogoCSV;
let pantallasIDs = [];

function preload() { //carga de imagenes, mp.3 y csv

  //imagenes pantalla
  for (let i = 0; i < total; i++) {
    imagenes[i] = loadImage("data/imagen" + i + ".png");
    //imagenes botones
  }
  marco1 = loadImage("data/marcoBoton1.png");
  marco2 = loadImage("data/marcoBoton2.png");
  marco3 = loadImage("data/marcoBoton3.png");
  flecha = loadImage("data/flecha.png");
  //sonido
  soundFormats('mp3', 'ogg');
  cancion = loadSound('/data/snksong.mp3');
  //texto
  nuestroDialogoCSV = loadTable("/data/dialogos.csv", "csv", "header");
}

function setup() {
  createCanvas(640, 480);
  pantalla = 0;

  //setupSonido
  cancion.setVolume(0.5);
  for (let i = 0; i <= 18; i++) {
    pantallasIDs.push('pantalla_' + i);
  }

  //botonSonido
  botonSonidoX = width - 110;
  botonSonidoY = 10;
  botonSonidoAncho = 100;
  botonSonidoAlto = 40;

  //botonReinicio
  botonReinicioX = width - 110;
  botonReinicioY = 60;
  botonReinicioAncho = 100;
  botonReinicioAlto = 40;
}

function draw() {
  background(255);
  textSize(30);
  fill(0, 255, 255);

  //funciones pantalla y botones
  flujoDePantallas();
  botonSonido();
  botonReinicio();

  print(mouseX+ "," +mouseY);
}

function mousePressed() { //eventos de sonido, reinicio y flujo de pantallas

  //SONIDO
  if (mouseX > botonSonidoX && mouseX < botonSonidoX + botonSonidoAncho && mouseY > botonSonidoY && mouseY < botonSonidoY + botonSonidoAlto) {
    if (cancion.isPlaying()) {
      cancion.pause();
    } else {
      cancion.play();
    }
    return;
  }
  //REINICIO
  if (mouseX > botonReinicioX && mouseX < botonReinicioX + botonReinicioAncho && mouseY > botonReinicioY && mouseY < botonReinicioY + botonReinicioAlto) {
    pantalla = 0;
    cancion.stop();
    return;
  }

  //PANTALLAS
  if (pantalla < 2) {
    pantalla++;
  }

  if (pantalla === 2) {
    if (mouseX > 70 && mouseX <70+ancho && mouseY > 295 && mouseY < 295+alto) {
      pantalla= 3;
    } else   if (mouseX > 370 && mouseX < 370+ancho && mouseY > 295 && mouseY < 295+alto) {
      pantalla = 4;
    }
  } else if (pantalla === 3 || pantalla === 4) {
    pantalla =5;
  } else if (pantalla === 5) {
    pantalla = 6;
  } else if ( pantalla ===6) {
    if (mouseX > 70 && mouseX <70+ancho && mouseY > 295 && mouseY < 295+alto) {
      pantalla= 7;
    } else   if (mouseX > 370 && mouseX < 370+ancho && mouseY > 295 && mouseY < 295+alto) {
      pantalla = 8;
    }
  } else if (pantalla === 7) {
    pantalla=9;
  } else if (pantalla ===8) {
    pantalla=10;
  } else if (pantalla ===9) {
    if (mouseX > 70 && mouseX <70+ancho && mouseY > 295 && mouseY < 295+alto) {
      pantalla= 11;
    } else   if (mouseX > 370 && mouseX < 370+ancho && mouseY > 295 && mouseY < 295+alto) {
      pantalla = 12;
    }
  } else if (pantalla === 10) {
    if (mouseX > 70 && mouseX <70+ancho && mouseY > 295 && mouseY < 295+alto) {
      pantalla= 13;
    } else   if (mouseX > 370 && mouseX < 370+ancho && mouseY > 295 && mouseY < 295+alto) {
      pantalla = 14;
    }
  } else if (pantalla ===11) {
    pantalla =15;
  } else if (pantalla === 12 || pantalla === 13) {
    pantalla =16;
  } else if (pantalla === 14) {
    pantalla = 17;
  } else if (pantalla === 15 || pantalla=== 16 || pantalla===17) {
    pantalla =18;
  }

  print("Pantalla actual: " + pantalla);
}
