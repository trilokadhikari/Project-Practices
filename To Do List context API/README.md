# To Do List App with Context API

A small React + Vite todo list app that uses React Context to share todo state across components. It supports adding, editing, toggling completion, deleting todos, and persists todos in `localStorage`.

## Features

- Add new todos
- Edit existing todos inline
- Mark todos as complete/incomplete
- Delete todos
- Todo state managed using React Context
- `localStorage` persistence so todos survive page reloads
- Built with Vite, React, and Tailwind CSS

## Technologies

- React 19
- Vite
- Tailwind CSS
- React Context API

## Usage

- Type a todo in the input field and click `Add`
- Use the checkbox to mark a todo complete
- Click the `✏️` button to edit a todo text
- Click the `❌` button to delete a todo

## Notes

- Completed todos are styled differently and cannot be edited again unless toggled back to incomplete.
- Todos are stored in browser `localStorage` automatically.
