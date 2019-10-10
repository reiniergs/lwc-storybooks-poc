# Trailblazer Community 2.0 Frontend

### Prerequisites

- Node 12 (preferably using [nvm](https://github.com/nvm-sh/nvm))
- [Yarn](https://yarnpkg.com/en/docs/install#mac-stable)
- Follow the Gemfury config steps here: https://github.com/devforce/trailhead-web/wiki/Application-Setup#gemfury

### Running Storybook

- `yarn install`
- `yarn storybook`
- (`yarn s` is an alias for `yarn storybook`)

### Running Unit Tests

- `yarn test` for unit tests
- see `package.json` for a full list of `scripts`

### Tech Stack

| Purpose               | Tool                                                            |
| --------------------- | --------------------------------------------------------------- |
| Framework             | [LWC](https://lwc.dev)                                          |
| Bundler               | [Webpack](https://webpack.js.org/)                              |
| Design System         | TODO: [TDS](http://tds-staging.herokuapp.com)                   |
| Component Development | [Storybook](https://storybook.js.org/)                          |
| Type Safety           | [TypeScript](http://www.typescriptlang.org)                     |
| Unit Testing          | [Jest](https://jestjs.io/en/)                                   |
| Integration Testing?  | (TODO)                                                          |
| Linting               | [ESLint](https://eslint.org/)                                   |
| Syntax                | [Prettier](https://prettier.io)                                 |
| CI                    | TODO: [Heroku](https://devcenter.heroku.com/articles/heroku-ci) |
