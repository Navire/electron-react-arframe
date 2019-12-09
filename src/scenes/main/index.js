import React, { Component } from 'react';
import { UpperBar, Enviroment } from './components';

class Main extends Component {
  render() {
    return (
      <Enviroment>
        <UpperBar />
      </Enviroment>
    );
  }
}

export default Main;
