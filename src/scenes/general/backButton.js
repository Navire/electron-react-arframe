import React, {Fragment} from "react";
import { Link } from 'react-router-dom';
import backbutton from '../assets/arrow_back-24px.png';

const BackBt = (props) => {    
    const style = {
        img:{    
          top: props.top ? props.top : '1%',
          left: props.left ? props.left : '1%',
          width: '3%',
          position: 'absolute',    
        },
      }  

    return(
        <Fragment>
            <Link to={props.href}>
                <img alt="backButton" src={backbutton} style={style.img} />
            </Link>
        </Fragment>
    );
  
}



export default BackBt;