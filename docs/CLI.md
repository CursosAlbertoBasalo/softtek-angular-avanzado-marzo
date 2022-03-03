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
ng g c core/components/header --export true
ng g c core/components/footer --export true

# Create Data module with models and services
ng g c data/models/user --export true
ng g enum data/models/agencyRange --type enum
ng g enum data/models/agencyStatus --type enum
ng g interface data/models/agency --type interface
ng g enum data/models/tripKind --type enum
ng g enum data/models/tripStatus --type enum
ng g interface data/models/trip --type interface

ng g s data/services/agencies
ng g s data/services/trips

# Create Shared module for components and pipes
ng g m shared
ng g c shared/components/preview --export true
ng g c shared/components/loading --export true
ng g c shared/components/error --export true
ng g c shared/components/empty --export true
ng g c shared/components/refresh --export true

# Create Home module for home page
ng g m home --module app.module.ts --route 'home'
ng g s home/home

# Create presentational components

# Agencies as a presentational component
ng g c home/agencies --type list
# LoadingOrError to be reused in other components
ng g c shared/components/loadingOrError --export true
# Responsible of async data loading, error detection and template rendering
# TemplateRef as input parameter
# Data$ as input parameter, with get set methods
# Container with templateOutlet and templateContext
ng g c shared/components/asyncWrapper --export true
ng g c home/trips --type list
ng g c shared/components/list --export true

# Create pipes
ng g p shared/pipes/agencyRange --export true

```
