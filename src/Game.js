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
      currentPlayer: { name: 'X', symbol: 'X' },
      nextPlayer: { name: '0', symbol: '0' },
      cells: Array(9).fill(''),
      winner: { name: null },
      isGameDraw: false,
    };
    this.updateGame = this.updateGame.bind(this);
  }

  getWinner(cells, currentPlayer) {
    const isGameWon = winConditions.some((subCell) =>
      subCell.every((id) => cells[id] === currentPlayer.symbol)
    );
    return { name: isGameWon ? currentPlayer.name : null };
  }

  updateGame(id) {
    this.setState(
      ({ currentPlayer, nextPlayer, cells, isGameDraw, winner }) => {
        let newCells = cells.slice();
        if (!newCells[id] && !isGameDraw && !winner.name) {
          newCells[id] = currentPlayer.symbol;
          const newWinner = this.getWinner(newCells, currentPlayer);
          return {
            cells: newCells,
            currentPlayer: nextPlayer,
            nextPlayer: currentPlayer,
            winner: newWinner,
            isGameDraw: newCells.every((c) => c) && !newWinner.name,
          };
        }
      }
    );
  }

  render() {
    const { cells, currentPlayer, isGameDraw, winner } = this.state;
    let status = `${currentPlayer.name}'s Turn`;
    if (winner.name) {
      status = `${winner.name} Won`;
    }
    if (isGameDraw) {
      status = `Draw Game`;
    }
    return (
      <div>
        <Status msg={status} />
        <Grid cells={cells} onClick={this.updateGame} />
      </div>
    );
  }
}

export default Game;
