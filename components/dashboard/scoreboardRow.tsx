export default function ScoreboardRow(player: User) {
  return (
    <div className="flex flex-row justify-between">
      <h1>{player.username}</h1>
      {player.score > 99999 ? <h1>99999+</h1> : <h1>{player.score}</h1>}
    </div>
  );
}
