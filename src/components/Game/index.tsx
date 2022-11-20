import { useState } from "react";

import { calculateWinner } from "../../helper";

import Board from "../Board";

import "./Game.css";

interface move {
  squares: ("X" | "O" | null)[];
}

const Game = () => {
  const [history, setHistory] = useState<move[]>([
    { squares: Array(9).fill(null) },
  ]);
  const [turn, setTurn] = useState<"X" | "O">("X");

  const current = history[history.length - 1];
  const winner = calculateWinner(current.squares);
  const status = winner ? `Winner: ${winner}` : `Next Player: ${turn}`;

  const jumpTo = (move: number): void => {

  };
  const moves = history.map((_, move) => {
    const message = move ? `Go to move #${move}` : "Go to the start";

    return (
      <li>
        <button onClick={() => jumpTo(move)}>{message}</button>
      </li>
    );
  });

  const handleClick = (i: number) => {
    const tempSquares = current.squares.slice();
    if (winner || tempSquares[i]) {
      return;
    }
    tempSquares[i] = turn;
    setHistory((prevHistory) => prevHistory.concat([{ squares: tempSquares }]));
    setTurn((prevTurn) => (prevTurn === "X" ? "O" : "X"));
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={handleClick} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

export default Game;
