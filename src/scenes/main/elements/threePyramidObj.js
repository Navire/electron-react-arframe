import React from "react";
import threePyramidObj from "../../assets/threepyramid.png";

const ThreePyramidObj = (props) => {    
    return(
        <img alt="threePyramidObj" src={threePyramidObj} style={style.img} />
    );
}

const style = {
    img:{    
        width: '25%',
        position: 'absolute',
        top: '70%',
        left: '40%',
    }
}  

export default ThreePyramidObj;
