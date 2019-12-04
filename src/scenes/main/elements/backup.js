import React from "react";

import { connect } from "react-redux";
import * as AuthActions from "./actions";
import background from "../assets/background.png";

const Main = (props) => {    
    return(
      <div style={style.background}>
        <h1>Main {props.player}</h1>
        <button onClick={props.signIn}>V Entrar</button>
      </div>
    );
  
}

const style = {
  background:{    
    width: '100%',
    height: '100%',
    position: 'absolute',
    overflow: 'auto',
    backgroundImage: `url('${background}')`,
  }
}

  

const mapStateToProps = (state) => {
  return{
    ...state.player,
  }
}

export default connect(
  mapStateToProps,
  AuthActions
)(Main);
