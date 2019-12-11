import React from 'react';
import styled from 'styled-components';

const ModalActivity = (props) => {
  return (
    <Div hidden={props.hidden ? '' : 'none'}>
      <P>Parabéns Amiginho, Você Acertou</P>
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
