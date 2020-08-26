import React from 'react';
import Grid from './Grid';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = { player: 'X', cells: Array(9).fill(null), winner: null };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const id = event.target.id;
    const { cells, winner, player } = this.state;

    if (!cells[id] && !winner) {
      let newCells = cells.slice();
      newCells[id] = player;

      const isGameWon = this.props.winConditions.some((cells) =>
        cells.every((id) => newCells[id] === player)
      );

      this.setState({
        winner: isGameWon ? player : null,
        player: player === 'X' ? '0' : 'X',
        cells: newCells,
      });
    }
  }

  render() {
    return (
      <div>
        <p className='status'>Winner: {this.state.winner}</p>
        <Grid cellIds={this.state.cells} onClick={this.handleClick} />
      </div>
    );
  }
}

export default Game;
