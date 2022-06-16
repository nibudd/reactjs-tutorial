export function findWinningSquares(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return lines[i];
    }
  }
  return null;
}

export function calculateWinner(squares) {
  const winningSquares = findWinningSquares(squares);
  
  if (winningSquares) {
    const aSquare = winningSquares[0];
    return squares[aSquare];
  }
  
  return null;
}

export function getPlayer(xIsNext) {
  return xIsNext ? "X" : "O";
}

export function getStatus(squares, xIsNext) {
  const winner = calculateWinner(squares);

  return (
    winner ? 
    `Winner: ${winner}`:
    `Next Player: ${getPlayer(xIsNext)}` 
  ); 
}
