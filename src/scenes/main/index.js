import React, { Component } from 'react';
import { UpperBar, Enviroment, Levels } from './components';
import { connect } from 'react-redux';
import { initiateSocket } from './redux';

class Main extends Component {
  render() {
    console.log(this.props.buffer);
    return (
      <Enviroment>
        <UpperBar />
        <Levels />
      </Enviroment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.panelBlocks,
  };
};

export default connect(mapStateToProps, initiateSocket)(Main);
