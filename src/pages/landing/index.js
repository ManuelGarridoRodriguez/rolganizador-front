import React from "react";
import { gameArray } from "../../mockup/partida";
import GameCard from "../../components/game-card/Game-card";
import Navigator from "../../components/nav/nav";
import titleImage from "../../images/title-games.png"
import Searchbar from "../../components/searchbar";
import { Link } from "react-router-dom";
import { BsPlusSquare } from "react-icons/bs";
import { Card } from "react-bootstrap";

import "./styles.scss";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <Navigator title="Partidas en curso" titlePhoto={titleImage} />
      <Searchbar />
      <div className="cardGrid">
        <Card className="addGameCard">
          <Link to="/new-game" className="addGameLink" >
            <BsPlusSquare className="addGame" />
          </Link>
        </Card>
        {gameArray.length && gameArray.map((game) => <GameCard game={game} />)}
      </div>
    </div >
  );
};

export default LandingPage;