import React, {Fragment} from "react";

const BlockBt = (props) => {    
    const style = {
        button:{               
            bottom: props.bottom ? props.bottom : '1%',
            left: props.left ? props.left : '1%',          
            position: 'absolute',    
            backgroundColor: '#e7e7e7',
            color: 'black',
            border: '4px solid #FF0000',
            borderRadius: '8px',
            padding: '5px 32px',
            textAlign: 'center',
            fontSize: '10vh',
        },
      }  

    return(
        <Fragment>            
            <button alt="backButton" onClick={props.onclick} style={style.button} >            
                {props.value}
            </button>            
        </Fragment>
    );
  
}



export default BlockBt;