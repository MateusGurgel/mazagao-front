import PlayerStatus from "@/components/dashboard/playerStatus/playerStatus";
import Scoreboard from "@/components/dashboard/scoreboard";
import Spinner from "@/components/spinner";
import useAuth from "@/hooks/useAuth";
import mazagaoServices from "@/services/mazagaoServices";
import { useEffect, useState } from "react";

export default function Dashboard() {
  useAuth();

  const [player, setPlayer] = useState<User | null>();

  const [scoreboard, setScoreboard] = useState<User[]>();

  useEffect(() => {
    async function fetchData() {
      setScoreboard(await mazagaoServices.getScoreboard());
      setPlayer(await mazagaoServices.getMyProfile());
    }
    fetchData();
  }, []);

  if (!player) {
    return <Spinner />;
  }

  return (
    <div
      className={
        "flex flex-row gap-8 justify-center items-center min-h-min-content bg-background"
      }
    >
      <PlayerStatus player={player} />
      <Scoreboard players={scoreboard} />
    </div>
  );
}
