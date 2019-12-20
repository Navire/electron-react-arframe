import React, { Fragment } from 'react';
import ArCall from './Ar';
import ReactDOM from 'react-dom';

const Ar = () => {
  ReactDOM.render(<ArCall />, document.body);

  return (
    <Fragment>
      <p>App</p>
    </Fragment>
  );
};

export default Ar;
