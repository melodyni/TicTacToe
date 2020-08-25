import React from 'react';
import Grid from './Grid';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <Grid cellIds={[0, 1, 2, 3, 4, 5, 6, 7, 8]} />;
  }
}

export default Game;
