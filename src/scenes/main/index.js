import React, { Component } from 'react';
import { UpperBar, Enviroment, Levels } from './components';

class Main extends Component {
  render() {
    return (
      <Enviroment>
        <UpperBar />
        <Levels />
      </Enviroment>
    );
  }
}

export default Main;
