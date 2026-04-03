# Soundwaves

A combinatorial name generator with a Nothing-inspired interface. Tap to generate first + last name combinations from a curated pool of 2,000+ possibilities.

## Features

- **Combinatorial generation** — 50 first names × 40 last names = 2,000+ unique combinations
- **Nothing Design aesthetic** — OLED black background, monochrome text hierarchy, Space Grotesk + Space Mono typography
- **Percussive feedback** — Mechanical click sound via Web Audio API on each generation
- **Snap animation** — Names enter with a scale + fade transition that feels like a physical switch
- **Name categories** — Classifies each first name as CLASSIC, NORDIC, or MODERN
- **Generation history** — Traces previously generated names at the bottom, fading with age
- **Copy to clipboard** — Tap the COPY button to grab the current name
- **Fully responsive** — Works on desktop and mobile, edge-to-edge canvas

## How It Works

1. The app combines a random first name with a random last name
2. Each tap generates a new combination
3. A percussive click confirms the generation
4. Names are categorized by origin (CLASSIC, NORDIC, MODERN, or GENERATED)
5. Previous names appear in a history row at the bottom

## Tech Stack

- **p5.js** (1.9.4) — Canvas rendering and interaction
- **Native Web Audio API** — Percussive sound synthesis (no p5.sound dependency)
- **Google Fonts** — Space Grotesk + Space Mono loaded at page start

## Local Development

```bash
cd soundwaves
python3 -m http.server 8000
# Open http://localhost:8000
```

No build step or dependencies required — just serve the files and open in a browser.

## Project Context

Originally created as a university design course project exploring algorithmic art and interactive installations. Evolved from a simple 4-name list into a full combinatorial system with Nothing Design-inspired interface patterns.

## License

MIT
