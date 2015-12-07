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
* JavaScript polyfills, hooked up via `webpack`:
  * [es6-promise](https://github.com/jakearchibald/es6-promise)
  * [whatwg-fetch](https://github.com/github/fetch)
* [React](http://facebook.github.io/react/), including an example `Error` component.
* [Redux](https://github.com/rackt/redux), including an example action and
  reducer for dispatching errors (also with tests).
* [Redux Dev Tools](https://github.com/gaearon/redux-devtools), bundled with hot
  module reloading.
* [Karma](http://karma-runner.github.io/), for running tests in a web browser with
  [Mocha](https://mochajs.org/), [Chai](http://chaijs.com/),
  and [Sinon](http://sinonjs.org/).
* [TravisCI](https://travis-ci.org/), configured for running tests in a web browser.
* [SASS](http://sass-lang.com/), including [normalize.css](https://necolas.github.io/normalize.css/).
  The CSS is compressed and bundled. **NOTE**: The SASS files could use some work,
  there is a lot of cruft you'll probably need to delete.
* [connect-fonts](https://shanetomlinson.com/2013/connect-express-font-middleware-nodejs/),
  just as an example. Chances are you probably won't want these exact fonts.
* [eslint](http://eslint.org/) and [csslint](https://github.com/CSSLint/csslint),
  configured for application code and tests.
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

For faster tests you can run them continuously as you edit files:

    grunt watch-test

## Developing With The Hot Reloader

For rapid development there is a special server you can use.
This configures hot module reloading which will instantly show changes to your
app as you save files. It will also activate the
[redux-devtools](https://github.com/gaearon/redux-devtools)
panel which lets you step through time as state changes are
dispatched to your app.
Run it like this:

    grunt serve

Open:

    http://localhost:8080/webpack-dev-server/?debug_session=r
