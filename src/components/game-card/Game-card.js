import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const GameCard = (props) => {
    const { game } = props;
    return (
        <Card>
            <Card.Img variant="top" src={game.image} />
            <Card.Body>
                <Card.Title>{game.title}</Card.Title>
                <Card.Text>{game.description}</Card.Text>
                <Link to="">Ver detalles</Link>
            </Card.Body>
        </Card>

    )
};

export default GameCard;