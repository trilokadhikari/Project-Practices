# React Quiz App

A lightweight quiz application built with React and Vite. This project shows a simple timed quiz flow with progress tracking, answer validation, and a final result screen.

## Features

- Multiple-choice quiz experience
- Countdown timer for each question
- Answer feedback with correct/incorrect styles
- Progress indicator for current question
- Final results screen with score and restart option
- Clean, responsive layout using React components

## Tech Stack

- React 19
- Vite
- JavaScript (JSX)
- CSS


## Customization

- Update `src/data/Questions.jsx` to add or change quiz questions.
- Adjust styles directly in component files or move them into CSS files.

## How It Works

1. The app displays one multiple-choice question at a time.
2. A 15-second timer counts down for each question.
3. When an option is selected or time runs out, the answer is locked in.
4. The next button advances to the next question.
5. After the final question, the result screen shows the score and a restart button.