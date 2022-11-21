import { useState } from "react";
import { calculateMoveId, calculateWinner } from "../../helper";

interface move {
  id: string;
  squares: ("X" | "O" | null)[];
  col: number | null;
  row: number | null;
}

const useGame = () => {
  const [history, setHistory] = useState<move[]>([
    { id: "000000000", squares: Array(9).fill(null), col: null, row: null },
  ]);
  const [turn, setTurn] = useState<"X" | "O">("X");
  const [currentStep, setCurrentStep] = useState(0);

  const current = history[currentStep];
  const winner = calculateWinner(current.squares);
  const status = winner ? `Winner: ${winner}` : `Next Player: ${turn}`;

  const jumpTo = (step: number): void => {
    setCurrentStep(step);
    setTurn(step % 2 === 0 ? "X" : "O");
  };
  const moves = history.map((move, idx) => {
    const message = idx ? `Go to move #${idx} selected (${move.col}, ${move.row})` : "Go to the start";

    return (
      <li key={move.id}>
        <button onClick={() => jumpTo(idx)}>{idx===currentStep?<b>{message}</b>:message}</button>
      </li>
    );
  });

  const handleClick = (i: number) => {
    const tempSquares = current.squares.slice();
    const col = i%3;
    const row = parseInt(i/3+"");
    if (winner || tempSquares[i]) {
      return;
    }
    tempSquares[i] = turn;
    setHistory((prevHistory) =>
      prevHistory
        .slice(0, currentStep + 1)
        .concat([{ id: calculateMoveId(tempSquares), squares: tempSquares, col, row }])
    );
    setTurn((prevTurn) => (prevTurn === "X" ? "O" : "X"));
    setCurrentStep((prevCurrentStep) => prevCurrentStep + 1);
  };

  return { moves, current, status, handleClick };
};

export default useGame;
