import PlayerStatus from "@/components/dashboard/playerStatus/playerStatus";
import Scoreboard from "@/components/dashboard/scoreboard";

export default function Dashboard() {
  const player = {
    username: "waskjobe",
    score: 9999999,
    kills: 20,
    deaths: 20,
    rank: "Global",
  };

  const players = [
    { username: "1234567891234567", score: 999999999999 },
    { username: "waskjobe", score: 999999999999 },
    { username: "C4lima", score: 200 },
  ];

  return (
    <div
      className={
        "flex flex-row gap-8 justify-center items-center min-h-min-content bg-background"
      }
    >
      <PlayerStatus player={player} />
      <Scoreboard players={players} />
    </div>
  );
}
