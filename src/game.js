import React from 'react';

import { Board } from './board.js';
import { HistoricalMoves } from './historical-moves.js';
import { calculateWinner, getNextMarker, getStatus } from './game-helper.js';

export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
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
    
    squares[i] = getNextMarker(this.state.xIsNext);
    
    this.setState({
      history: history.concat([{
        squares: squares,
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
          squares={current.squares}
          onClick={(i) => this.handleClick(i)}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <HistoricalMoves 
          history={history}
          onClick={(move) => this.jumpToMove(move)}
        />
      </div>
    </div>
    );
  }
}
