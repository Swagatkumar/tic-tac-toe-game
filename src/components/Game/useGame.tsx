import { useState } from "react";
import { calculateMoveId, calculateWinner } from "../../helper";

interface move {
  id: string;
  squares: ("X" | "O" | null)[];
}

const useGame = () => {
  const [history, setHistory] = useState<move[]>([
    { id: "000000000", squares: Array(9).fill(null) },
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
    const message = idx ? `Go to move #${idx}` : "Go to the start";

    return (
      <li key={move.id}>
        <button onClick={() => jumpTo(idx)}>{message}</button>
      </li>
    );
  });

  const handleClick = (i: number) => {
    const tempSquares = current.squares.slice();
    if (winner || tempSquares[i]) {
      return;
    }
    tempSquares[i] = turn;
    setHistory((prevHistory) =>
      prevHistory
        .slice(0, currentStep + 1)
        .concat([{ id: calculateMoveId(tempSquares), squares: tempSquares }])
    );
    setTurn((prevTurn) => (prevTurn === "X" ? "O" : "X"));
    setCurrentStep((prevCurrentStep) => prevCurrentStep + 1);
  };

  return { moves, current, status, handleClick };
};

export default useGame;
