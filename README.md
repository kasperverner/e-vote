# E-VOTE MONOREPOSITORY

This is the monorepository for the E-Vote project. It contains the following packages:

- app: Frontend application for the E-Vote project. It is the entry point for the user.
- backend/api: Gateway api for the backend services. It is the entry point for the frontend application.
- backend/ballot: Zero Knowledge Proof service for the ballot proof. Only accessible by the gateway.
- backend/proposition: Zero Knowledge Proof service for the proposition proof. Only accessible by the gateway.
- backend/validation: Zero Knowledge Proof service for the validation proof. Only accessible by the gateway.
- shared: Shared code between the backend services. It contains the models and the database connection.

## Prerequisites

- [ ] Node.js v18.19.0 or later (LTS) [Download](https://nodejs.org/en/download/)
- [ ] Yarn [yarn installation guide](https://classic.yarnpkg.com/en/docs/install)

## Getting started

Install the dependencies with the following command:

```bash
yarn
```

Then, you can start the project with the following command:

```bash
yarn app
yarn api:gateway
yarn api:ballot
yarn api:proposition
yarn api:validation
```

Each command must be run in a separate terminal. It will start the development server for the corresponding package.

Or start all the services in the same terminal with the following command:

```bash
yarn dev
```

To stop the services press `ctrl + c` in the terminal.

## Frontend

- Framework: React
- Language: TypeScript
- Router: TanStack Router
- State Management: TanStack Query (_Godlike_)
- Styling: Tailwind, Bootstrap or Other
- Authentication: Criipto (_MitID_)

## Backend Services

- Framework: Express
- Language: TypeScript
- Database: PostgreSQL
- ORM: Prisma

## Shared

When changes are made to the shared package, you need to build the package with the following command, before the changes are reflected in the other packages:

```bash
yarn
```
