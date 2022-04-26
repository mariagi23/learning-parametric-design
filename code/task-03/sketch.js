function preload(){
  // preload assets
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background('white');

  // Shape defined just below, will not have any outline
  noStroke(); 
  
  // Fill light-green color to shape
  fill('lightgreen'); 

  rect(10, 10, 600, 400);

  fill(255,255,255);

  rect(50, 50, 500, 300);

  // Shape defined just below, will not have any outline
  noStroke(); 

  fill(255,60,50);
  circle(300, 200, 302);

  // Shape defined just below, will not have any outline
  noStroke(); 
  circle(300, 200, 300);

  fill(255,204,0);

  circle(300, 200, 250);

  fill(70,60,200);

  // Shape defined just below, will not have any outline
  noStroke(); 
  circle(300, 200, 200);

  fill(220,141,200);

  circle(300, 200, 120);
  
}