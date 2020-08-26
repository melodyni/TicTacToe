import React from 'react';
import Grid from './Grid';
import Status from './Status';

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
    const { winner, player, cells } = this.state;
    let status = <Status status={'Next Turn: '} text={`Player ${player}`} />;
    if (winner) {
      status = <Status status={'Winner: '} text={winner} />;
    }
    return (
      <div>
        {status}
        <Grid cellIds={cells} onClick={this.handleClick} />
      </div>
    );
  }
}

export default Game;
