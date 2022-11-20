import "./Square.css";

interface SquareProps {
  value: "X" | "O" | null;
  onClick: () => void
}

const Square = ({ value, onClick }: SquareProps) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
