import React from 'react';
import Cell from './Cell';
import './game.css';

const Grid = () => {
  return (
    <div className='grid'>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
    </div>
  );
};

export default Grid;
