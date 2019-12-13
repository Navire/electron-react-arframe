import React, { useEffect } from 'react';
import styled from 'styled-components';
import { mario1 } from '../../assets/';

const ModalActivity = (props) => {
  const audio = new Audio(mario1);

  useEffect(() => {
    //Mounted
    if (props.hidden) {
      audio.play();
    }

    //Unmount
    return () => {
      audio.pause();
    };
  }, [props.hidden]);

  return (
    <Div hidden={props.hidden ? '' : 'none'}>
      <P>Parabéns Amiguinho, Você Acertou</P>
      <P>Por favor, limpe o painel para irmos a próxima atividade.</P>
    </Div>
  );
};

const P = styled.p`
  color: white;
  font-size: 250%;
  font-align: center;
  font-family: verdana;
`;

const Div = styled.div`
  position: absolute;
  opacity: 0.8;
  display: ${(props) => props.hidden};
  background-color: coral;
  float: left;
  height: 30%;
  width: 50%;
  top: 35%;
  z-index: 2;
  padding: 2%;
  margin-left: 25%;
`;

export default ModalActivity;
