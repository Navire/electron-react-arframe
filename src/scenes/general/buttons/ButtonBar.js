import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import { dot } from '../../assets/';

class ButtonBar extends Component {
  state = { visibility: 'hidden' };

  onMouseEnter = () => {
    const { audio } = this.props;
    if (audio) {
      const sound = new Audio(audio);
      sound.play();
    }
    this.setState({ visibility: 'visible' });
  };

  onMouseLeave = () => {
    this.setState({ visibility: 'hidden' });
  };

  render() {
    const { positionValue, img, onClick, tooltip } = this.props;
    const { visibility } = this.state;

    const ReturnBt = styled.div`
      height: 45px;
      width: 45px;
      top: 5px;
      background-color: #bbb;
      border-radius: 50%;
      position: relative;
      float: left;
      left: ${positionValue ? positionValue : 10}%;
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
      <Fragment>
        <ReturnBt>
          <Img
            src={img ? img : dot}
            onClick={onClick}
            onMouseEnter={() => this.onMouseEnter()}
            onMouseLeave={() => this.onMouseLeave()}
          />
          <Tooltip>{tooltip ? tooltip : 'alt text'}</Tooltip>
        </ReturnBt>
      </Fragment>
    );
  }
}

export default ButtonBar;
