function setup() {
  createCanvas(600, 500);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(0);
  noFill();
  
  translate(width/2, height/2)
  let r = map(sin(frameCount/2), -1, 1, 50, 255);
  let g = map(sin(frameCount / 2), -1, 1, 50, 255);
  let b = map(sin(frameCount / 4), -1, 1, 50, 255);
  stroke(r, g, b);
  for (let i = 0; i < 40; i++){
    
    rotate(sin(frameCount + i) * 9);
  
  rect(0, 0, 0 - i * 5, 0 - i * 5, 5);

    circle(0, 200, 40);
   
  }
      
}