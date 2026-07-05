# Dice Roller

A simple, interactive web-based dice roller application built with HTML, CSS, and JavaScript.

## Overview

Dice Roller is a lightweight web application that allows users to simulate rolling multiple dice at once. The application displays results both as numerical values and as visual dice images, making it a fun and engaging way to generate random numbers.

## Features

- **Multi-Dice Rolling**: Roll any number of dice simultaneously (minimum 1)
- **Visual Feedback**: See both the numerical results and corresponding dice face images
- **Random Generation**: Uses JavaScript's `Math.random()` for fair dice rolls (1-6 range)
- **User-Friendly Interface**: Simple and intuitive design with clear input fields and action buttons
- **Real-Time Results**: Get instant results after clicking the "Roll Dice" button

## How to Use

1. Open `index.html` in your web browser
2. Enter the number of dice you want to roll in the input field
3. Click the "Roll Dice" button
4. View your results displayed both as numbers and dice images below

## Project Structure

```
Dice Roller/
├── index.html      # Main HTML structure
├── style.css       # Styling and layout
├── script.js       # Rolling logic and functionality
├── README.md       # Project documentation
└── Images/         # Dice face images (1.png through 6.png)
```

## Technical Details

- **HTML**: Provides the page structure with an input field and button
- **CSS**: Handles the visual styling and layout
- **JavaScript**: Implements the dice rolling logic using random number generation and DOM manipulation

## Files Description

- `index.html`: Contains the main layout with a number input and "Roll Dice" button
- `script.js`: The `roll()` function handles dice generation and displays results
- `style.css`: Defines the appearance of the application
- `Images/`: Directory containing dice face PNG images (1-6)

## Browser Compatibility

Works on all modern browsers that support:
- HTML5
- CSS3
- ES6 JavaScript

