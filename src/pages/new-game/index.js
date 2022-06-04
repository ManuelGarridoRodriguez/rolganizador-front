import React from "react";
import gameArray from "../../mockup/partida";
import GameCard from "../../components/game-card/Game-card";
import Navigator from "../../components/nav/nav";
import titleImage from "../../images/title-games.png"
import "./styles.scss";

const NewGame = () => {
    return (
        <div className="newGamePage">
            <Navigator title="Crear partida" titlePhoto={titleImage} />

        </div>
    );




};
export default NewGame;
