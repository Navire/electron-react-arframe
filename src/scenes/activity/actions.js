import { GET_BUFFER } from "../general/types";
// import axios from "axios";

var myHeaders = new Headers();
myHeaders.append("content-type", "application/json");

var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',};

export const getBuffer = () => dispatch => {  

  return fetch('http://localhost:3001/api/blocks', myInit)    
    .then(resp => {      
      return resp.json()
    })
    .then(res => {      
      return new Promise(resolve =>
        dispatch({
          type: GET_BUFFER,
          payload: res,
        })
      );
    })
    .catch(err => console.log('err', err) );
};
