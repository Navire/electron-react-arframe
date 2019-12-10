import React from 'react';
import { adultPG } from '../../../assets';
import styled, { keyframes } from 'styled-components';

const AdultPGObj = (props) => {
  return (
    <Div>
      <Img alt="balloon" src={adultPG} />
    </Div>
  );
};

const keyFrame = keyframes`
    0% {
        top: 35%;
        left: 40%;
        transform: rotate(20deg);
    }
    
    100% {
        top: 35%;
        left: 40%;
        transform: rotate(-360deg);
        transform: scaleX(-1);
    }  
`;

const Div = styled.div`
  top: 35%;
  left: 40%;
  position: absolute;
  animation: ${keyFrame} 5s linear 1s infinite alternate;
`;

const Img = styled.img`
  width: 35%;
`;

export default AdultPGObj;
