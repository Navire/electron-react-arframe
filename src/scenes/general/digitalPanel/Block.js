import React from 'react';
import styled from 'styled-components';
import { block } from '../../assets';

const Block = (props) => {
  const invisible = <Invisible />;

  const blockdiv = (
    <BlockDiv>
      <Symbol>{props.value ? props.value : 0}</Symbol>
    </BlockDiv>
  );
  return props.hidden ? invisible : blockdiv;
};

const Symbol = styled.div`
  position: relative;
  top: 5px;
  left: 15px;
  color: blue;
  font-size: 24px;
`;

const BlockDiv = styled.div`
  position: relative;
  float: left;
  top: 100px;
  left: 108px;
  background-image: url(${block});
  background-repeat: no-repeat;

  width: 45px;
  height: 45px;
`;

const Invisible = styled.div`
  position: relative;
  float: left;
  top: 100px;
  left: 108px;
  width: 45px;
  height: 45px;
`;

export default Block;
