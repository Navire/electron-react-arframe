import React, { Fragment, useEffect } from 'react';
import { enviromentSound } from '../../assets/';

const Enviroment = (props) => {
  const audio = new Audio(enviromentSound);

  useEffect(() => {
    //Mounted
    audio.play();

    //Unmount
    return () => {
      audio.pause();
    };
  }, []);

  return <Fragment>{props.children}</Fragment>;
};

export default Enviroment;
