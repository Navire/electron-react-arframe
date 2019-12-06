import React, { Fragment } from 'react';
import styled from 'styled-components';

const UpperBar = (props) => {
  const BoxBar = styled.div`
    background-color: red;
    transition: transform 0.5s;
    width: 80%;
    height: ${window.innerHeight / 12}px;
    margin: 0 auto;
    :hover {
      transform: scale(1.2);
    }
  `;

  return (
    <Fragment>
      <BoxBar>{props.children}</BoxBar>
    </Fragment>
  );
};

export default UpperBar;
