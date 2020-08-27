import React from 'react';
import './game.css';

const Cell = (props) => {
  const { symbol, id, onClick } = props;
  const color = {
    X: 'red',
    '0': 'blue',
    '': '',
  };

  const styles = `cell font ${color[symbol]}`;
  return (
    <button className={styles} id={id} onClick={() => onClick(id)}>
      {symbol}
    </button>
  );
};

export default Cell;
