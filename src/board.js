import React from 'react';

import {Square} from './square.js';
  
export class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square 
        value={this.props.squares[i]} 
        onClick={() => this.props.onClick(i)}
      />
    );
  }
  
  render() {
    const boardRows = [];
    for (let i = 0; i < 3; i++) {
      const boardRow = [];
      for (let j = 0; j < 3; j++) {
        const squareNumber = i * 3 + j;
        boardRow.push(this.renderSquare(squareNumber));
      }
      boardRows.push(<div className="board-row">{boardRow}</div>)
    }
    
    return (
      <div>{boardRows}</div>
    );
  }
}
