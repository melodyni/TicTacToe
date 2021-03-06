import React from 'react';
import Cell from './Cell';
import './game.css';

const Grid = (props) => {
  return (
    <div className='grid'>
      {props.cells.map((symbol, id) => (
        <Cell symbol={symbol} id={id} key={id} onClick={props.onClick} />
      ))}
    </div>
  );
};

export default Grid;
