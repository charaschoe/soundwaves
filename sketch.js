const words = ["Marlon", "Enes", "Jonas", "Philipp"];
let randomIndex = 0;
let textColor = 255;
let bgColor = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(50);
  textAlign(CENTER, CENTER);
  textSize(140);
}

function draw() {
  background(bgColor);
  fill(textColor);
  text(words[randomIndex], width / 2, height / 2);
}

function mouseReleased() {
  randomIndex = round(random(0, words.length - 1));

  // Toggle background color
  if (bgColor === 0) {
    bgColor = 50;
  } else {
    bgColor = 0;
  }

  // Toggle text color
  textColor = 255 - textColor; // Invert the text color (assuming it starts at 255)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
