require('dotenv').config()

const { app, BrowserWindow } = require('electron')
const PouchDB = require('pouchdb')
const env = process.env

let win

// Add pouchdb-find plugin for Mongo inspired queries
PouchDB.plugin(require('pouchdb-find'))

// Local PouchDB
const localDB = new PouchDB('app/data')

// Remote CouchDB
if(env.COUCH_HOST && env.COUCH_PORT) {
  const remoteDB = new PouchDB(`${env.COUCH_PROTOCOL}://${env.COUCH_HOST}:${env.COUCH_PORT}/${env.COUCH_DB}`, {
    auth: {
      username: env.COUCH_USERNAME,
      password: env.COUCH_PASSWORD
    }
  })

  // Sync local database with remote
  localDB.sync(remoteDB, { live: true, retry: true })
  .on('change', function(change) {
    // Something changed. Do something.
  })
  .on('paused', function(info) {
    // Replication was paused, usually because of a lost connection.
  })
  .on('active', function(info) {
    // Replication was resumed
  })
  .on('denied', function(err){
    // A document failed to replicate (usually permissions error)
  })
  .on('complete', function() {
    // Complete
  })
  .on('error', function(err) {
    // Something bad has happened
  });
}

function createWindow() {
  win = new BrowserWindow({
    width: 600,
    height: 400
  })

  win.loadURL(`file://${__dirname}/app/index.html`)

  // Uncomment to enable dev tools
  //win.webContents.openDevTools()

  win.on('close', function() {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-close', function() {
  if(process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function() {
  if(win === null) {
    createWindow()
  }
})
