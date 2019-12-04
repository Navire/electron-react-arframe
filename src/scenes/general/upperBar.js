import React from "react";

const UpperBar = (props) => {    
    return(
      <div style={style.background}>
        {props.children}
      </div>
    );
  
}

const style = {
  background:{    
    width: '100%',
    height: '8%',
    position: 'absolute',    
    backgroundColor: "#4c0000",
    zIndex: 3,
  }
}  

export default UpperBar;
