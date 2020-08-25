import React from 'react';
import Grid from './Grid';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = { player: 'X', cells: Array(9).fill(null) };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const cellId = event.target.id;
    if (this.state.cells[cellId] === null) {
      let newCells = this.state.cells.slice();
      newCells[cellId] = this.state.player;
      this.setState({
        player: this.state.player === 'X' ? '0' : 'X',
        cells: newCells,
      });
    }
  }

  render() {
    return <Grid cellIds={this.state.cells} onClick={this.handleClick} />;
  }
}

export default Game;
