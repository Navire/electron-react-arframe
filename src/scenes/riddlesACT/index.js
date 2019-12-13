import React from 'react';
import Handler from './components/handler';
import UpperBar from './components/upperBar';
import DigitalPanel from '../general/digitalPanel';
import { ModalActivity } from '../general/modalActivity';
import { livroAberto } from '../assets';
import styled from 'styled-components';

const Background = (props) => {
  return (
    <BG>
      <UpperBar />
      <ModalActivity hidden={props.showAnswer} />
      <Handler />
      <DigitalPanel />
    </BG>
  );
};

const BG = styled.div`
  top: -1px;
  left: -1px;
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url(${livroAberto});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
  z-index: 0;
`;

export default Background;
