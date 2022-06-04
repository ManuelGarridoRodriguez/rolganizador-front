import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './game-card.scss';

const GameCard = (props) => {
  const { game } = props; 
  return (
    <Card className="cardContainer">
      <div className="imageCardContainer">
          <Card.Img variant="top" src={game.image} />
      </div>
      <Card.Body>
        <Card.Title>{game.title}</Card.Title>
        <Card.Text>{game.description.length > 150 ? `${game.description.substring(0,150)}...` : game.description }</Card.Text>
        <Link to={`/game/${game.id}`}>Ver detalles</Link>
      </Card.Body>
    </Card>
  )
};

export default GameCard;