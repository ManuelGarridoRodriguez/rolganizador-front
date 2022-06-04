import React from "react";
import { Card, Badge } from "react-bootstrap";
import "./styles.scss";

const DetailsCard = (props) => {
  const { description, tags } = props;
  return (
    <Card className="descriptionCard">
      <Card.Header>DETALLES</Card.Header>
      <Card.Body>
        <Card.Text>{description}</Card.Text>
        <hr />
        <div className="tagContainer">
          {!!tags.length && tags.map((t) => <Badge pill bg="danger">{t}</Badge>)}
        </div>
      </Card.Body>
    </Card>
  )
}

export default DetailsCard;
