import React, { Fragment } from 'react';
import { DecifrandoObj, CharadasObj } from './levels/';

const Levels = (props) => {
  return (
    <Fragment>
      <CharadasObj />
      <DecifrandoObj />
    </Fragment>
  );
};

export default Levels;
