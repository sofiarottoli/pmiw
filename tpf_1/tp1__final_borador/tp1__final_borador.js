let pantalla;
let imagenes = [];
let marco1, marco2;
let total= 18;


function preload() {
  for (let i = 0; i < total; i++) {
    imagenes[i] = loadImage("data/imagen" + i + ".png");
  }
  marco1 = loadImage("data/marcoBoton1.png");
  marco2 = loadImage("data/marcoBoton2.png");
}

function setup() {
  createCanvas(640, 480);
  pantalla = 0;
}

function draw() {
  background(255);
  textSize(30);
  fill(0, 255, 255);
  
  flujoDePantallas();
  
  print(mouseX + "/" + mouseY);

}

function mousePressed() {

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
  }
}
