import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
const GameBoard = () => {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameBoard((prevGameBoard) => {
      const updatedArray = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      console.log(updatedArray);
      updatedArray[rowIndex][colIndex] = "X";
      return updatedArray;
    });
  };
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={()=>handleSelectSquare(rowIndex,colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};
export default GameBoard;
