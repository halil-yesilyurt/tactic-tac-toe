import { useState } from 'react';
import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2',
};

const INITIAL_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function getActivePlayer(gameTurns) {
  return gameTurns.length % 2 === 0 ? 'X' : 'O';
}

function generateGameBoard(gameTurns) {
  const gameBoard = INITIAL_BOARD.map((row) => [...row]);

  for (const { square, player } of gameTurns) {
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  return gameBoard;
}

function determineWinner(gameBoard, players) {
  for (const combination of WIN_CONDITIONS) {
    const [first, second, third] = combination;

    const firstSymbol = gameBoard[first.row][first.column];
    const secondSymbol = gameBoard[second.row][second.column];
    const thirdSymbol = gameBoard[third.row][third.column];

    if (firstSymbol && firstSymbol === secondSymbol && firstSymbol === thirdSymbol) {
      return players[firstSymbol];
    }
  }

  return null;
}

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = getActivePlayer(gameTurns);
  const gameBoard = generateGameBoard(gameTurns);
  const winner = determineWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((previousTurns) => {
      const currentPlayer = getActivePlayer(previousTurns);
      const newTurn = {
        square: { row: rowIndex, col: colIndex },
        player: currentPlayer,
      };

      return [newTurn, ...previousTurns];
    });
  }

  function handlePlayersName(symbol, newName) {
    setPlayers((prevPlayers) => {
      return { ...prevPlayers, [symbol]: newName };
    });
  }

  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>
          <Player initialName={PLAYERS.X} symbol='X' isActive={activePlayer === 'X'} onChangeName={handlePlayersName} />
          <Player initialName={PLAYERS.O} symbol='O' isActive={activePlayer === 'O'} onChangeName={handlePlayersName} />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={restartGame} />}
        <GameBoard board={gameBoard} onSelectSquare={handleSelectSquare} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
