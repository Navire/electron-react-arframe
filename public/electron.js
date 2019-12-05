const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
//Requires to HID
const io = require('socket.io')();
const hid = require('hid');

const isDev = require('electron-is-dev');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800, // width: 1920,
    height: 600, // height: 1800,
  });
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  mainWindow.on('closed', () => (mainWindow = null));
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

const data = Buffer.alloc(7);
const devices = hid.enumerate(
  5730, // vid
  24291, // pid
);

let result = [{}, {}, {}];

const updateResult = (resp, index, end) => {
  for (let i = 0; i <= end; i++) {
    result[index][i] = resp[index].data[i] ? resp[index].data[i] : result[index][i];
  }
};

const readDevice = () => {
  //Test If there is a device to connect
  const device = devices.length === 0 ? null : hid.open_path(devices[0].path);

  if (device) {
    setInterval(() => {
      hid.read(device, data);
      const resp = [{ data: {} }, { data: {} }, { data: {} }];
      switch (data[0]) {
        case 1:
          resp[0].data = data.filter((item, index) => index !== 0);
          updateResult(resp, 0, 5);
          break;
        case 2:
          resp[1].data = data.filter((item, index) => index !== 0);
          updateResult(resp, 1, 5);
          break;
        default:
          resp[2].data = data.filter((item, index) => index !== 0);
          updateResult(resp, 2, 2);
      }

      //Emitting result from Panel
      io.emit('data', JSON.stringify(result[0].concat(result[1]).concat(result[2])));
    }, 1000);
  }
};
