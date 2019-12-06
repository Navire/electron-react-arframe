import React from 'react';
import './page.css';

const Page = (props) => {
  console.log('props.title: ', props.title);
  return (
    <div className="page">
      <p>
        <h1>{props.title}</h1>
      </p>
      {props.showAnswer || props.title ? <p>{props.text}</p> : <p></p>}
    </div>
  );
};

export default Page;
