# Introduction

This repository contains a basic setup for a react app and is inspired by create-react-app.
In particular, it includes:
* webpack (build tool) config for building production bundle and developing locally
* babel for ES6 to ES5 translation
* React + React-Router example code
* Support of internalization with react-intl
* React-bootstrap
* Jest as testing framework
* Flow as type checker
* SASS support

### Prerequisites:
- node
- yarn / npm

# How to use

After putting all the content (including .* files) in your desired repository, execute:

```
yarn install && yarn start
```

If you like the new folder where you copied the files to to be a git repository, execute
```
git init
```
Your first commit can then be the basic setup and you are off to start your project!  
ATTENTION: Delete the also copied .git/ repo before `git init` to start a new git history.

-----

A minified production bundle is build with
```
yarn build
```

and can be found in the dist folder.

Tests can be executed via

```
yarn test
```

and will test all files with the tests/ directory. The pattern to identify tests can be adapted
within the package.json

For flow-type checking, execute

```
yarn flow
```

# Notes / Hints

Verify yourself that the message changes in development mode when entering url:
`http://localhost:8080/?lang=de` vs `http://localhost:8080/?lang=en`
