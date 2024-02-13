import { useState } from 'react';

export default function Board() {
  const [sqaure, setSquares] = useState(Array(9).fill(null));
  return <>
    <div className="board-row">
      <Square value={sqaure[0]}/>
      <Square value={sqaure[1]}/>
      <Square value={sqaure[2]}/>
    </div>
    <div className="board-row">
      <Square value={sqaure[3]}/>
      <Square value={sqaure[4]}/>
      <Square value={sqaure[5]}/>
    </div>
    <div className="board-row">
      <Square value={sqaure[6]}/>
      <Square value={sqaure[7]}/>
      <Square value={sqaure[8]}/>
    </div>
  </>
}

function Square({value, onSqaureCLick}) {

  return <button className="square" onClick={onSqaureCLick}>{value}</button>
}