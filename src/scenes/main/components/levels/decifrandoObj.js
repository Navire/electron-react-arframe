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
`;

export default DecifrandoObj;
