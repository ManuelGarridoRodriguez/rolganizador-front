import React, { useState, useEffect } from "react";
import Navigator from "../../components/nav/nav";
import titleImage from "../../images/title-games.png"
import "./styles.scss";
import { Card, Form } from "react-bootstrap";
import axios from "axios";
import { getRandomImage } from "../utils";
import { useNavigate } from "react-router-dom";
import Select from 'react-select'

const NewGame = () => {
    const navigate = useNavigate();
    const [game, setGame] = useState({
        name: '',
        description: '',
        tags: []
    });
    const [tags, setTags] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/tags').then(({ data }) => {
            const optionsTags = data.map((tag) => {
                return { value: tag._id, label: tag.name }
            });
            setTags(optionsTags)
        });
    }, [])

    const handleOnChange = (e) => {
        const clonedGame = { ...game }
        const { id, value } = e.target;
        clonedGame[id] = value
        setGame(clonedGame)
    }

    const createGame = () => {
        const backGame = {
            tags: game.tags,
            description: game.description,
            creator: localStorage.getItem('user'),
            name: game.name,
            image: getRandomImage('game'),
        };

        axios.post('http://localhost:3001/game', backGame).then(() => { navigate('/'); });

    }

    const onSelectedOptionsChange = (tags) => {
        const clonedGame = { ...game };
        clonedGame.tags = tags.map((tag) => tag.value);
        setGame(clonedGame);
    }

    return (
        <div className="newGamePage">
            <Navigator title="Crear partida" titlePhoto={titleImage} action={{ actionColor: "#FF5C00", actionTitle: "Crear", actionClick: createGame }} />
            <div>
                <Form className="mainForm">
                    <Card>
                        <Card.Header>INFORMACIÓN</Card.Header>
                        <Card.Body>
                            <Form.Group controlId="gameTitle">
                                <Form.Label>
                                    Título *
                                </Form.Label>
                                <Form.Control id='name' type="text" placeholder="Nombre de la partida" onChange={handleOnChange} value={game.name} />
                            </Form.Group>
                            <Form.Group controlId="gameTags">
                                <Form.Label>
                                    Etiquetas
                                </Form.Label>
                                {!!tags?.length && (
                                    <Select options={tags} onChange={onSelectedOptionsChange} isMulti />
                                )}
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
                                <Form.Control id='description' type="text" as="textarea" placeholder="Explica de qué va tu partida" onChange={handleOnChange} value={game.description} />
                            </Form.Group>
                        </Card.Body>
                    </Card>
                </Form>
            </div>
        </div >
    );




};
export default NewGame;
