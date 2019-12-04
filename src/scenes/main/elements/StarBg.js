import React from "react";
import star from '../../assets/stars.png';
import styled, { keyframes } from 'styled-components';

const StarBG = (props) => {    
    return(
      <Div>
        {/* <div style={style.background}>
          {props.children}
        </div> */}
        <img alt="star" src={star} style={style.img} />
      </Div>
    );
  
}

const keyFrame = keyframes`
    0% {
        top: 0px;
        left: 0px;
    }
    100% {
        top: 2%;
        left: 3%;
    }  
`;

const Div = styled.div`    
    position: absolute;    
    animation: ${keyFrame} 2s linear 1s infinite alternate;
`;

const style = {
  img:{
    width: '70%',
  },
}

export default StarBG;
