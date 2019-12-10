import React from 'react';
import { decifrando } from '../../../assets/';
import styled from 'styled-components';

const DecifrandoObj = (props) => {
  return (
    <Div>
      <Img alt="decifrando" src={decifrando} />
    </Div>
  );
};

const Div = styled.div`
  top: 15%;
  right: -5%;
  position: absolute;
`;

const Img = styled.img`
  width: 80%;
`;

export default DecifrandoObj;
