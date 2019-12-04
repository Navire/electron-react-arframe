import React from "react";
import balloons from '../../assets/balloons.png'

const Content001 = (props) => {    
    return(                 
        <img alt="balloons" src={balloons} style={style.img} />                
    );  
}

const style = {

    img:{      
      margin: '30%',
      width: '30%',            
      position: 'relative',          
    },
}

export default Content001;