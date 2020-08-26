import React from 'react';
import Game from './Game';

const newGame = () => {
  window.location.reload(false);
};

const App = () => {
  return (
    <div className='container'>
      <Game />
      <br />
      <button onClick={newGame} className='font button '>
        New Game
      </button>
    </div>
  );
};

export default App;
