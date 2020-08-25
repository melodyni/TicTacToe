import React from 'react';
import Cell from './Cell';
import './game.css';

const Grid = (props) => {
  console.log(props);
  return (
    <div className='grid'>
      {props.cellIds.map((name, id) => (
        <Cell name={name} key={id} />
      ))}
    </div>
  );
};

export default Grid;
