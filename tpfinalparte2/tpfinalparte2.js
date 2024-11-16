/*TP Final Etapa 2
Lucía Amatriain Legajo: 93459/8 
Sofía Rottoli Legajo: 94732/6
Video explicativo: https://youtu.be/pLUgrZgq_H0
*/

let j, jugador, flechas, tiempoInicio, estado, mira;
let fondo;
let gifJabali;
let imgFlecha;
let cancion;

function preload() {
  fondo = loadImage("data/fondo.png");
  gifJabali = loadImage("data/jabaliVolando.gif");
  imgFlecha = loadImage("data/flecha.png");
  cancion = loadSound('/data/musicaSNK.mp3');
}

function setup() {
  createCanvas(640, 480);
  j = new Jabali();
  jugador = new Jugador();
  flechas = [];
  tiempoInicio = millis();
  estado = "inicio";
  fondo.resize(640, 480);
  mira = new Mira();
  cancion.setVolume(0.5);
}

function draw() {
  image(fondo, 0, 0);

  if (estado === "inicio") {
    verInstrucciones();
  } else if (estado === "jugando") {
    jugar();
  } else if (estado === "victoria") {
    pantallaVictoria();
  } else if (estado === "derrota") {
    pantallaDerrota();
  } else if (estado === "creditos") {
    pantallaCreditos();
  }
}

function mousePressed() {
  if ((estado === "victoria" || estado === "derrota") && 
      mouseX > width / 2 - 50 && mouseX < width / 2 + 50 &&
      mouseY > height - 60 && mouseY < height - 20) {
    estado = "creditos";
  }

  if (estado === "jugando") {
    jugador.disparar(flechas, mira);
  }
}

function keyPressed() {
  if (estado === "inicio" && key === "Enter") {
    iniciarJuego();
    if (!cancion.isPlaying()) {
      cancion.play();
    }
  } else if ((estado === "victoria" || estado === "derrota") && key === "r") {
    reiniciarJuego();
    cancion.stop();
    cancion.play();
  } else if (estado === "creditos" && key === "r") {
    reiniciarJuego();
    cancion.stop();
    cancion.play();
  }
}

function jugar() {
  j.dibujar();
  j.mover();
  tiempo();

  for (let i = flechas.length - 1; i >= 0; i--) {
    flechas[i].dibujar();
    flechas[i].mover();

    if (flechas[i].verificarColision(j)) {
      j.recibirDisparo();
      flechas.splice(i, 1);
      if (!j.vivo) {
        estado = "victoria";
      }
    } else if (flechas[i].fueraDePantalla()) {
      flechas.splice(i, 1);
    }
  }
  mira.dibujar(mouseX, mouseY);
}
