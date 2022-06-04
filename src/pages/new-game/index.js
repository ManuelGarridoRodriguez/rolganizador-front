import React from "react";
import gameArray from "../../mockup/partida";
import GameCard from "../../components/game-card/Game-card";
import Navigator from "../../components/nav/nav";
import titleImage from "../../images/title-games.png"
import "./styles.scss";
import { Card, Form } from "react-bootstrap";

const NewGame = () => {
    return (
        <div className="newGamePage">
            <Navigator title="Crear partida" titlePhoto={titleImage} action={{ actionColor: "#FF5C00", actionTitle: "Crear", actionClick: "" }} />
            <div>
                <Form className="mainForm">
                    <Card>
                        <Card.Header>INFORMACIÓN</Card.Header>
                        <Card.Body>
                            <Form.Group controlId="gameTitle">
                                <Form.Label>
                                    Título *
                                </Form.Label>
                                <Form.Control type="text" placeholder="Nombre de la partida" />
                            </Form.Group>
                            <Form.Group controlId="gameTags">
                                <Form.Label>
                                    Etiquetas
                                </Form.Label>
                                <Form.Control type="input" placeholder="Juego, temática, trigger warinings..." />
                            </Form.Group>
                            <Form.Group controlId="gameParticipants">
                                <Form.Label>
                                    Número de participantes *
                                </Form.Label>
                                <Form.Control type="number" min="1" placeholder="Indique el número de participantes" />
                            </Form.Group>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>DETALLES</Card.Header>
                        <Card.Body>
                            <Form.Group className="formGroup" controlId="gameDetails">
                                <Form.Label>
                                    Descripción *
                                </Form.Label>
                                <Form.Control type="text" as="textarea" placeholder="Explica de qué va tu partida" />
                            </Form.Group>
                        </Card.Body>
                    </Card>
                </Form>
            </div>
        </div >
    );




};
export default NewGame;
