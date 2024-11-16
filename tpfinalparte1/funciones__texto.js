function guionCSV(posXescena, posYescena, posXmarco1, posYmarco1, posXmarco2, posYmarco2, _id) {
  push();
  textAlign(CENTER, CENTER);
  // Burbuja de diálogo
  fill(255);
  text(buscarTextoCSV(_id, 'escena'), posXescena, posYescena);

  // Ajustar la posición de "esto" y "aquello" para que coincidan con los marcos (opción izquierda, opción derecha)
  fill(200);
  text(buscarTextoCSV(_id, 'esto'), posXmarco1, posYmarco1);
  
  fill(200);
  text(buscarTextoCSV(_id, 'aquello'), posXmarco2, posYmarco2);
  
  pop();
}

//Búsqueda de diálogo
function buscarTextoCSV(_id, _columna) {
  let IDColumna = nuestroDialogoCSV.getColumn('id');

  for (let fila=0; fila < IDColumna.length; fila++) {
    if (IDColumna[fila] === _id)
      return nuestroDialogoCSV.getColumn(_columna)[fila];
  }
  return "NO SE ENCONTRO EL ID: " + _id;
}
