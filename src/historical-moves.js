import React from "react";


export class HistoricalMoves extends React.Component {
  render() {
    const history = this.props.history;
    const moves = history.map(
      ({squarePlayed, player}, move_number) => {
        const row = Math.floor(squarePlayed / 3);
        const col = squarePlayed % 3;
        const description = move_number ? 
          `Go to move # ${move_number}: ${player} @ (${row}, ${col})`: 
          "Go to game start";

        return (
          <li key={move_number}>
            <button onClick={() => this.props.onClick(move_number)}>{description}</button>
          </li>
        );
      }
    );
    return (
      <ol>{moves}</ol>
    );
  }
}
