import React from "react";
import { Card } from "react-bootstrap";
import "./styles.scss";

const CreatorCard = (props) => {
  const { creator } = props;
  return (
    <Card className="creatorCard">
      <Card.Body>
        <Card.Title>CREADA POR</Card.Title>
        <div className="contentCard">
          <img src={creator.img} alt={`Imagen de ${creator.name}`} />
          <div className="cardText">
            <Card.Text className="creatorName">{creator.name}</Card.Text>
            <Card.Text>Miembro desde:</Card.Text>
            <Card.Text>{creator.date}</Card.Text>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}

export default CreatorCard;
