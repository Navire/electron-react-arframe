/*

Leitor da Mesa E-Blocks utilizando Socket.IO e Node-HID

Autor: Paulo Henrique Oliveira dos Santos
04/12/2019


*/
var HID = require('node-hid');
const io = require('socket.io')();

let interval;

io.on('connection', (socket) => {
  console.log('New client connected');
  3;
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => console.log('.'), 10000);
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

io.listen(3100);

vid = 5730;
pid = 24291;
var device = new HID.HID(vid, pid);

var fomatedBuffer = [];
var bufferSize = [0, 0, 0];

// Função para limpar o buffer de 15 posições. Coloca o código 255, correspondente a não haver bloco naquela posição da mesa
clearBuffer = (buffer) => {
  buffer = [];
  for (let i = 0; i < 15; i++) {
    buffer.push(255);
  }
  return buffer;
};

// Função para atualizar o buffer final de 15 posições, "fullbuffer", com base nos buffers emitidos pela mesa, "buffer"
updateBufferSection = (fullbuffer, buffer, start, end) => {
  bufferFormated = fullbuffer;
  for (let i = start; i < end; i++) {
    bufferFormated[i] = buffer[i - start];
  }
  return bufferFormated;
};

// Função auxiliar para comparar vetores
compareArray = (array1, array2) => {
  let equal = true;
  if (array1.length !== array2.length) {
    equal = false;
    return equal;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      equal = false;
      break;
    }
  }
  return equal;
};

// Empacota os 3 buffers em um único buffer de 15 posições. Valida se recebeu os 3 através da variável "bufferSize"
formatBuffer = (buffer) => {
  if (!this.formatedBuffer) this.formatedBuffer = clearBuffer([]);
  if (this.formatedBuffer.length > 16) {
    this.formatedBuffer = clearBuffer([]);
  } else {
    if (compareArray(bufferSize, [1, 1, 1])) {
      console.log('bufferSize to erase: ', bufferSize);
      bufferSize = [0, 0, 0];
    }
    if (buffer[0] === 1) {
      bufferSize[0] = 1;
      this.formatedBuffer = updateBufferSection(
        this.formatedBuffer,
        Object.values(buffer).filter((item, index) => index !== 0),
        0,
        6,
      );
    } else if (buffer[0] === 2) {
      bufferSize[1] = 1;
      this.formatedBuffer = updateBufferSection(
        this.formatedBuffer,
        Object.values(buffer).filter((item, index) => index !== 0),
        6,
        12,
      );
    } else if (buffer[0] === 3) {
      bufferSize[2] = 1;
      this.formatedBuffer = updateBufferSection(
        this.formatedBuffer,
        Object.values(buffer).filter(
          (item, index) => index !== 0 && index < 4,
        ),
        12,
        15,
      );
    }
  }
};

prevBuffer = [];

setInterval(() => {
  device.read((err, data) => {
    formatBuffer(data);
    console.log(bufferSize);
    console.log('Buffer anterior: ', prevBuffer);
    if (compareArray(bufferSize, [1, 1, 1])) {
      if (prevBuffer.toString() !== this.formatedBuffer.toString()) {
        console.log(
          'Emitindo buffer formatado: ',
          this.formatedBuffer,
        );
        io.emit('data', JSON.stringify(this.formatedBuffer));
        prevBuffer = [...this.formatedBuffer];
      }
    }
  });
}, 10);
