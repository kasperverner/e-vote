# E-VOTE MONOREPOSITORY

This is the monorepository for the E-Vote project. It contains the following packages:

- server: Gateway api for the backend services.
- server/frontend: application for the E-Vote project.
- services/ballot: Zero Knowledge Proof service for the ballot proof.
- services/proposition: Zero Knowledge Proof service for the proposition proof.
- services/validation: Zero Knowledge Proof service for the validation proof.

## Prerequisites

- [ ] Docker [Download](https://www.docker.com/products/docker-desktop)
- [ ] Bun (Optional) [Download](https://bun.sh)

## Setting up the environment

- [ ] Create an `.env` file in `/server/.env` as described in the `/server/.env.example` file.
- [ ] Create an `.env` file in `/server/frontend/.env` as described in the `/server/frontend/.env.example` file.
- [ ] Create an `.env` file in `/services/ballot-service/.env` as described in the `/services/ballot-service/.env.example` file.
- [ ] Create an `.env` file in `/services/proposition-service/.env` as described in the `/services/proposition-service/.env.example` file.
- [ ] Create an `.env` file in `/services/validation-service/.env` as described in the `/services/validation-service/.env.example` file.

## Getting started

Start the application with the following command:

```bash
docker-compose up
```

The UI will be available at at [localhost:4000](http://localhost:4000).
The API will be available at [localhost:4000/api](http://localhost:4000/api).

Stop the application with the following command:

```bash
ctrl + c
```

Remove the containers with the following command:

```bash
docker-compose down
```

## Frontend

- Framework: React
- Language: TypeScript
- Router: TanStack Router
- State Management: TanStack Query (_Godlike_)
- Styling: Tailwind
- Authentication: Clerk

## Backend (Api and Services)

- Framework: Hono
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

### Missing

- [ ] Dynamic titles
- [ ] Add results view
- [ ] Fix bug with breadcrumbs
- [ ] Fix bugs with voting and results
- [ ] Add unit tests?
- [ ] Add e2e tests?
