import React from 'react';
import Cell from './Cell';
import './game.css';

const Grid = (props) => {
  return (
    <div className='grid'>
      {props.cellIds.map((id) => (
        <Cell key={id}></Cell>
      ))}
    </div>
  );
};

export default Grid;
