import React from 'react';
import styled from 'styled-components';
import { mainBackground } from '../../assets';
import Audio from './audio';

const Enviroment = (props) => {
  const Background = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;    
    top: -1px;
    left: -1px;
    background-image: url('${mainBackground}');
    background-repeat: no-repeat;    
    background-size: 100% 100%;
    overflow: hidden;
  `;

  return (
    <Background>
      <Audio />
      {props.children}
    </Background>
  );
};

export default Enviroment;
