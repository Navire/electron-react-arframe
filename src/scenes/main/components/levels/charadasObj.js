import React from 'react';
import { charadas } from '../../../assets';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CharadasObj = (props) => {
  return (
    <Link to="/riddles">
      <Img alt="charadas" src={charadas} />
    </Link>
  );
};

const Img = styled.img`
  width: 35%;
  float: left;
  margin-left: 10%;
`;

export default CharadasObj;
