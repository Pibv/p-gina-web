let circles = []; // Arreglo para circulos pequeños
let largeCircles = []; // Arreglo para círculos grandes

function setup() {
  createCanvas(500, 400); 

  
  // Creación de círculos pequeños
  for (let i = 0; i < 10; i++) {
    circles.push(new Circle(random(width), random(height), random(10, 20), false, random(1, 3))); // Círculos pequeños
  }
  
  

  // Creación de círculos grandes que se mueven hacia afuera
  for (let i = 0; i < 4; i++) {
    let x = width / 2; // X centrado
    let y = height / 2; // Y centrado
    let r = random(20, 30); // Radio
    largeCircles.push(new Circle(x, y, r, true, random(2, 4))); 
  }
}



function draw() {
  background(255, 182, 193);

  
  
  // Círculos pequeños
  // Cambio de posición, de color y los dibuja
  for (let circle of circles) {
    circle.update();
    circle.changeColor(); 
    circle.display();
  }

  
  
  // Círculos grandes
  //Cambio de posición y los dibuja 
  for (let circle of largeCircles) {
    circle.update();
    circle.display();
  }
}



class Circle { //Comportamiento y propiedades del circulo
  constructor(x, y, r, isLarge = false, speed) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.speed = speed; // Almacena la velocidad
    this.isLarge = isLarge;

    // Establecer dirección y color
    if (isLarge) {
      this.direction = createVector(random(-1, 1), random(-1, 1)).normalize(); // Dirección aleatoria
      this.direction.mult(speed); // Multiplicar por la velocidad
      this.color = color(255); // Círculos grandes en blanco
    } else {
      this.direction = createVector(random(-1, 1), random(-1, 1)).normalize();
      this.color = color(random(255), random(255), random(255)); // Círculos pequeños en color aleatorio
    }
  }

  
  update() {
    // Mover según la dirección y la velocidad
    this.x += this.direction.x;
    this.y += this.direction.y;

    
    // Verificar si la pelota grande ha salido del lienzo
    if (this.isLarge) {
      if (this.x < -this.r || this.x > width + this.r || this.y < -this.r || this.y > height + this.r) {
        this.reset(); // Reiniciar la posición si salió
      }
      
      
      
    } else {
      // Rebotar en los bordes para círculos pequeños
      if (this.x > width - this.r || this.x < this.r) {
        this.direction.x *= -1; // Rebote horizontal
      }
      

      if (this.y > height - this.r || this.y < this.r) {
        this.direction.y *= -1; // Rebote vertical
      }
    }
  }
  
  
  

  reset() {
    // Posición de la pelota grande a un punto aleatorio desde el centro
    this.x = width / 2;
    this.y = height / 2;
    this.direction = createVector(random(-1, 1), random(-1, 1)).normalize(); // Nueva dirección
    this.direction.mult(this.speed); // velocidad
  }

  
  
  
  changeColor() {// Cambiar el color de los círculos pequeños constantemente
  
    if (!this.isLarge) {
      this.color = color(random(255), random(255), random(255));
    } 
  }
  
  

  display() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.r * 2);
  }
}
