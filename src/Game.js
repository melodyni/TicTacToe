import React from 'react';
import Grid from './Grid';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cells: Array(9).fill('X') };
  }
  render() {
    return <Grid cellIds={this.state.cells} />;
  }
}

export default Game;
