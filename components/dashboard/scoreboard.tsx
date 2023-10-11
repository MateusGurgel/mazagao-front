import ScoreboardRow from "./scoreboardRow";

interface ScoreboardProps {
  players?: User[];
}

export default function Scoreboard(props: ScoreboardProps) {
  return (
    <div className="h-96 pt-10 p-10 w-80 overflow-auto bg-painel text-center  text-lg font-light">
      <h1 className="mb-8">Placar</h1>
      {props.players?.map((player) => {
        return (
          <ScoreboardRow
            key={player.username}
            username={player.username}
            score={player.score}
          />
        );
      })}
    </div>
  );
}
