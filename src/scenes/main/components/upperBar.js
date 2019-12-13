import React from 'react';
import { UpperBar, ButtonBar } from '../../general/upperBar';
import { fecharBtn } from '../../assets/';
import { closeApp } from '../../../store/redux';

const upperBar = (props) => {
  return (
    <UpperBar hoverEnable={true}>
      <ButtonBar
        img={fecharBtn}
        position="right"
        distance={18}
        tooltip="fechar"
        onClick={closeApp}
      />
    </UpperBar>
  );
};

export default upperBar;
