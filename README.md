# Introduction

This repository contains a basic setup for a react app and is inspired by create-react-app.
In particular, it includes:
* webpack (build tool) config for building production bundle and developing locally
* babel for ES6 to ES5 translation
* React + React-Router example code
* React-bootstrap
* Jest as testing framework
* Flow as type checker
* SASS support

# How to use

After putting all the content (including .* files) in your desired repository, execute:

```
yarn install && yarn start
```

If you like it to be a git repository, execute
```
git init
```

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


Prerequisites:
- node
- yarn / npm
