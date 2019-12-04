import React from "react";
import sphinx from "../../assets/sphinx.png";

const SphinxObj = (props) => {    
    return(
        <img alt="sphinx" src={sphinx} style={style.img} />
    );
}

const style = {
    img:{    
        width: '20%',
        position: 'absolute',
        top: '65%',
        left: '75%',
        transform: 'scaleX(-1)',
    }
}  

export default SphinxObj;
