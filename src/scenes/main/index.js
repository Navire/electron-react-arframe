import React, { Fragment, Component } from 'react';

import socketIOClient from 'socket.io-client';

class Main extends Component {
<<<<<<< HEAD
  render() {
    return <div>Hello</div>;
=======
  audio = new Audio(soundEnviroment);

  state = {
    data: 'Fuck you socket IO',
  };

  componentWillUnmount() {
    this.this.audio.pause();
  }

  componentDidMount() {
    this.audio.play();
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
>>>>>>> communication between Electron and HID was made
  }
}

export default Main;
