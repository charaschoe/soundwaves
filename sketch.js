/**
 * Names Generator — Nothing Design Style
 */

// ── Name Data ──
const FIRST_NAMES = [
  "Marlon", "Enes", "Jonas", "Philipp", "Aria", "Leo", "Clara",
  "Mira", "Tariq", "Sora", "Ida", "Kai", "Lena", "Rafael",
  "Naima", "Felix", "Zoe", "Otto", "Maja", "Ivar", "Elin",
  "Hugo", "Saskia", "Arne", "Lotte", "Nils", "Tove", "Bram",
  "Anika", "Dante", "Freja", "Luca", "Astrid", "Elio", "Greta",
  "Rune", "Hanna", "Milan", "Petra", "Viggo", "Inga", "Cyril",
  "Mila", "Theo", "Rosa", "Iver", "Solveig", "Ezra", "Maren", "Elias", "Sylvie"
];

const LAST_NAMES = [
  "Müller", "Schmidt", "Banks", "Kovács", "Fischer", "Weber", "Meyer",
  "Wagner", "Becker", "Schulz", "Hoffmann", "Krämer", "Vogel", "Richter",
  "Reinhardt", "Graf", "Koch", "Baumann", "Vogt", "Haas", "Jung",
  "Kuhn", "Schmitt", "Winter", "Krüger", "Frank", "Berger", "Braun",
  "Neumann", "Peters", "Lang", "Schäfer", "Zimmer", "Wolf", "Horn",
  "Busch", "Bergmann", "Thomas", "Fritz", "Kaiser"
];

// ── State ──
let currentName = "";
let generationCount = 0;

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('margin', '0');
  cnv.style('padding', '0');
  cnv.style('display', 'block');
  cnv.style('border', 'none');
  cnv.style('position', 'absolute');
  cnv.style('top', '0');
  cnv.style('left', '0');
  generateName();
}

function draw() {
  background(0);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(72);
  textFont('sans-serif');
  text(currentName, width / 2, height / 2);

  fill(102);
  textSize(11);
  textFont('monospace');
  text("GENERATIONS  " + generationCount, 24, 36);
  textAlign(CENTER);
  text('TAP ANYWHERE', width / 2, 36);
}

function generateName() {
  var first = random(FIRST_NAMES);
  var last = random(LAST_NAMES);
  currentName = first + " " + last;
  generationCount++;
}

function mouseReleased() {
  generateName();
}

function touchEnded() {
  generateName();
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
