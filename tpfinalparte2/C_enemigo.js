class Jabali {
  constructor() {
    this.posX = random(20, 610);
    this.posY = random(20, 240);
    this.velX = random([-6, 6]); 
    this.velY = random([-6, 6]);
    this.vidas = 4;
    this.tam = 50; 
    this.vivo = true;
  }

  dibujar() {
    if (this.vivo) {
      image(gifJabali, this.posX - this.tam / 2, this.posY - this.tam / 2, this.tam, this.tam);
    }
  }

  mover() {
    this.posX += this.velX;
    this.posY += this.velY;

    if (this.posX <= 25 || this.posX >= width - 25) {
      this.velX *= -1;
      this.movimientoRandom();
    }
    if (this.posY <= 25 || this.posY >= height / 2) {
      this.velY *= -1;
      this.movimientoRandom();
    }
  }

  recibirDisparo() {
    this.vidas--;
    if (this.vidas <= 0) {
      this.vivo = false;
    }
  }

  movimientoRandom() {
    this.velX += random(-1, 1);
    this.velY += random(-1, 1);

    this.velX = constrain(this.velX, -7, 7);
    this.velY = constrain(this.velY, -7, 7);
  }
}
