# React template

This is a starter template for writing ES2015 React and Redux.
By the time you read this everything will probably be outdated and broken.

## Installation

You'll need Node JS for build management:

    npm install

## Developing on the app

Install and compile the assets:

    grunt build

Open `public/index.html` in a browser.

You can run this in a shell to continuously rebuild the JS/CSS bundle anytime
you edit a file:

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
