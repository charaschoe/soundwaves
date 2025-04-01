/**
 * Random Name Generator
 * A university project for the second semester
 * This application generates random names from predefined lists
 * and provides an interactive interface for name generation.
 */

// Name categories for different types of names
const nameCategories = {
	firstNames: ["Marlon", "Enes", "Jonas", "Philipp"],
};

// Application state
let currentName = "";
let textColor = 255;
let bgColor = 0;
let isGenerating = false;
let generationCount = 0;

// Constants for UI
const TEXT_SIZE = 140;
const MIN_GENERATION_DELAY = 500; // Minimum delay between generations in ms
let lastGenerationTime = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	textAlign(CENTER, CENTER);
	textSize(TEXT_SIZE);

	// Generate initial name
	generateNewName();
}

function draw() {
	background(bgColor);
	fill(textColor);

	// Display current name
	text(currentName, width / 2, height / 2);

	// Display generation count
	textSize(24);
	text(`Generated ${generationCount} names`, width / 2, height - 50);
	textSize(TEXT_SIZE);
}

function generateNewName() {
	try {
		const firstName = random(nameCategories.firstNames);
		currentName = firstName;
		generationCount++;

		// Toggle colors
		bgColor = bgColor === 0 ? 50 : 0;
		textColor = 255 - textColor;

		lastGenerationTime = millis();
	} catch (error) {
		console.error("Error generating name:", error);
		currentName = "Error generating name";
	}
}

function mouseReleased() {
	const currentTime = millis();
	if (currentTime - lastGenerationTime >= MIN_GENERATION_DELAY) {
		generateNewName();
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

// Prevent default touch behavior on mobile devices
function touchStarted() {
	return false;
}

function touchEnded() {
	const currentTime = millis();
	if (currentTime - lastGenerationTime >= MIN_GENERATION_DELAY) {
		generateNewName();
	}
	return false;
}
