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

# Crete a core module for header and footer components
ng g m core --module app.module.ts
ng g c core/header --export true
ng g c core/footer --export true

# Add data module with models and services
ng g s data/agencies
ng g s data/trips
```
