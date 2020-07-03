# ts-json-db

> Warning: This is in active development

⚡ Experiment in Typescript inspired by lowdb https://github.com/typicode/lowdb

## Limits
Convenient method for storing data without setting up a database server. It is fast enough and safe to be used as an embedded database.
However, if you seek high performance and scalability more than simplicity, you should probably stick to traditional databases.

## Stack Description

* TypeScript
* Jest
* Prettier
* ESLint


## Features

* Linting via [ESLint](http://eslint.org/).
  * Run manually via `yarn lint`.
  * Integrates with Visual Studio Code via [vscode-eslint](https://github.com/Microsoft/vscode-eslint/).
    * Highlights type & linting issues.
    * Provides debuging options for running Jest tests (once and in watch mode).
  * Uses [AirBNB ESLint plugin](https://github.com/airbnb/javascript) as sane defaults.
  * `import ... from ...` statements are verified for correctness via [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import).
* Formatting via [Prettier](https://github.com/prettier/prettier).
  * Run manually via `yarn format`.
  * Integrates well with Visual Studio Code via [prettier-vscode](https://github.com/prettier/prettier-vscode).
    * Automatically formats on save.

## Script Commands

* `yarn test` -- Runs tests.
* `yarn typecheck` -- Checks TypeScript types for correctness. This is disabled during tests for performance reasons.
* `yarn lint` -- Runs linting.
* `yarn format` -- Reformats all of the `.ts` and `.tsx` files with Prettier.
* `yarn build` -- Regenerates `dist` folder that gets included into NPM module.