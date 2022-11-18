import './Square.css';

interface SquareProps{
  value: number,
}

const Square = ({value}:SquareProps) => {
  return (
    <button className='square'>
      {value}
    </button>
  );
}

export default Square;