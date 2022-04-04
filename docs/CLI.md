# Command Line Interface

```bash
################################################################################
# 0 - Initialize the project
################################################################################

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

## Clean initial component and styles
#====================================

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

################################################################################
# 1 - Components
################################################################################

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

# Container and templates as a presentational components
ng g c home/agencies --type list
# LoadingOrError to be reused in other components
ng g c shared/components/loadingOrError --export true

## Async wrapper
#===============

# Responsible of async data loading, error detection and template rendering
# TemplateRef as input parameter
# Data$ as input parameter, with get set methods
# Container with templateOutlet and templateContext
ng g c shared/components/asyncWrapper --export true

# Presentational component using asyncWrapper
ng g c home/trips --type list
ng g c shared/components/list --export true

# Content Wrapper: alternative way using ng-content
#==================================================

ng g c shared/components/contentWrapper --export true

# Pipes
#======
ng g p shared/pipes/agencyRange --export true

################################################################################
# 2 - Router
################################################################################

# Create module for the agencies page
ng g m agencies --module app.module.ts --route 'agencies'

## Resolver
#==========

# Resolver to get agencies before page load
# Use exJs pipes to catch errors
ng g r agencies/agencies

# Create module for new agency page
ng g m agencies/new --module agencies.module --route 'new'

## Can Load Guard
#================

# Prevent downloading the lazy module code
# Useful for protect against unauthorized access
# Register the guard on the router with the loadChildren function
# Redirect user to login, but with returnUrl as a parameter
ng g guard core/authenticated --implements CanLoad

# Create a login page
# Return to url after login
ng g m auth/login --module app.module --route 'login'

## Can Activate and Can Deactivate Guards
#=======================================

# Protects against data needed (activate) or not saved (deactivate)
# Register the guard where the component is used
ng g guard agencies/new/new --implements CanActivate --implements CanDeactivate
# Delegate responsibility to the component and a dialog
ng g c shared/components/deactivation --type dialog --export true

################################################################################
# 3 - Forms
################################################################################

ng g m auth/register --module app.module --route 'register'
# Reactive form with validators
ng g c auth/register/register --type form

## Validations
#============

# Custom and form validators
ng g s shared/controls/validators

# Async validator for email
ng g interface data/models/user --type interface
ng g s data/services/users
ng g s auth/register/userValidators

## Controls and sub forms with CVA
#=================================

# Create email form control with CVA
# with a new form and auto defined validators
ng g c shared/controls/email --type control --export true

# passing validators as Input() and creating a sub form
ng g c shared/controls/generic --type control --export true

# passing form as Input() and using [value] and (change)
ng g c shared/controls/template --type control --export true

################################################################################
# 4 - Dependency Injection
################################################################################

## Service weights
#=================

# Provided in root effects on compiled code
ng g m labs --module app.module.ts --route 'labs'
ng g s labs/tripCalculations
# Use in one module, weights in this particular module
# If used in more weights in common module

## Inversion of control
#======================

# Show units in different systems
ng g s labs/weightAbstract
ng g s labs/weightMetric
ng g s labs/weightImperial

# Injection tokens
#=================

# Simple logger with injected tokens (APP_VERSION, ONLY_ERRORS)
ng g s core/logger

# Component Providers
#=====================

ng g m agencies/agency --module agencies.module --route ':id'
# agency.provider.ts

################################################################################
# 5 - RxJS and HTTP
################################################################################

## Interceptors
#==============

# Caching (url, response)
ng g interceptor data/services/cache

# Status indicator (working, success, error)
ng g interceptor data/services/status
ng g interface data/models/apiStatus --type interface
ng g enum data/models/status --type enum

# Error handler (with retry, redirect and log)
ng g interceptor data/services/error

## Operators
#============

# A search optimized operator
ng g m trips --module app.module.ts --route 'trips'

################################################################################
# 6 - Redux
################################################################################

## Store reactivo simple
#=======================

# Authorized user state
# Changed at register, login, logout
# Used static at guards and interceptors
# Used async at header component
ng g s core/auth-store
ng g interface core/models/auth --type interface
ng g interceptor data/services/auth


## Store reactivo with actions
#==============================

# Api status state (working success error) changed from interceptor
# Action types enumeration for secured actions
# Functional reducers (could/should be pure)
# Partial notifications sample with select$
ng g s data/services/apiStatus-store # rename to apiStatus.store and class without suffix


## Akita
#=======

npm i @datorama/akita
ng add @datorama/akita # devtools , configuration, schematics

# Load bookings
# Book a trip
# Show busy indicator, errors, success and aggregated counters
ng g m bookings --module app.module.ts --route 'bookings'
ng g af data/bookings

################################################################################
# 7 - SSR
################################################################################
ng update
ng update @angular/cli
npm i --force # commit changes
ng update @angular/core # commit changes
ng add @nguniversal/express-engine

npm run api
npm run dev:ssr

npm run build:ssr
npm run serve:ssr

npm run prerender

##  @Inject(PLATFORM_ID) private readonly platformId: Object, on Logger

ng g s core/abstract
ng g s core/client
ng g s core/server

################################################################################
# 8 - PWA
################################################################################

ng add @angular/pwa

```
