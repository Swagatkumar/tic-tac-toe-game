const calculateMoveId = (squares: ("X" | "O" | null)[]): string => {
    let id = "";
    squares.forEach(value=>{id += value?value:"0"});
    return id;
}

export default calculateMoveId;