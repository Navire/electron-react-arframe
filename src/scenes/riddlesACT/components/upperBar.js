import React from 'react';
import { UpperBar, ButtonBar } from '../../general/upperBar';
import { fecharBtn, voltar, voltarBtn } from '../../assets';
import { Link } from 'react-router-dom';

const upperBar = () => (
  <UpperBar hoverEnable={false}>
    <Link to="/">
      <ButtonBar
        img={voltarBtn}
        position="left"
        distance={10}
        tooltip="voltar"
        audio={voltar}
      />
    </Link>
    <ButtonBar
      img={fecharBtn}
      position="right"
      distance={18}
      tooltip="fechar"
    />
  </UpperBar>
);

export default upperBar;
