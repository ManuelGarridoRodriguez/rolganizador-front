import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './game-card.scss';

const GameCard = (props) => {
  const { game } = props;
  return (
    <Card>
      <div className="card-img-cointainer">
        <Card.Img variant="top" src={game.image} />
      </div>
      <Card.Body>
        <div>
          <Card.Title>{game.name}</Card.Title>
          <Card.Text>{game.description.length > 150 ? `${game.description.substring(0, 150)}...` : game.description}</Card.Text>
        </div>
        <div>
          <Link className="linkToGame" to={`/game/${game.id}`}>Ver detalles</Link>
        </div>
      </Card.Body>
    </Card>
  )
};

export default GameCard;