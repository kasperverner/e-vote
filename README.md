# E-VOTE MONOREPOSITORY

This is the monorepository for the E-Vote project. It contains the following packages:

- app: Frontend application for the E-Vote project. It is the entry point for the user.
- backend/api: Gateway api for the backend services. It is the entry point for the frontend application.
- backend/ballot: Zero Knowledge Proof service for the ballot proof. Only accessible by the gateway.
- backend/proposition: Zero Knowledge Proof service for the proposition proof. Only accessible by the gateway.
- backend/validation: Zero Knowledge Proof service for the validation proof. Only accessible by the gateway.

## Prerequisites

- [ ] Node.js v18.19.0 or later (LTS) [Download](https://nodejs.org/en/download/)
- [ ] Yarn [yarn installation guide](https://classic.yarnpkg.com/en/docs/install)

## Getting started

Install the dependencies with the following command:

```bash
yarn
```

Update the `.env` file in the `/packages/backend/api` package with the following content:

```dotenv
DATABASE_URL=<CONNECTION_STRING>
JWT_ISSUER=<ISSUER_URL>
JWT_PUBLIC_KEY=<PUBLIC_KEY>
```

Then open a console in the `/packages/backend/api` package and run the following command:

```bash
npx prisma generate
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

## Assignments

- [ ] Add auth filter for the protected routes
- [ ] Add data preloading to the router
- [ ] Dockerrize the app and apis for debug
- [ ] Dockerrize the app and apis for deployment
- [ ] Add a CI/CD pipeline using Github Actions
- [ ] Make proper layout for the UI
- [ ] Add a proper error logging system (Application Insights) ((Maybe?))

## Missing route contents

- [ ] team details page with members, invites and elections
  - [ ] admins should be able to manage members
  - [ ] admins should be able to manage invites
  - [ ] admins should be able to manage elections
- [ ] team invites page where admins can invite new users to the team
- [ ] team elections page where admins can create new elections
- [ ] modify elections page where admins can modify existing elections
- [ ] election details page where members can see the election details, vote and see results
- [ ] accept/decline invite page where users can accept or decline an invite to a team
