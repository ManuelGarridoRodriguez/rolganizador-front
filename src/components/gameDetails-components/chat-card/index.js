import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import "./styles.scss";

const ChatCard = (props) => {
  const { comments } = props;

  return (
    <Card className="chatCard">
      <Card.Body>
        <Card.Title>CHARLAS</Card.Title>
        <div className="commentsSection">
          {!!comments.length && comments.map((comment) => (
            <div>
              <p className="author">{comment.author}</p>
              <p className="message">{comment.message}</p>
              <p className="time">{`Publicado el: ${comment.time}`}</p>
              <hr />
            </div>
          ) )}
        </div>
        <div>
          <Form.Control type="text" />
          <Button>Enviar</Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ChatCard;
