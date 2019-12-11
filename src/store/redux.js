import socketIOClient from 'socket.io-client';

export const GET_BUFFER = 'GET_BUFFER';

const socket = socketIOClient('http://localhost:3005');

const init = () => {
  return { buffer: [] };
};

const panelReducer = (state, action) => {
  switch (action.type) {
    case GET_BUFFER:
      return {
        ...state,
        buffer: action.payload,
      };
    default:
      return init();
  }
};

export default panelReducer;

export const initiateSocket = (dispatch) => {
  socket.on('data', (data, err) => {
    return new Promise((resolve) => {
      dispatch({
        type: GET_BUFFER,
        payload: JSON.parse(data ? data : '[]'),
      });
    });
  });
};
