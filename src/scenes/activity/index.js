import React, {Fragment, Component} from "react";
import { connect } from "react-redux";
import * as actions from "./actions";
import background from "../assets/background.png";
import { 
  whatstask,
  SquareTasks,
  wrong,
  correct,
} from './elements'
import { 
    UpperBar,
    BackBt,
    InfoBt,
} from '../general'

class Activity extends Component{  
  whatstask = new Audio(whatstask);  
  correctAudio = new Audio(correct);
  wrongAudio = new Audio(wrong);

  state = {
    buffer: [],    
    position: null,
    firsttime: true,
  };

  checkBufferBlockTable = () => {
    this.props.getBuffer();
    const { buffer } = this.props;
    const { position, firsttime }  = this.state;
    
    let correct = false;
    let play = 0;
    for(let i=0; i<16; i++){      
      if(buffer[i] === 13){
        play = buffer[i];
        correct = true;
        break;
      }  
      else if (buffer[i] !== 255) {        
        play = buffer[i];
        break;
      } 
    }

    if (!firsttime) {
      if (play !== position && play !== undefined){
        ( correct ? this.correctAudio.play() : this.wrongAudio.play() );
        
        this.setState({
          position: play,
        });
      }            
    } else {
      setTimeout( ()=> 
        this.setState({          
          firsttime: false,
        })
      ,4000)
    }
  }
  
  componentWillMount(){        
    const intervalId = setInterval(()=> this.checkBufferBlockTable(), 1000);
    this.setState({intervalId: intervalId});
  }

  componentDidMount(){
    this.whatstask.play();
  }

  componentWillUnmount(){
    this.whatstask.pause();
    this.correctAudio.pause();
    this.wrongAudio.pause();
    clearInterval(this.state.intervalId);
  }

  render(){          
    return(
    <Fragment>      
      <div style={style.background}>
        <UpperBar>
          <BackBt 
            top='10%'
            left='1%'
            href='/' />
          <InfoBt 
            top='10%'
            right='2%'
          />
        </UpperBar>        
        <SquareTasks />
      </div>      
    </Fragment>
    );
  }
}

const style = {
  background:{    
    width: '100%',
    height: `${window.innerHeight}px`,
    position: 'absolute',
    overflow: 'auto',
    top:'-1px',
    left:'-1px',
    backgroundImage: `url('${background}')`,
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',

  }
}

const mapStateToProps = (state) => {
  return{
    ...state.activity,
  }
}

export default connect(
  mapStateToProps,
  actions
)(Activity);