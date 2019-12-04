import React, {Fragment} from "react";
import questionbutton from '../assets/question.png';

const InfoBt = (props) => {    
    const style = {
        img:{    
          top: props.top ? props.top : '1%',
          right: props.right ? props.right : '1%',
          width: '3%',
          position: 'absolute',    
        },
      }  

    return(
        <Fragment>            
            <img alt="info" src={questionbutton} style={style.img} />            
        </Fragment>
    );
  
}

export default InfoBt;