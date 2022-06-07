import React, { useState, useEffect } from "react";
import axios from "axios";
import GameCard from "../../components/game-card/Game-card";
import Navigator from "../../components/nav/nav";
import titleImage from "../../images/title-games.png"
import Searchbar from "../../components/searchbar";
import { Link } from "react-router-dom";
import { BsPlusSquare } from "react-icons/bs";
import { Card } from "react-bootstrap";

import "./styles.scss";

const LandingPage = () => {
  const [games, setGames] = useState([]);
  // TODO: en back faltaría agregar la ordenación y buscar partidas por nombre de user, etc. Si no da tiempo, cambiar el buscador para que sea solo de nombre de partida.
  // Lo mismo para las peticiones
  useEffect(() => {
    axios
      .get('http://localhost:3001/game')
      .then((response) => {
        const { data } = response;
        setGames(data);
      });
  }, [])

  return (
    <div className="landingPage">
      <Navigator title="Partidas en curso" titlePhoto={titleImage} />
      <Searchbar endpoint={'game'} setElements={setGames} />
      <div className="cardGrid">
        <Card className="addGameCard">
          <Link to="/new-game" className="addGameLink" >
            <BsPlusSquare className="addGame" />
          </Link>
        </Card>
        {games.length && games.map((game) => <GameCard game={game} />)}
      </div>
    </div >
  );
};

export default LandingPage;