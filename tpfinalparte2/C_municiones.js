class Flecha {
  constructor(x, y) {
    this.x = x;
    this.y = height;
    this.vel = -8;
    this.tam = 30;
  }

  dibujar() {
    let ancho = 50; 
    let alto = 100; 
    image(imgFlecha, this.x - this.tam / 2, this.y, this.tam, this.tam * 2);
  }

  mover() {
    this.y += this.vel;
  }

  fueraDePantalla() {
    return this.y < 0;
  }

  verificarColision(jabali) {
    let d = dist(this.x, this.y, jabali.posX, jabali.posY);
    return d < jabali.tam / 2;
  }
}
