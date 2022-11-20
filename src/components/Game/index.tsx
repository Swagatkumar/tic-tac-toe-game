import Board from "../Board";

import "./Game.css";
import useGame from "./useGame";

const Game = () => {
  const {current, handleClick, moves, status} = useGame();

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
