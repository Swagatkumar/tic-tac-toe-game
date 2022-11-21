import Square from "../Square";

import "./Board.css";

interface BoardProps{
  squares: ("X" | "O" | null)[],
  onClick: (i: number) => void
}

const Board = ({squares, onClick}: BoardProps) => {
  const renderSquare = (i: number) => (
    <Square value={squares[i]} onClick={() => onClick(i)} />
  );

  return (
    <div>
      {[0,1,2].map(row=><div className="board-row">{[0,1,2].map(col=>renderSquare(col+(3*row)))}</div>)}
    </div>
  );
};

export default Board;
