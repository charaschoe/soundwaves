const words = [
  'Marlon',
  'Enes',
  'Jonas',
  'Philipp',
]
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
  text(words[randomIndex], width/2, height/2);
}

function mouseReleased() {
  randomIndex = round(random(0, words.length - 1));
  if (bgColor === 0) {
    bgColor = 50;
  } else {
    bgColor = 0;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


