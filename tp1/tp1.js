/*
SOFÍA ROTTOLI
COMISIÓN 2
https://youtu.be/A5u0jxrqjeY
*/

//DECLARACIÓN DE VARIABLES

let imagen; //PImage
let cantidad = 10; //int
let tamaño; //int
let radio; //int
let cambioColor1 = false; //boolean
let cambioColor2 = false; //boolean
let movimientoCirculos = false; //boolean

//Parámetros globales
let color1 = 0; //int (todos)
let color2 = 255;
let minValor = 0;
let maxValor = 255;


//Carga de archivos
function preload() {
  imagen = loadImage ("data/imagen1.png");
}

function setup() {
  createCanvas(800, 400);
  background(200);
  tamaño = width / (2 * cantidad);
  radio = tamaño / 2;
}


function draw() {
  image(imagen, 0, 0);
  noStroke();
  serieCuadros(color1, color2);
  serieCirculos(color1, color2);
}
