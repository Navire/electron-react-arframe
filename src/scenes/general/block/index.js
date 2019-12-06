import React from 'react';
// import assetBlock from '../../assets/edupanel-assets/white_square.png';

const Block = (props) => {
  return (
    <div>
      <div style={style.background}>{props.simbol}</div>
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
