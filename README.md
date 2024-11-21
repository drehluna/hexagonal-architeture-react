# Todo List

## Description

This is a simple project to implement and practice the principles of hexagonal architecture.

## Architecture

- The project is built with the principles of hexagonal architecture, with a focus on separation of concerns and testability.
  - The ports are defined in the `src/domain/ports` folder.
  - The adapters are defined in the `src/infra` folder.
  - The repositories are defined in the `src/data/repositories` folder.
- To connect the ports with the adapters, we use the `di` folder.
- To connect the ports with the repositories, we use the `repositories` folder.
- The `presentation` folder is the layer that interacts with the user, using react.
- The `tests` folder is the layer that contains the tests for the project.
- To connect the `presentation` with the `domain`, we use the `hooks` folder.

## Technologies

- React
- TypeScript
- Vite

## How to run

1. Clone the repository
2. Run `npm install` to install the dependencies
3. Run `npm run dev` to start the development server
