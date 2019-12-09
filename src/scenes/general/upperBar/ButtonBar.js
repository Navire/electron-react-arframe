import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { dot } from '../../assets/';

const ButtonBar = (props) => {
  const { audio, position, distance, img, onClick, tooltip } = props;

  const [visibility, changeVisibility] = useState('hidden');

  useEffect(() => {
    if (audio && visibility === 'visible') {
      const sound = new Audio(audio);
      sound.play();
    }
  }, [visibility]);

  const CircleBt = styled.div`
    background-color: #bbb;
    top: 5px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    position: relative;
    float: ${position ? position : 'left'};
    ${position ? position : 'left'}: ${distance ? distance : 10}px;
    :hover {
      box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.24), 0 7px 5px 0 rgba(0, 0, 0, 0.19);
      transform: scale(1.1);
    }
    :active {
      box-shadow: 0 5px #666;
      transform: translateY(4px);
    }
  `;

  const Img = styled.img`
    width: 80%;
    margin: 10% auto;
    display: block;
  `;

  const Tooltip = styled.span`
    visibility: ${visibility};
    background-color: rgba(229, 229, 255, 0.5);
    color: #000;
    text-align: center;
    margin-top: 10px;
    padding: 5px 10px;
    border-radius: 6px;
    position: absolute;
    z-index: 1;
  `;

  return (
    <CircleBt>
      <Img
        src={img ? img : dot}
        onClick={onClick}
        onMouseEnter={() => changeVisibility('visible')}
        onMouseLeave={() => changeVisibility('hidden')}
      />
      <Tooltip>{tooltip ? tooltip : 'alt text'}</Tooltip>
    </CircleBt>
  );
};

export default ButtonBar;
