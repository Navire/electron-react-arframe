import React from 'react';
import { charadas } from '../../../assets';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CharadasObj = (props) => {
  return (
    <Div>
      <Link to="/riddles">
        <Img alt="charadas" src={charadas} />
      </Link>
    </Div>
  );
};

const Div = styled.div`
  top: 15%;
  left: 5%;
  position: absolute;
`;

const Img = styled.img`
  width: 80%;
`;

export default CharadasObj;
