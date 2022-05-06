import React from "react";


export class HistoricalMoves extends React.Component {
  render() {
    const history = this.props.history;
    const moves = history.map(
      (board, move) => {
        const description = move ? "Go to move #" + move : "Go to game start";
        return (
          <li key={move}>
            <button onClick={() => this.props.onClick(move)}>{description}</button>
          </li>
        );
      }
    );
    return (
      <ol>{moves}</ol>
    );
  }
}
