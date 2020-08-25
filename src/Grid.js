import React from 'react';
import Cell from './Cell';
import './game.css';

const Grid = (props) => {
  return (
    <div className='grid'>
      {props.cellIds.map((name, id) => (
        <Cell name={name} id={id} key={id} onClick={props.onClick} />
      ))}
    </div>
  );
};

export default Grid;
