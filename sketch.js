
function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background (0,0,255);
  //Circles
  fill(255)
  circle(windowWidth/2,windowHeight/2,800);
  fill(0);
  circle(windowWidth/2,windowHeight/2,700);
  fill(255);
  circle(windowWidth/2,windowHeight/2,600);
  fill(0);
  circle(windowWidth/2,windowHeight/2,500);
  fill(255)
  circle(windowWidth/2,windowHeight/2,400);
  fill(0);
  circle(windowWidth/2,windowHeight/2,300);
  fill(255);
  circle(windowWidth/2,windowHeight/2,200);
  fill(0);
  circle(windowWidth/2,windowHeight/2,100);
  //triangles
  fill(255)
  triangle(0,0,0,windowHeight,windowWidth/2,windowHeight/2);
  fill(0)
  triangle(windowWidth,windowHeight/4,windowWidth,windowHeight/1.5,windowWidth/2,windowHeight/2);
}