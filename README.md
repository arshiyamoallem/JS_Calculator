# JS Calculator

A simple calculator built with HTML, CSS, and JavaScript. This project started as a terminal-based Node.js calculator and was transitioned into a web app.

## Features

- Basic operations: addition, subtraction, multiplication, division
- Square root (√)
- Power / exponent (^)
- Backspace button to delete last character
- Clear button to reset the display
- Division by zero error handling
- Square root of negative number error handling

## Files

- `index.html` — calculator layout and buttons
- `style.css` — styling and grid layout
- `script.js` — calculator logic and DOM interaction

## How to Use

1. Open `index.html` in your browser
2. Click number buttons to enter a number
3. Click an operator (`+`, `-`, `×`, `/`, `√`, `^`)
4. Click another number if needed
5. Press `=` to see the result
6. Press `C` to clear the display
7. Press `⌫` to delete the last character

## How to Run

No installation needed — just open `index.html` directly in any modern browser.

## Project Journey

This calculator was first built as a Node.js terminal app using `readline` for user input, then converted into a web app using the DOM. The core math functions (`add`, `subtract`, `multiply`, `divide`) remained unchanged between both versions.

## Possible Improvements

- Support for chaining multiple operations
- Keyboard input support
- Calculation history
- Scientific calculator mode