import React from "react";
import { Card } from "react-bootstrap";
import "./styles.scss";

const SVG = ({component: Component, className}) => <Component className={className} />

const CreatorCard = (props) => {
  const { creator } = props;
  return (
    <Card className="creatorCard">
      <Card.Header>CREADA POR</Card.Header>
      <Card.Body>
        <img src={creator.image} alt={`Imagen de ${creator.name}`} />

        <div className="creatorInformation">
          <Card.Title>{creator.name}</Card.Title>
          <Card.Text>Se unió el:</Card.Text>
          <Card.Text>{creator.date}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  )
}

export default CreatorCard;
