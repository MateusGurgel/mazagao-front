import Panel from "./panel";

interface PlayerStatusProps {
  player: User;
}

export default function PlayerStatus({ player }: PlayerStatusProps) {
  return (
    <div className="h-96 w-2/4 bg-menu text-white flex flex-col items-center gap-6 pt-10">
      <h1 className="font-medium text-3xl">{player.username}</h1>

      <div className="flex flex-col float-right m-0 p-0">
        <h1 className="font-bold tracking-tighter text-9xl">
          {player.score && player.score > 999999 ? "99999+" : player.score}
        </h1>
        <h6 className="leading-0 text-right font-light">SCORE</h6>
      </div>

      <div className="flex flex-row gap-8">
        <Panel title="Kills">{player.kills}</Panel>
        <Panel title="Rank">{player.rank}</Panel>
        <Panel title="Deaths">{player.deaths}</Panel>
      </div>
    </div>
  );
}
