let particles = []; 

function setup() {
  createCanvas(600, 400); 
  background(255);
}

function draw() {
  background(255, 25); // Fondo blanco 

  
  
  // Crear nuevas partículas si el número de partículas es menor a 100.
  
  
  if (particles.length < 100) { 
    for (let i = 0; i < 5; i++) { // Añade cinco partículas por ciclo de dibujo.
      
      
      particles.push(new Particle(random(width), random(height))); // Crea y añade una nueva partícula con posición aleatoria.
    }
  }
  
  

  // Actualizar y mostrar cada partícula.
  
  for (let i = particles.length - 1; i >= 0; i--) {
    
    particles[i].update(particles); // Actualiza la posición y comportamiento de la partícula
    
    
    particles[i].show(); // Dibuja la partícula en el lienzo
    
    if (particles[i].finished()) { // Desapareción de la particula
      
      particles.splice(i, 1); // Elimina la partícula del arreglo
    }
  }
}



class Particle {
  
  constructor(x, y) {
    this.pos = createVector(x, y);      // Crea un vector de posición inicial con las coordenadas dadas
    
    this.vel = p5.Vector.random2D();    // Crea un vector de velocidad en una dirección aleatoria
    
    this.vel.mult(random(1, 3));        // Multiplica la velocidad por un valor aleatorio entre 1 y 3 para controlar la rapidez
    
    this.alpha = 255;                   // Transparencia inicial máxima (completamente visible)
    
    
    // Color aleatorio: naranja o rosado
    
    this.color = random() < 0.5 ? color(random(200, 255), random(100, 150), 0) : color(random(200, 255), random(100, 150), random(200, 255));
    this.size = 20;                     // Tamaño del cuadrado que representará a la partícula
  }

  finished() {
    return this.alpha < 0;              // Retorna `true` si la opacidad es menor que 0, indicando que la partícula debe eliminarse
  }

  update(particles) {
    this.pos.add(this.vel); // Mueve la partícula sumando la velocidad a la posición

    // Revisa la distancia entre esta partícula y otras
    for (let other of particles) {
      
      if (other !== this) { // Evita que la partícula se compare consigo misma
        
        let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y); // Calcula la distancia entre esta partícula y otra
        
        if (d < this.size) { // Si las partículas están muy cerca (menos que su tamaño)...
          
          let steer = p5.Vector.sub(this.pos, other.pos); // Crea un vector que apunta en dirección opuesta a la otra partícula
          
          steer.setMag(0.1); // Limita la magnitud del cambio de dirección
          
          this.vel.add(steer); // Cambia la velocidad de la partícula para alejarse de la otra
        }
      }
    }

    this.alpha -= 2; // Reduce la opacidad gradualmente, haciendo que la partícula se desvanezca
  }

  show() {
    fill(this.color.levels[0], this.color.levels[1], this.color.levels[2], this.alpha); // Rellena la partícula con su color y opacidad actual
    
    noStroke(); // Sin borde para la partícula
    
    
    
    // Dibuja un cuadrado.
    push();
    translate(this.pos.x, this.pos.y); // Mueve el origen de coordenadas a la posición de la partícula
    
    rotate(frameCount / 50.0); // Rota el cuadrado a medida que avanza el tiempo
    
    rectMode(CENTER); // Cambia el modo de dibujo al centro
    
    rect(0, 0, this.size, this.size); // Dibuja un cuadrado centrado en la posición de la partícula
    
    pop(); // Restaura el sistema de coordenadas original
  }
}
