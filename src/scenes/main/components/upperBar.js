import React from 'react';
import { UpperBar, ButtonBar } from '../../general/upperBar';
import { fecharBtn } from '../../assets/';

const upperBar = () => {
  return (
    <UpperBar hoverEnable={true}>
      <ButtonBar img={fecharBtn} position="right" distance={18} tooltip="fechar" />
    </UpperBar>
  );
};

export default upperBar;
