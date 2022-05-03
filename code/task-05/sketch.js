function preload(){
  // preload assets
}

let coords = [];

function setup() {
  createCanvas(400, 400);
  for (let c = 0; c < 100; c += 1) {
    coords.push([
      random(0, 400),
      random(0, 400)
    ]);
  }
}

function draw() {
  background('white');

  // Shape defined just below, will not have any outline
  noStroke(); 
  
  // Fill light-green color to shape
  fill('lightgreen'); 
  for (let c = 0; c < coords.length; c += 1) {
   circle(coords[c][0], coords[c][1], 10);
  }
}