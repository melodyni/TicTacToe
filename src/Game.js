import React from 'react';
import Grid from './Grid';

const Status = (props) => <p className='font'>{props.msg}</p>;

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayer: { name: 'Ragini', symbol: 'X' },
      nextPlayer: { name: 'Melodyni', symbol: '0' },
      cells: Array(9).fill(''),
      status: 'turn',
    };
    this.updateGame = this.updateGame.bind(this);
  }

  getGameStatus(cells) {
    const isGameWon = winConditions.some((subCell) =>
      subCell.every((id) => cells[id] === this.state.currentPlayer.symbol)
    );
    const allMovePlayed = cells.every((c) => c);
    return isGameWon ? 'won' : allMovePlayed ? 'draw' : 'turn';
  }

  updateGame(id) {
    this.setState(({ currentPlayer, nextPlayer, cells, status }) => {
      let newCells = cells.slice();
      if (!newCells[id] && status === 'turn') {
        newCells[id] = currentPlayer.symbol;
        return {
          cells: newCells,
          currentPlayer: nextPlayer,
          nextPlayer: currentPlayer,
          status: this.getGameStatus(newCells),
        };
      }
    });
  }

  render() {
    const { status, currentPlayer, nextPlayer, cells } = this.state;
    const statusMsg = {
      won: `Winner: ${nextPlayer.name}`,
      turn: `Turn: Player ${currentPlayer.name}`,
      draw: `Draw Game`,
    };
    return (
      <div>
        <Status msg={statusMsg[status]} />
        <Grid cells={cells} onClick={this.updateGame} />
      </div>
    );
  }
}

export default Game;
