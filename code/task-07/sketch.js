const sketchWidth = 400;
const sketchHeight = 400;

function preload() {
  // preload assets
}

function setup() {
createCanvas(420, 600);

}

function draw() {
background(255);
noFill();
strokeWeight(random(1, 10));

for (let y = 1; y < 30; y += 1) {
    beginShape();
for (let x = sketchWidth/40; x < sketchWidth; x += 1) {
    

vertex(x, -20 + y *20 + sin(Math.PI * 4 * (x / sketchWidth)) * 40);
  
}
endShape();

}
noLoop();
}