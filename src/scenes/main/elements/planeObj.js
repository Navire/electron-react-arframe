import React from "react";
import plane from "../../assets/plane.png";
import styled, { keyframes } from 'styled-components';

const PlaneObj = (props) => {        
    return(                          
        <Div>
            <img alt="plane" src={plane} style={style.img} />
        </Div>            
    );
}    

const keyFrame = keyframes`
    0% {
        top: 20%;
        left: 75%;
    }
    100% {
        top: 25%;
        left: 70%;
    }  
`;

const Div = styled.div`               
    top: 20%;
    left: 75%;
    position:  absolute; 
    animation: ${keyFrame} 2s linear 1s infinite alternate;
`;
 

const style = {
    img:{    
        width: '55%',
    }
}  

export default PlaneObj;
