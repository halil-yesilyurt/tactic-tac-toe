export default function GameOver({ winner, onRestart }) {
  return (
    <div id='game-over'>
      <h2>Game over!</h2>
      <p>{winner ? `${winner} won!` : "It's a draw!"}</p>
      <p>
        <button onClick={onRestart}>Rematch!</button>
      </p>
    </div>
  );
}
