import Player from "./Components/Player";
import GameBoard from "./Components/GameBoard";
import Log from "./Components/Log";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combination.js";
import GameOver from "./Components/GameOver.jsx";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
const getActivePlayer = (gameTurns) => {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player == "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
};
function App() {
  const [gameTurns, setFGameTurns] = useState([]);
  const [players, setPlayers] = useState({
    X: 'Player 1',
    O: 'Player 2'
  });
  let winner = '';
  // const [activePlayer,setActivePlayer] = useState('X');
  const activePlayer = getActivePlayer(gameTurns);
  let gameBoard = [...initialGameBoard.map(game=>[...game])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
  for (const combination of WINNING_COMBINATIONS) {
    const firstSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSymbol = gameBoard[combination[2].row][combination[2].column]
    if (firstSymbol && firstSymbol === secondSymbol && firstSymbol === thirdSymbol) {
      winner= players[firstSymbol];
    }
  }
  const hasDraw = gameTurns.length ===9 && !winner

  const handleSelectSquare = (rowIndex, colIndex) => {
    // setActivePlayer((currentActivePlayer)=>currentActivePlayer == 'X' ? 'O' : 'X')
    setFGameTurns((prevState) => {
      let currentPlayer = getActivePlayer(prevState);
      const updatedGameTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevState,
      ];

      return updatedGameTurns;
    });
  };

  const handleRematch = () =>{
    console.log('handleRematch');
    setFGameTurns([])
  }
  const handlePlayerNameChange = (symbol,newName) =>{
    setPlayers(prevState => {
      return {
        ...prevState,
        [symbol]: newName
      }
    })
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === "X"} onNameChange={handlePlayerNameChange} />
          <Player name="Player 2" symbol="O" isActive={activePlayer === "O"} onNameChange={handlePlayerNameChange}/>
        </ol>
        {(winner || hasDraw) && <GameOver handleRematch={handleRematch} winner={winner}/>}
        <GameBoard onSelectSquare={handleSelectSquare} gameBoard={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
