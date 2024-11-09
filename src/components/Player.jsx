import { useState } from 'react';

export default function Player({ initialName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [editing, setEditing] = useState(false);

  function handleClick() {
    setEditing((editing) => !editing);

    if (editing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editPlayerName = <span className='player-name'>{playerName}</span>;
  if (editing) {
    editPlayerName = <input type='text' defaultValue={playerName} onChange={handleChange} required />;
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className='player'>
        {editPlayerName}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleClick}>{editing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
