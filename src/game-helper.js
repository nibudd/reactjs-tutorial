export function calculateWinner(squares) {
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
      return squares[a];
    }
  }
  return null;
}

export function getNextMarker(xIsNext) {
  return xIsNext ? "X" : "O";
}

export function getStatus(squares, xIsNext) {
  const winner = calculateWinner(squares);

  return (
    winner ? 
    "Winner: " + winner : 
    'Next player: ' + getNextMarker(xIsNext)
  );
  
  
}