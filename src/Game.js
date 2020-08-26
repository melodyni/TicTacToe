import React from 'react';
import Grid from './Grid';
import Status from './Status';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = { player: 'X', cells: Array(9).fill(null), winner: null };
    this.updateGame = this.updateGame.bind(this);
  }

  updateGame(event) {
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
    const { winner, player, cells } = this.state;
    const winMsg = <Status message={`Winner: ${winner}`} />;
    const turnMsg = <Status message={`Turn: Player ${player}`} />;
    return (
      <div>
        {winner ? winMsg : turnMsg}
        <Grid cells={cells} onClick={this.updateGame} />
      </div>
    );
  }
}

export default Game;
