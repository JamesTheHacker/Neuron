Neuron - ES6 React Electron Starter Kit
=======================================

Neuron is a very simple starter kit for anyone wanting to create desktop applications with Electron. It comes complete with a handful of useful tools to make killer desktop applications.

Features
--------

* PouchDB
* ES6 support via Babel
* React
* Webpack
* Sass

Install
-------

    git clone https://github.com/JamesTheHacker/Neuron
    cd Neuron
    npm install

Electron
--------

The Electron entry point is a file called `app.js` stored in the root directory.

Webpack
-------

**CSS**

All CSS files are stored in the `app/css/` directory. Sass is built in by default allowing you to easily build CSS componenets/modules with the added benefits of Sass.

**JS**

All JS files are stored in the `app/js/` directory. ES6 and React is supported out of the box.

**Build**

Running `npm start` or `npm run build` will build both the JS and CSS into single bundles. We keep the JS and CSS bundles seperate which allows you to include your CSS at the top of a HTML file and the JS at the bottom to avoid having the CSS render after the page has loaded.
