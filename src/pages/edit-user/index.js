import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Card, Form, Button, Alert } from "react-bootstrap";
import Navigator from "../../components/nav/nav";
import titleImage from "../../images/title-games.png";
import DeleteAccountModal from "../../components/delete-account-modal";
import { getRandomImage } from "../utils";

import "./styles.scss"

const EditUserPage = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [currentUser, setCurrentUser] = useState();
    useEffect(() => {
        const currentUser = localStorage.getItem('user');
        axios
            .get(`http://localhost:3001/users/${currentUser}`)
            .then(({ data }) => setCurrentUser(data))
    }, []);

    const [error, setError] = useState();

    const handleImageChange = () => {
        const newImage = getRandomImage('avatar');
        const newCurrentUser = { ...currentUser };
        newCurrentUser.image = newImage;
        setCurrentUser(newCurrentUser);
    }

    const handleOnChange = (e) => {
        const { id, value } = e.target;
        const clonedUser = { ...currentUser };
        clonedUser[id] = value;
        setCurrentUser(clonedUser);
    }

    const handleUpdater = () => {
        const userId = localStorage.getItem('user');
        setError('');
        const backUser = {
            nick: currentUser.nick,
            password: currentUser.password,
            image: currentUser.image,
        };

        axios
            .patch(`http://localhost:3001/users/${userId}`, backUser)

            .catch(() => setError('El apodo ya está siendo usado'));
    }

    return (
        <div className="editUserPage">
            {error && <Alert variant="danger" >{error}</Alert>}
            {currentUser && <DeleteAccountModal show={modalShow} onHide={() => setModalShow(false)} userId={currentUser.id} />}
            {currentUser && <Navigator title='Editar cuenta' titlePhoto={titleImage} />}
            {currentUser && <div className="mainUserDiv">
                <Form>
                    <Card className="updateProfileCard">
                        <Card.Header>PERFIL</Card.Header>
                        <Card.Body>
                            <Form.Group controlId="nick">
                                <Form.Label>Nuevo apodo</Form.Label>
                                <Form.Control type="text" placeholder="Elige un nuevo apodo" onChange={handleOnChange} value={currentUser.nick} />
                            </Form.Group>
                            <Form.Group controlId="password">
                                <Form.Label>Cambiar contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Nueva contraseña" onChange={handleOnChange} />
                            </Form.Group>
                        </Card.Body>
                        <Card.Footer>
                            <Button className="updateButtons" type="button" onClick={handleUpdater}>Actualizar</Button>
                        </Card.Footer>
                    </Card>
                </Form>
                <div className="lateralUserCard">
                    <Card className="imageCard">
                        <Card.Header>IMAGEN</Card.Header>
                        <Card.Body>
                            {currentUser && <img src={currentUser.image} alt={"Imagen de usuario"} />}
                            <Button className="updateButtons" onClick={handleImageChange}>Cambiar imagen</Button>
                        </Card.Body>
                    </Card>
                    <Card className="deleteAccount">
                        <Card.Header>CANCELAR LA CUENTA</Card.Header>
                        <Card.Body>
                            <Card.Text>¡EH! Cuidado, una vez canceles la cuenta no podrás recuperarla de ninguna forma. Todas esas partidas de rol que podrías jugar se preguntarán dónde estás.</Card.Text>
                            <Card.Footer>
                                <Button variant="danger" onClick={() => setModalShow(true)}>Cancelar la cuenta</Button>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </div>
            </div>}
        </div>
    );

};



export default EditUserPage;