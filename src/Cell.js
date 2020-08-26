import React from 'react';
import './game.css';

const Cell = (props) => {
  const { symbol, id, onClick } = props;
  let color = '';
  if (symbol === 'X') {
    color = 'red';
  } else if (symbol === '0') {
    color = 'blue';
  }
  const styles = `cell font ${color}`;
  return (
    <button className={styles} id={id} onClick={onClick}>
      {symbol}
    </button>
  );
};

export default Cell;
