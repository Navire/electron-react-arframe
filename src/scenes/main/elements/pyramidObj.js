import React from "react";
import pyramid from "../../assets/pyramid.png";

const PyramidObj = (props) => {    
    return(
        <img alt="pyramid" src={pyramid} style={style.img} />
    );
}

const style = {
    img:{    
        width: '30%',
        position: 'absolute',
        top: '60%',
        left: '10%',
    }
}  

export default PyramidObj;
