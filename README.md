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
yarn api
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
- Authentication: Clerk

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

## Conventions

### Git

- **Branch naming**: `feature/<feature-name>`, `fix/<bug-name>`
- **Commit message**: `feature: <feature-name> added`, `fix: <bug-name>`
- **Pull request title**: `Feature: <feature-name>`, `Fix: <bug-name>`
- **Pull request description**: Describe the changes made in the pull request

### Structure

- **File structure**:
  `/components`
  `/hooks`
  `/routes`
  `/services`
  `/utilities`
  `/types`
  `/enums`
  `/constants`
  `/styles`

### Naming

- **File naming**: `camelCase`
- **Variable naming**: `camelCase`
- **Function naming**: `camelCase`
- **Component naming**: `PascalCase`
- **Class naming**: `PascalCase`
- **Type naming**: `PascalCase`
- **Enum naming**: `PascalCase`
- **Enum value naming**: `UPPER_CASE`
- **Environment variable naming**: `UPPER_CASE`
- **Constants**: `UPPER_CASE`
- **Folder naming**: `camelCase`

### Naming examples

- **Components**: `ComponentName.tsx`
- **Hooks**: `useHookName.ts`
- **Routes**: `RouteName.tsx`
- **Services**: `serviceName.ts`
- **Utils**: `utilName.ts`
- **Types**: `TypeName.ts`
- **Enums**: `EnumName.ts`
- **Constants**: `CONSTANT_NAME.ts`
- **Styles**: `styleName.ts`

## Start contributing

### Clone the repository

```bash
cd <path-to-your-projects-folder>
git clone https://github.com/kasperverner/e-vote.git
```

### Create a new branch

The main branch is protected, so you need to create a new branch for your changes. The branch name should be `feature/<feature-name>` or `fix/<bug-name>`. You can create a new branch with the following command:

```bash
git checkout -b feature/<feature-name>
```

### Commit your changes

Commit your changes with the following command:

```bash
git add .
git commit -m "feature: <feature-name> added"
```

### Merge the main branch

Before you push your changes, you need to merge the main branch into your branch to avoid conflicts.

```bash
git switch main
git pull
git switch feature/<feature-name>
git merge main
```

### Push your changes

Push your changes to the remote repository with the following command:

```bash
git push origin feature/<feature-name>
```

### Create a pull request

Open a pull request on GitHub and describe the changes made in the pull request.

Assign a reviewer to the pull request for approval to have your changes merged into the main branch.

## Features

### teams

- [x] create team
- [x] update team if team admin
- [x] invite users
- [x] modify users roles
- [x] get list of team user is part of

### users

- [x] create new user account
- [x] accept/decline invitation

### elections

- [ ] create election if team admin
- [ ] update election if not started and team admin
- [ ] see elections for team user is part of
- [ ] vote if elegible
- [ ] get results 

### propositions

- [ ] add proposition to election if not started and team admin
- [ ] update proposition to election if not started and team admin
- [ ] delete proposition to election if not started and team admin

## Pages

- [x] /
- [x] /team                                <-- list of team user is member of
- [x] /team/:slug                          <-- team details and management
- [x] /team/:slug/elections                <-- list of elections for team
- [x] /team/:slug/elections/:slug          <-- election details and management
- [x] /team/:slug/elections/new            <-- create election
- [x] /team/:slug/elections/:slug/vote     <-- vote in election
- [x] /team/:slug/elections/:slug/results  <-- election results
- [x] /team/:slug/members                  <-- list of members for team
- [x] /team/:slug/members/invite           <-- invite members to team
