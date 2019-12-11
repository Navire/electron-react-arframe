import React, { Fragment } from 'react';
import { DecifrandoObj, CharadasObj } from './levels/';
import styled from 'styled-components';

const Levels = (props) => {
  return (
    <Div>
      <CharadasObj />
      <DecifrandoObj />
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
`;

export default Levels;
