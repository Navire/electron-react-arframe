import React from "react";
import desert from "../../assets/desert.png";

const BottomDesert = (props) => {    
    return(
      <div style={style.background} />      
    );
  
}

const style = {
  background:{    
    width: '100%',    
    height: '35%',
    bottom: 0,
    position: 'absolute',
    backgroundImage: `url('${desert}')`,
    backgroundRepeat: 'no-repeat',
  }
}  

export default BottomDesert;
