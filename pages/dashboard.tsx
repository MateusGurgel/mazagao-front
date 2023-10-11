import Scoreboard from "@/components/dashboard/scoreboard";

export default function Dashboard() {
  const players = [
    { username: "1234567891234567", score: 999999999999 },
    { username: "waskjobe", score: 999999999999 },
    { username: "waskjobe", score: 200 },
  ];

  return (
    <div
      className={
        "flex flex-row gap-8 justify-center items-center min-h-min-content bg-background text-white"
      }
    >
      <div className="h-96 w-2/4 bg-painel flex flex-row justify-center pt-10">
        <h1 className="font-medium text-3xl">Waskjobe</h1>
        <h1>200</h1>
      </div>

      <Scoreboard players={players} />
    </div>
  );
}
