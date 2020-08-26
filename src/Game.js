import React from 'react';
import Grid from './Grid';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.winner = null;
    this.state = { player: 'X', cells: Array(9).fill(null) };
    this.handleClick = this.handleClick.bind(this);
  }

  declareWinner() {
    console.log('in decla');
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
    const [strike] = winConditions.filter(([a, b, c]) => {
      return (
        this.state.cells[a] &&
        this.state.cells[a] === this.state.cells[b] &&
        this.state.cells[a] === this.state.cells[c]
      );
    });
    if (strike) {
      this.winner = this.state.cells[strike[0]];
      return this.state.cells[strike[0]];
    }
  }

  handleClick(event) {
    console.log('in handle');
    const cellId = event.target.id;
    if (this.state.cells[cellId] || this.winner) {
      return;
    }
    let newCells = this.state.cells.slice();
    newCells[cellId] = this.state.player;
    this.setState({
      player: this.state.player === 'X' ? '0' : 'X',
      cells: newCells,
    });
  }

  render() {
    console.log('in render', this.state, this.winner);
    return (
      <div>
        <p className='status'>Winner: {this.declareWinner()}</p>
        <Grid cellIds={this.state.cells} onClick={this.handleClick} />
      </div>
    );
  }
}

export default Game;
