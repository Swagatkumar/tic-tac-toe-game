import { useState } from "react";

import { calculateWinner } from "../../helper";

import Square from "../Square";

import "./Board.css";

const Board = () => {
  const [squares, setSquares] = useState<("X" | "O" | null)[]>(
    Array(9).fill(null)
  );
  const [turn, setTurn] = useState<'X' | 'O'>("X")

  const winner = calculateWinner(squares);
  const status = winner?`Winner: ${winner}`:`Next Player: ${turn}`;

  const handleClick = (i: number) => {
    const tempSquares = squares.slice();
    if(winner||tempSquares[i]){
      return;
    }
    tempSquares[i] = turn;
    setSquares(tempSquares);
    setTurn(prevTurn => prevTurn==="X"?"O":"X");
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
