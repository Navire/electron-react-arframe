import React, { Component, Fragment } from 'react';
import BlockTranslation from '../block_translation.json';
// import assetBlock from '../../assets/edupanel-assets/white_square.png';

const Block = (props) => {
  let blockTranslantion = BlockTranslation.purple_blocks;
  return (
    <div>
      <div style={style.background}>{blockTranslantion[props.name]}</div>
    </div>
  );
};

const style = {
  background: {
    backgroundColor: '#4F4F4F',
    border: '2px solid black',
    width: '50px',
    height: '50px',
    display: 'block',
    margin: '4px',
    marginTop: '25%',
    fontSize: '24px',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    color: '#9932CC',
    overflowWrap: 'break-word',
    lineHeight: '20px',
  },
};

export default Block;
