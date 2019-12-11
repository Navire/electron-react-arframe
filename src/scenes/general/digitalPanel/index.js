import React, { Fragment } from 'react';
import styled from 'styled-components';
import { digitalPanel } from '../../assets';
import Block from './Block';
import { connect } from 'react-redux';
import { initiateSocket } from '../../../store/redux';
import vetor from '../blockTranslation.json';

const DigitalPanel = (props) => {
  const { buffer } = props;

  return (
    <BoxBottom>
      {buffer.map((item, index) => {
        const hide = item === 255 ? true : false;

        return (
          <Block
            key={index}
            hidden={hide}
            value={vetor.red_blocks[item]}
          />
        );
      })}
    </BoxBottom>
  );
};

const BoxBottom = styled.div`
  top: ${window.innerHeight - 165}px;
  left: 25%;
  position: absolute;
  background-position: top center;
  background-image: url(${digitalPanel});
  background-repeat: no-repeat;
  width: 850px;
  height: 150px;
`;

const mapStateToProps = (state) => {
  return {
    ...state.panelBlocks,
  };
};

export default connect(mapStateToProps, initiateSocket)(DigitalPanel);
