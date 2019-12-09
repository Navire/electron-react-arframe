import socketIOClient from 'socket.io-client';

const socket = socketIOClient('http://localhost:3005');

const initialState = {
  buffer: [],
};

const panelReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      socket.on('data', (data, err) => {
        state = data;
      });
      return state;
  }
};

export default panelReducer;
