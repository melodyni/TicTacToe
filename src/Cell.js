import React from 'react';
import './game.css';

const Cell = (props) => {
  return <button className='cell'>{props.name}</button>;
};

export default Cell;
