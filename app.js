const electron = require('electron')
const {app, BrowserWindow } = electron
const path = require('path')
const url = require('url')
const windowWidth = 900;
const windowHeight = 600;

let window = null
// Wait until the app is ready
app.once('ready', () => {
  const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize;
  // Create a new window
  window = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    },
    // Set the initial width to 500px
    width: width / 2,
    // Set the initial height to 400px
    height: height / 2,
    // set the title bar style
    titleBarStyle: 'hiddenInset',
    // set the background color to black
    backgroundColor: "#111",
    // Don't show the window until it's ready, this prevents any white flickering
    show: false
  })

  window.setPosition(width - windowWidth, 0);

  window.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  window.once('ready-to-show', () => {
    window.show()
  })

  window.webContents.openDevTools()

})
