const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
//Requires to HID
const io = require('socket.io')();
const hid = require('hid');

const isDev = require('electron-is-dev');

let mainWindow;
let result = [15];

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

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

//------------------ Comunication with HID --------------------------------
//-------------------------------------------------------------------------

io.on('connection', (socket) => {
  console.log('New client connected on 3005');
  const interval = setInterval(() => readDevice(), 1000);

  socket.on('disconnect', () => {
    clearInterval(interval);
    console.log('Client disconnected');
  });
});

io.listen(3005);

const devices = hid.enumerate(
  5730, // vid
  24291, // pid
);

const readDevice = () => {
  //Test if there is a device to connect
  const data = Buffer.alloc(7);
  let device;
  try {
    device = hid.open_path(devices[0].path);
    hid.read(device, data);
    for (let i = 1; i < 7; i++) {
      switch (data[0]) {
        case 1:
          result[i - 1] = data[i] ? data[i] : result[i - 1];
          break;
        case 2:
          result[i + 5] = data[i] ? data[i] : result[i + 5];
          break;
        default:
          if (i + 11 < 15) {
            result[i + 11] = data[i] ? data[i] : result[i + 11];
          }
      }
    }
    io.emit('data', JSON.stringify(result));
  } catch (err) {
    device = null;
    io.emit('data', null);
  }
};
