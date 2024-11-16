function tiempo(){

  let tiempoRestante = 30 - floor((millis() - tiempoInicio) / 1000);

  // contador
  fill(0);
  textSize(20);
  text(`Tiempo: ${tiempoRestante}s`, width - 90, 30);

  // vidas jabalí
  fill(234, 8, 0);
  textSize(20);
  text(`❤ Enemigo: ${j.vidas}`, width - 110, 55);

  if (tiempoRestante <= 0) {
    estado = "derrota";
  }
}
