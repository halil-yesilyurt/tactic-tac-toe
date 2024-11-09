import { useState } from 'react';
import Player from './components/Player.jsx';

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2',
};

function App() {
  const [players, setPlayers] = useState(PLAYERS);

  function handlePlayersName(symbol, newName) {
    setPlayers((prevPlayers) => {
      return { ...prevPlayers, [symbol]: newName };
    });
  }

  return (
    <main>
      <div id='game-container'>
        <ol>
          <Player initialName={PLAYERS.X} symbol='X' isActive={activePlayer === 'X'} onChangeName={handlePlayersName} />
          <Player initialName={PLAYERS.O} symbol='O' isActive={activePlayer === 'O'} onChangeName={handlePlayersName} />
        </ol>
      </div>
    </main>
  );
}

export default App;
