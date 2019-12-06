import React, { Component, Fragment } from 'react';
import Block from '../block';

class PanelBottom extends Component {
  render() {
    const style = {
      panel: {
        backgroundColor: '#FFD700',
        position: 'absolute',
        bottom: '0',
        zIndex: '2',
        width: '100%',
        height: '20%',
        textAlign: 'center',
      },
      display: {
        display: 'inline-flex',
        textAlign: 'center',
        position: 'relative',
        bottom: '0',
        zIndex: '3',
        margin: '0px',
      },
    };

    const { response } = this.props;

    return (
      <div style={style.panel}>
        <div style={style.display}>
          {response.map((item, index) => (
            <Block key={index} simbol={item}></Block>
          ))}
        </div>
      </div>
    );
  }
}

export default PanelBottom;
