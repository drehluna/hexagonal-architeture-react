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
- To connect the `presentation` with the `repositories`, we use the `hooks` folder.

## Principles

- The project use SOLID principles to decoupling layers and make the code more flexible and easier to maintain.
- Using DIP to decouple the business rules from the real implementation.
- Using SRP to make each function with a single responsibility.

## Technologies

- React
- TypeScript
- Vite
- Jest
- Tailwind

## How to run

1. Clone the repository
2. Run `npm install` to install the dependencies
3. Run `npm run dev` to start the development server
