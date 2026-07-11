# My Gym Routine

A simple React + Vite app for selecting workout routines by day of the week. The project uses context to share the selected day between a dropdown selector and a display component.

## Features

- Day selection dropdown
- Context-driven state via `DayProvider`
- Separate workout routine components for each day
- Styled with Tailwind CSS
- Built with Vite for fast development

## Tech stack

- React 19
- Vite
- Tailwind CSS
- JavaScript


## Project structure

- `src/App.jsx` - root app component with provider wrapper
- `src/provider/DayProvider.jsx` - context provider for the selected day
- `src/context/dayContext.js` - React context definition
- `src/components/Select.jsx` - dropdown selector for choosing a day
- `src/Display.jsx` - renders the selected day's routine component
- `src/days/` - individual components for each weekday routine

## Usage

1. Open the app in the browser.
2. Use the dropdown to choose a day.
3. The routine for the selected day appears below.

## Notes

- Make sure the context hook in `src/components/Select.jsx` uses `useContext(dayContext)`.
- Confirm `src/Display.jsx` imports each day component used in the switch statement.
