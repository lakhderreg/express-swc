# express-swc

```
## About

SWC : Speed Web compiler

SWC is an extensible Rust-based platform for the next generation of fast developer tools.

SWC can be used for both compilation and bundling.

## Project Structure

express-swc/
├── src/
│   ├── app.ts                            # Express application setup
│   ├── index.ts                          # Entry point
│   ├── api/
│   │   └── health/
│   │       ├── health.controller.ts      # Health check controller
│   │       └── health.controller.spec.ts # Health check tests
│   └── interface/
│       └── controller.interface.ts       # Controller interface definitions
├── eslint.config.cjs                     # ESLint configuration
├── jest.config.js                        # Jest test configuration
├── package.json                          # Dependencies and scripts
├── tsconfig.json                         # TypeScript configuration
└── README.md                             # This file

## Execution Steps

## Prerequisites
- Node.js (v24 or higher)
- npm package manager

## Installation

1.Install dependencies:
  npm install

2.Build the project:
   npm run build

## Running the Application

1.Development mode (with watch):
  npm run dev

2.Production build and run:
  npm run build
  npm start

## Testing

1.Run all tests:
  npm test

2.Run tests in watch mode:
  npm run test:watch

## Linting

1.Check code with ESLint:
  npm run lint

2.Fix linting issues:
  npm run lint:fix

## API Endpoints

- Health Check: `GET /api/health`
- Returns the health status of the application

## References

1. SWC Official
https://swc.rs/

2. SWC Playground
https://swc.rs/playground

3. SWC Getting Started
https://swc.rs/docs/getting-started

```
