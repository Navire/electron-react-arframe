import React from 'react';
import { decifrando } from '../../../assets/';
import styled from 'styled-components';

const DecifrandoObj = (props) => {
  return <Img alt="decifrando" src={decifrando} />;
};

const Img = styled.img`
  width: 35%;
  float: right;
  margin-right: 10%;
  border-radius: 50%;
  :hover {
    box-shadow: 0 2px 6px 0 rgba(204, 204, 0, 0.24),
      0 7px 5px 0 rgba(0, 0, 0, 0.19);
    transform: scale(1.1);
  }
  :active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

export default DecifrandoObj;
