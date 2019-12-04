import React from "react";
import balloons from '../../assets/balloons.png'

const Content001 = (props) => {    
    return(         
        <div>
        <img alt="balloons" src={balloons} style={style.img} />
        <img alt="balloons" src={balloons} style={style.img} />
        <img alt="balloons" src={balloons} style={style.img} />
        </div>
    );  
}

const style = {

    img:{      
      margin: '10%',
      width: '20%',
      float: 'left',
      position: 'relative',          
    },
}

export default Content001;