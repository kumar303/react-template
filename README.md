# React template

This is a starter template for writing
[ES2015](https://babeljs.io/docs/learn-es2015/)
[React](https://facebook.github.io/react/) and
[Redux](http://redux.js.org/).
By the time you read this everything will probably be outdated and broken.

It comes configured with:

* [ES2015](https://babeljs.io/docs/learn-es2015/) JavaScript, bundled for
  development (and production) using [npm](https://www.npmjs.com/),
  [Babel 5](http://babeljs.io/), and [webpack](https://webpack.github.io/).
* [React](http://facebook.github.io/react/), including an example `Error` component.
* [Redux](https://github.com/rackt/redux), including an example action and
  reducer for dispatching errors (also with tests).
* [Karma](http://karma-runner.github.io/), for running tests in a web browser with
  [Mocha](https://mochajs.org/), [Chai](http://chaijs.com/),
  and [Sinon](http://sinonjs.org/).
* [TravisCI](https://travis-ci.org/), configured for running tests in a web browser.
* [SASS](http://sass-lang.com/), for enhanced CSS. The CSS is compressed and
  bundled. **NOTE**: The SASS files could use some work, there is a lot of cruft
  you'll probably need to delete.
* [eslint](http://eslint.org/), configured for application code and tests.
* [Grunt](http://gruntjs.com/), for managing everything.

[![Build Status](https://travis-ci.org/kumar303/react-template.svg?branch=master)](https://travis-ci.org/kumar303/react-template)

## Installation

You'll need [Node JS](https://nodejs.org/) for build management:

    npm install

You need [grunt](http://gruntjs.com/) installed and available on your PATH.
Install it globally like:

    npm install -g grunt

## Developing on the app

Install and compile the assets:

    grunt build

Open `public/index.html` in a browser.

You can keep this running in a shell to continuously rebuild the JS/CSS bundle
anytime you edit a file:

    grunt watch-build

## Run tests

Run all Javascript tests in a web browser and execute lint checks:

    grunt test

For faster tests you can run tests continuously as you edit files:

    grunt watch-test

## Developing With The Hot Reloader

The hot reloading server will make changes appear instantly on the page as you
edit React component code. It's pretty hot! Run it like this:

    grunt serve

Open:

    http://localhost:8080/webpack-dev-server/
