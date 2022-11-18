import { useState } from "react";
import "./Square.css";

interface SquareProps {
  value: number;
}

const Square = ({ value }: SquareProps) => {
  const [message, setMessage] = useState<string|null>(null);

  return (
    <button className="square" onClick={() => setMessage('X')}>
      {message}
    </button>
  );
};

export default Square;
