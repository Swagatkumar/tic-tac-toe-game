import { useState } from "react";
import Square from "../Square";
import "./Board.css";

const Board = () => {
  const [squares, setSquares] = useState<("X" | "O" | null)[]>(
    Array(9).fill(null)
  );
  

  const status = "Next Player: X";

  const handleClick = (i: number) => {
    const tempSquares = squares.slice();
    tempSquares[i] = "X";
    setSquares(tempSquares);
  };
  const renderSquare = (i: number) => (
    <Square value={squares[i]} onClick={() => handleClick(i)} />
  );

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
