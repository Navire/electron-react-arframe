import React, { Fragment, Component } from 'react';

import socketIOClient from 'socket.io-client';

class Main extends Component {
  state = {
    data: 'Receiver a message from socket IO',
  };

  componentDidMount() {
    const socket = socketIOClient('http://localhost:3005');
    socket.on('data', (data, err) => {
      this.setState({ data });
    });
  }

  render() {
    return (
      <Fragment>
        <p>Here a sample</p>
        {this.state.data}
        {/* <div style={style.background}>
          <UpperBar>
            <InfoBt top="10%" right="2%" />
          </UpperBar>
          <StarBg />
          <PlaneObj />
          <BallonObj />
          <BottomDesert />
          <PyramidObj />
          <ThreepyramidObj />
          <SphinxObj />
        </div> */}
      </Fragment>
    );
  }
}

export default Main;
