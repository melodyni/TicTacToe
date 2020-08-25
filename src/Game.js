import React from 'react';
import Grid from './Grid';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = { player: 'X', cells: Array(9).fill('') };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    let newCells = this.state.cells.slice();
    newCells[event.target.id] = this.state.player;
    this.setState({
      player: this.state.player === 'X' ? '0' : 'X',
      cells: newCells,
    });
  }

  render() {
    return <Grid cellIds={this.state.cells} onClick={this.handleClick} />;
  }
}

export default Game;
