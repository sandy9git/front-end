# front-end

This project is powered by 
1. [sku](https://github.com/seek-oss/sku) similar to create react app
2. [braid](https://github.com/seek-oss/braid-design-system) similar to twitter boostrap
3. [React](https://facebook.github.io/react)
4. [React Hooks](https://reactjs.org/docs/hooks-intro.html)
5. [TypeScript](https://www.typescriptlang.org/)

## Getting Started

First of all, make sure you&#39;ve installed [Yarn](https://yarnpkg.com).

Then, install dependencies:

```bash
$ yarn
$ sudo yarn sku setup-hosts 
```

## Workflow

Start a local development server:

```bash
$ yarn start
```

Run unit tests:

```bash
$ yarn test
```

Lint and format code:

```bash
$ yarn lint
$ yarn format
```

## Notes
1. I would love to use Redux but I don't have much experience in it so I've skipped it. My preference
is to use `useState` react hook for simpler apps and Redux for more complex ones.
2. We use storybook for all the components that's another item I would like to do.
3. Written just one basic unit test to check if the page is rendered successfully. If I had more time would have covered more scenarios such as depending on success or error response from the server.