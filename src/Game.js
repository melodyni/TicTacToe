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
    this.state = { player: 'X', cells: Array(9).fill(null), status: 'turn' };
    this.updateGame = this.updateGame.bind(this);
  }

  getGameStatus(cells) {
    const isGameWon = winConditions.some((subCell) =>
      subCell.every((id) => cells[id] === this.state.player)
    );
    const allMovePlayed = cells.every((c) => c);
    return isGameWon ? 'won' : allMovePlayed ? 'draw' : 'turn';
  }

  updateGame(event) {
    const id = event.target.id;
    const { cells, status, player } = this.state;

    if (!cells[id] && status === 'turn') {
      let newCells = cells.slice();
      newCells[id] = player;

      this.setState({
        status: this.getGameStatus(newCells),
        player: player === 'X' ? '0' : 'X',
        cells: newCells,
      });
    }
  }

  render() {
    const { status, player, cells } = this.state;
    const statusMsg = {
      won: `Winner: ${player === 'X' ? '0' : 'X'}`,
      turn: `Turn: Player ${player}`,
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
