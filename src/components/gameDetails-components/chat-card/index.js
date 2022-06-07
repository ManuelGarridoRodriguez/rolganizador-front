import React, {useState} from "react";
import { Card, Form, Button } from "react-bootstrap";
import "./styles.scss";

const ChatCard = (props) => {
  const [chat, setChat] = useState('');
  const { comments, handleChat } = props;

  const onChangeChat = (e) => {
    const { value } = e.target;
    setChat(value);
  }

  return (
    <Card className="chatCard">
      <Card.Header>CHARLAS</Card.Header>
      <Card.Body>
        <div className="commentsSection">
          {!!comments.length && comments.map((comment) => (
            <div>
              <p className="author">{comment.creator}</p>
              <p className="message">{comment.message}</p>
              <p className="time">{`Publicado el: ${comment.date}`}</p>
              <hr />
            </div>
          ))}
        </div>
        <Form.Control type="text" onChange={onChangeChat} value={chat} />
        <div className="divSendButton">
          <Button type="button" onClick={() => handleChat(chat)} >Enviar</Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ChatCard;
