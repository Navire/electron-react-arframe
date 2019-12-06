import React, { Component } from 'react';
import UpperBar from '.';
import { ButtonBar } from '../buttons';
import { dot, voltar } from '../../assets';

class upperBar extends Component {
  test = () => {
    console.log('test ok');
  };

  render() {
    return (
      <UpperBar>
        <ButtonBar positionValue={10} img={dot} audio={voltar} tooltip="Voltar" onClick={() => this.test()} />
        <ButtonBar positionValue={90} img={dot} />
      </UpperBar>
    );
  }
}

export default upperBar;
