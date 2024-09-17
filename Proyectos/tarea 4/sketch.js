function setup() {
  createCanvas(600, 500);
  // noLoop();
}

function draw() {
  background(0);
  translate(width / 2, height / 2); //Centra todo al centro del lienzo
  
  
  let numPatterns = 10; // Número de patrones circulares
  let baseRadius = 120; // Radio máximo del patrón 
  
  
  
  for (let p = 0; p < numPatterns; p++) { //Repite el proceso de dibujo
    let points = 20; // Número de puntos en cada patrón circular
    let radius = baseRadius * (p + 1) / numPatterns; // Radio para el patrón actual
    let angleStep = TWO_PI / points;
    
    
    
    // Alterna entre patrones con relleno y sin relleno
    let hasFill = p % 2 === 0;
    
    for (let i = 0; i < points; i++) {
      let angle = angleStep * i; // Ángulo para cada punto
      
      
      
      
      // Convertir coordenadas polares a cartesianas
      let r = radius + map(mouseX, 0, width, -50, 50); // Ajusta el radio en función de la posición del mouse
      let x = r * cos(angle);
      let y = r * sin(angle);
      
      
      
      
      // Colores RGB cambiantes
      let rColor = map(mouseX, 0, width, 0, 255);
      let gColor = map(mouseY, 0, height, 0, 255);
      let bColor = map(mouseX + mouseY, 0, width + height, 0, 255);
      
      
      
      if (hasFill) {
        fill(rColor, gColor, bColor);
      } else {
        noFill();
        stroke(rColor, gColor, bColor);
      }
      
      ellipse(x, y, 20, 20);
    }
  }
}
