const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800, // width: 1920,
    height: 600, // height: 1800,
    // frame: false, //Generate Window Frame
  });
  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`,
  );
  mainWindow.on('closed', () => (mainWindow = null));

  // const menu = Menu.buildFromTemplate([{}]);
  // Menu.setApplicationMenu(menu);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('closed', () => {
  app = null;
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
