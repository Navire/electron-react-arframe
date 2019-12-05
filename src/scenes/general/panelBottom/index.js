import React, { Component, Fragment } from 'react';
import Block from '../block';
import socketIOClient from 'socket.io-client';

class PanelBottom extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: 'http://127.0.0.1:3100',
    };
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on('data', (data) => {
      console.log('Dados recebidos: ', data);
      this.setState({ response: data.toString() });
    });
  }

  render() {
    const style = {
      panel: {
        backgroundColor: '#FFD700',
        position: 'absolute',
        bottom: '0',
        zIndex: '2',
        width: '100%',
        height: '20%',
        textAlign: 'center',
      },
      display: {
        display: 'inline-flex',
        textAlign: 'center',
        position: 'relative',
        bottom: '0',
        zIndex: '3',
        margin: '0px',
      },
    };

    const { response } = this.state;
    const jsonResponse = response ? JSON.parse(response) : new Array(15).fill(255);
    console.log(jsonResponse);

    return (
      <div style={style.panel}>
        <div style={style.display}>
          {jsonResponse.map((item, index) => (
            <Block key={index} name={item}></Block>
          ))}
        </div>
      </div>
    );
  }
}

export default PanelBottom;
