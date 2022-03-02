# Command Line Interface

```bash
# Install the CLI
npm i -g @angular/cli

# Create a new project with minimal boilerplate
ng new softtek-angular-avanzado --inline-style --prefix stk --routing true --skip-tests --style css

# Add prettier and eslint to the project
ng add @angular-eslint/schematics
npm install prettier prettier-eslint eslint-config-prettier eslint-plugin-prettier --save-dev
npm run lint

# Add auxiliary dependencies (CSS framework and API server)
npm i @picocss/pico
npm install -D json-server json-server-auth

# Start the application and the API server
npm start
npm run api

# Clean initial component and styles

# Crete a Core module for header and footer components
ng g m core --module app.module.ts
ng g c core/header --export true
ng g c core/footer --export true

# Create Data module with models and services
ng g c data/models/user --export true
ng g s data/services/agencies
ng g s data/services/trips

# Create Shared module for components and pipes
ng g m shared
ng g c shared/components/loading --export true
ng g c shared/components/error --export true
ng g c shared/components/empty --export true
ng g c shared/components/refresh --export true

# Create Home module for home page

```
