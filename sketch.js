function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  hr = hour();
  mn = minute();
  sc = second();
  angleMODE(DEGREES);
}

function draw() {
  background(255,255,255);  
  drawSprites();

  scAngle = map(sc, 0, 60, 0, 360);
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  mnAngle = map(mn, 0, 60, 0, 360);
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(10);
  line(0,0,100,0);
  pop();
  // hrAngle = map(hr, 0, 24, 0, 360);
  hrAngle = map(hr, 0, %12, 0, 360);
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(13);
  line(0,0,100,0);
  pop();


  line{
    stroke(255,0,0);
    strokeWeight(7);
    line(0,0,100,0);
    translate(0,0);
  }

 
}