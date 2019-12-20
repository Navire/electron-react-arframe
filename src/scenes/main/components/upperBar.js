import React from 'react';
import { UpperBar, ButtonBar } from '../../general/upperBar';
import { voltarBtn, fecharBtn } from '../../assets/';
import { closeApp } from '../../../store/redux';
import { Link } from 'react-router-dom';

const upperBar = (props) => {
  return (
    <UpperBar hoverEnable={true}>
      <Link to="/ar">
        <ButtonBar
          img={voltarBtn}
          position="right"
          distance={30}
          tooltip="Novosm,çlfdçlkmsdfçlksd"
        />
      </Link>
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
