function preload(){
  // preload assets
}

let x = [];

function setup() {
  createCanvas(400, 400);
  x = random(0, 300);
}

function draw() {
  background('white');

  // Shape defined just below, will not have any outline
  noStroke(); 
  
 // Fill light-green color to shape
 fill('lightgreen'); 

 rect(0, 0, 350, 400);

 fill(255,255,250,);

 rect(25, 40, 300, 300);

 fill(255,60,50);

 circle(175, 190, 300);

 fill(255,204,0);

 circle(175, 190, 250);

 fill(70,60,200);

 circle(175, 190, 200);

 fill(220,141,200,);

 circle(175, 190, 120,);

 fill(0);
 circle(x, 230, 6);
 
}