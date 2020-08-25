import React from 'react';
import './game.css';

const Cell = (props) => {
  return (
    <button className='cell' id={props.id} onClick={props.onClick}>
      {props.name}
    </button>
  );
};

export default Cell;
