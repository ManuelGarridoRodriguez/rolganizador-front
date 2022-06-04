import React from "react";
import { Card } from "react-bootstrap";
import "./styles.scss";

const PlayersCard = (props) => {
  const { players } = props;
  return (
    <Card className="playersCard">
      <Card.Body>
        <Card.Title>{`${players.length} Participantes`}</Card.Title>
        <div className="playersContainer">
          {!!players.length && players.map((player) => (
            <div className="player">
              <img src={player.img} alt={player.name} />
              <p>{player.name.length > 9 ? `${player.name.substring(0, 9)}...` : player.name}</p>
            </div>
          ))}
        </div>
      </Card.Body>
    </Card>
  )
};

export default PlayersCard;
