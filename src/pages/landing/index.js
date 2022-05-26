import "./styles.scss";
import gameArray from "../../mockup/partida";
import GameCard from "../../components/game-card/Game-card";
import Navigator from "../../components/nav/nav";

const LandingPage = () => {
  return (
    <>
      <Navigator title="Partidas en curso" titlePhoto="" />
      {gameArray.length && gameArray.map((game) => <GameCard game={game} />)}
    </>
  );
};

export default LandingPage;