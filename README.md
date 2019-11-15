# lwc-storybooks-poc

LWC Storybook PoC is an integration of [Lightning Web Components](https://lwc.dev/) and [Storybook](https://storybook.js.org/). It demonstrates how [base-components-recipes](https://github.com/salesforce/base-components-recipes) can be used in an open-source project like Storybook. Base components implement Lightning Design System and are developed using [Lightning Web Components](https://lwc.dev/).

## Getting Started

Run the project locally to explore how [base-components-recipes](https://github.com/salesforce/base-components-recipes) is used in Storybook.

1. Clone the repo.

```sh
$ git clone git@github.com:reiniergs/lwc-storybooks-poc.git
$ cd lwc-storybooks-poc
```

2. Install dependencies.

```sh
$ yarn install
```

3. Run your local build. This step opens your web browser and navigates to http://localhost:6006/.

```sh
$ yarn storybook
```

## Guidelines for Deploying Base Components

To deploy base components in your own project, follow these guidelines.

### Install Dependencies

* [Classnames](https://www.npmjs.com/package/classnames) version 2.2.6
* [Lightning Design System](https://www.npmjs.com/package/@salesforce-ux/design-system) version 2.11.0-beta.1
* [LWC Webpack Plugin](https://www.npmjs.com/package/lwc-webpack-plugin) version 0.3.0
* [LWC Compiler](https://www.npmjs.com/package/@lwc/compiler) version 1.0.0
* [LWC Engine](https://www.npmjs.com/package/@lwc/engine) version 1.0.0

### Implement Base Components

* [Base components](base-components-recipes/force-app/main/default/lwc/) belong to the `src/c` folder. Clone the component folders you need for your project. For example, clone the [badge folder](https://github.com/salesforce/base-components-recipes/tree/master/force-app/main/default/lwc/badge) to `src/c/badge`. You don't need the `.js-meta.xml` config file.
* Add a CSS file to the component folder, for example, `src/c/badge/badge.css`. Include `@import "@salesforce/slds/legacy";` in the CSS file.
* Use the base component in your project with the `<c-badge label="Default"></c-badge>` syntax.

## Contributing

Thank you for your interest in the LWC Storybook PoC! See the [base-components-recipes](https://github.com/salesforce/base-components-recipes#contributing) contributing guidelines.
