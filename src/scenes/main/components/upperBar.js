import React, { Component } from 'react';
import { UpperBar, ButtonBar } from '../../general/upperBar';
import { voltar } from '../../assets/';

class upperBar extends Component {
  render() {
    return (
      <UpperBar>
        <ButtonBar position="left" distance={4} audio={voltar} tooltip="retornar" />
        <ButtonBar position="right" distance={4} audio={voltar} tooltip="retornar" />
      </UpperBar>
    );
  }
}

export default upperBar;
