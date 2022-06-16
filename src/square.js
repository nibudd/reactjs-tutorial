export function Square(props) {
  // const isWinningSquare = props.isWinningSquare;
  const classNames = "square" + (props.isWinningSquare ? " square-winning" : "");
  return (
    <button
      className={classNames}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  )
}
