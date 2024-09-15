function setup() {
  createCanvas(600, 400, WEBGL);
  angleMode(DEGREES)
}

function draw() {
  background(20);
  
  rotateX(80)
  
  noFill()
  stroke(255)
  
  
  for (var i = 0; i < 20; i++){
    
    var r = map(sin(frameCount/ 2), -1, 1, 100, 200)
    var g = map(sin(frameCount / 2), -1, 1, 50, 255);
    var b = map(cos(frameCount), -1, 1, 200, 100)
    
    stroke(r, g, b)
    
    beginShape()
    for (var j = 0; j < 360; j += 10){
      var rad = i * 8
      var x = rad * cos(j)
      var y = rad * sin(j)
      var z = sin(frameCount * 2 + i * 10) * 50
      
      vertex(x, y, z)
    }
    endShape(CLOSE)
    
  }
}