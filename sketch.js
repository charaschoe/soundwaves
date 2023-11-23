const words = ["Marlon", "Enes", "Jonas", "Philipp"];
let randomIndex = 0;
let textColor = 255;
let bgColor = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textSize(100);
}

function draw() {
  background(bgColor);
  fill(255); // Set text color to white
  text(words[randomIndex], width / 2, height / 2);
}

function mouseReleased() {
  randomIndex = round(random(0, words.length - 1));

  // Toggle background color
  bgColor = bgColor === 0 ? 50 : 0;

  // Set text color to white
  textColor = 255;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}