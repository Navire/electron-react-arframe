import React, { Fragment } from 'react';
import styled from 'styled-components';
import { upperBar } from '../../assets';

const UpperBar = (props) => {
  const hover = `
    :hover {
      transform: scale(1.2);
    }
  `;
  const BoxBar = styled.div`
    background-image: url(${upperBar});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    transition: transform 0.5s;
    width: 80%;
    height: 75px;
    margin: 0 auto;
    ${props.hoverEnable ? hover : ''}
  `;

  return (
    <Fragment>
      <BoxBar>{props.children}</BoxBar>
    </Fragment>
  );
};

export default UpperBar;
