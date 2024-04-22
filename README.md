[![Unit tests](https://github.com/noisy/portfolio/actions/workflows/unittests.yml/badge.svg)](https://github.com/noisy/portfolio/actions/workflows/unittests.yml)
[![Cypress Tests](https://github.com/noisy/portfolio/actions/workflows/cypress.yml/badge.svg)](https://github.com/noisy/portfolio/actions/workflows/cypress.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/2e7e8fbe-a8c3-4773-915f-55a36210e6a1/deploy-status)](https://app.netlify.com/sites/krzysztofszumny/deploys)

# portfolio

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/)
- [Vue - Official (previously Volar, replaces Vetur)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support for `.vue` Imports in TS

- [Using Vue with TypeScript](https://vuejs.org/guide/typescript/overview.html)
- [Takeover Mode is no longer needed in version 2.0 and has been deprecated.](https://github.com/vuejs/language-tools/releases/tag/v2.0.0)

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

First, make sure proper version of Node.js is installed. Needed version is specified in `.nvmrc` file. To install and use it, run:

```sh
nvm install
nvm use
```

Then, install dependencies:

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run build
npm run test:e2e # or `npm run test:e2e:ci` for headless testing
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
