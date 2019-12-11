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
  border-radius: 50%;
  :hover {
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.24),
      0 7px 5px 0 rgba(0, 0, 0, 0.19);
    transform: scale(1.1);
  }
  :active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

export default CharadasObj;
