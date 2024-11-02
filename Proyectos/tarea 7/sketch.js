let img;
let size = 20;
let asciiChar = "@/#$";


function preload(){
  img = loadImage("leopardo.jpeg")
}


function setup(){
  createCanvas(600, 700);
  img.resize(200, 0);
  size = width / img.width;
  textSize(size);
  textAlign(CENTER, CENTER);
}


function draw() {
  background(0);
  img.loadPixels();
  
  
  for(let i = 0; i < img.width; i++){
    for (let j = 0; j < img.height; j++){
      let pixelIndex = (i + j * img.width) * 4;
      let r = img.pixels[pixelIndex + 0]; // rojo
      let g = img.pixels[pixelIndex + 1]; // verde
      let b = img.pixels[pixelIndex + 2]; // azul
      
      
      let bright = (r + g + b) / 3;
      let tIndex = floor(map(bright, 0, 255, 0, asciiChar.length));
      tIndex = constrain(tIndex, 0, asciiChar.length - 1);
      
      
      // posición horizontal del caracter
      let x = i * size + size /2; 
      
      // posición vertical del caracter
      let y = j * size + size /2; 
      let t = asciiChar.charAt(tIndex);
      
      
      // Colores para caracteres 
      
      //Color rosa
      if (t === '@'){
        fill(255, 182, 193);
        
      //Color negro para '/', '#', y '$'
      } else {
        fill(0);
      }
      
      noStroke();
      text(t, x, y);
      
    }
  }
}