Neuron - ES6 React Electron Starter Kit
=======================================

<img src="http://i.imgur.com/4IGAAU4.png" width=340>

[![Build Status](https://travis-ci.org/JamesTheHacker/Neuron.svg?branch=master)](https://travis-ci.org/JamesTheHacker/Neuron)

**Note:** This project is an active work in progress. Contributions, support and feedback is very much welcomed.

Neuron is an [offline first](http://offlinefirst.org/) starter kit for developers wanting to create cross platform desktop applications with Electron. It comes complete with a handful of useful tools to help you create killer applications that run on all platforms!

Features
--------

* PouchDB (inc. pouchdb-find) with CouchDB remote replication
* ES6 support via Babel
* React
* Webpack
* Sass

Install
-------

    git clone https://github.com/JamesTheHacker/Neuron
    cd Neuron
    npm install

**Windows Users**

If you're running Windows remove the following line from the `package.json` file and use browser adapters instead of Node's levelDB adapter ([See here](https://github.com/nolanlawson/hello-electron-with-pouchdb#browser-vs-node) for more info):

    "postinstall": "bash postinstall.sh"

... and set the browser adapter in `app.js` like so:

    const localDB = new PouchDB('app', { adapter: 'websql' })

Usage
-----

Running `npm start` will build the JS and CSS files and launch the Electron application.

By default devtools is disabled. To enable it uncomment the following line in `app.js`:

    //win.webContents.openDevTools()

Electron
--------

The Electron entry point is a file called `app.js` stored in the root directory.

PouchDB and CouchDB
-------------------

PouchDB is a pure JavaScript NoSQL database that can be synced with a remote CouchDB database to create an [offline first](http://offlinefirst.org/) application.If you're not comfortable using PouchDB's map/reduce API you can use [pouchdb-find](https://github.com/nolanlawson/pouchdb-find). This is included by default.

In order to sync the local and remote databases when the application launches follow the instructions below:

**Local PouchDB**

If you do not require the use of CouchDB on a remote server simply leave the variables in `.env` blank. By default this will use a local PouchDB database.

**Remote CouchDB**

Syncing your application to a remote CouchDB database is easy. Ensure you have CouchDB installed on a remote server and that you've secured it (I suggest reading [this guide](http://guide.couchdb.org/draft/security.html)). If you need a server to play around with you can get $10 free from Digital Ocean by following [this link](https://m.do.co/c/dde4646baa31).

Once you have CouchDB installed and secured you can configure your application by entering the `host`, `username` and `password` in the `.env` file.

    COUCH_PROTOCOL=http
    COUCH_HOST=192.168.0.1
    COUCH_PORT=5984
    COUCH_DB=app
    COUCH_USERNAME=username
    COUCH_PASSWORD=secret_password

**Add CORS Configuration**

[See here](https://github.com/pouchdb/add-cors-to-couchdb) for more details on why this step is required.

Run the following command, replacing the `host`, `username` and `password`:

    npm run add-cors http://127.0.0.0:5984 --username user --password secret_password

**Finished**

Neuron will now automatically sync the remote database to the local one when the application launches, and will keep in sync when data is changed in the database. By default the database sync is bidirectional.

For more information on replication see [the docs](https://pouchdb.com/guides/replication.html).

Webpack
-------

**CSS**

All CSS files are stored in the `app/css/` directory. Sass is built in by default allowing you to easily build CSS componenets/modules with the added benefits of Sass.

**JS**

All JS files are stored in the `app/js/` directory. ES6 and React is supported out of the box.

**Build**

Running `npm start` or `npm run build` will build both the JS and CSS into single bundles. We keep the JS and CSS bundles seperate which allows you to include your CSS at the top of a HTML file and the JS at the bottom to avoid having the CSS render after the page has loaded.
