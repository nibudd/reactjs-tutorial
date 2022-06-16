import React from 'react';

import { Board } from './board.js';
import { HistoricalMoves } from './historical-moves.js';
import { findWinningSquares, calculateWinner, getPlayer, getStatus } from './game-helper.js';

export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squarePlayed: null,
        squares: Array(9).fill(null),
        player: null,
      }],
      stepNumber: 0,
      xIsNext: true,
    }
  }

  handleClick(i) {
    const stepNumber = this.state.stepNumber;
    const history = this.state.history.slice(0, stepNumber+1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    
    const player = getPlayer(this.state.xIsNext);
    squares[i] = player;
    
    this.setState({
      history: history.concat([{
        squarePlayed: i,
        squares: squares,
        player: player,
      }]),
      stepNumber: stepNumber + 1,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpToMove(move) {
    this.setState({
      stepNumber: move,
      xIsNext: (move % 2) === 0,
    })
  }
  
  render() {
    const stepNumber = this.state.stepNumber;
    const history = this.state.history;
    const current = history[stepNumber];

    const status = getStatus(current.squares, this.state.xIsNext);

    return (
    <div className="game">
      <div className="game-board">
        <Board 
          winningSquares={findWinningSquares(current.squares)}
          squares={current.squares}
          onClick={(i) => this.handleClick(i)}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <HistoricalMoves 
          history={history}
          stepNumber={stepNumber}
          onClick={(move) => this.jumpToMove(move)}
        />
      </div>
    </div>
    );
  }
}
