import React from 'react';
import './game.css';

const Status = (props) => (
  <p className='status'>
    {props.status} {props.text}
  </p>
);

export default Status;
