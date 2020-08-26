import React from 'react';
import './game.css';

const Status = (props) => (
  <p className='font'>
    {props.status} {props.text}
  </p>
);

export default Status;
