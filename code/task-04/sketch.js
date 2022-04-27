function preload(){
  // preload assets
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('white');

  // Shape defined just below, will not have any outline
  noStroke(); 
  
  // Fill light-green color to shape
  fill('lightgreen'); 

  rect(10, 10, 350, 400);

  fill(255,255,255);

  rect(35, 50, 300, 300);

  fill(255,60,50);

  circle(185, 200, 300);

  fill(255,204,0);

  circle(185, 200, 250);

  fill(70,60,200);

  circle(185, 200, 200);

  fill(220,141,200);

  circle(185, 200, 120);
  
}