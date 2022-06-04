import { usersExample } from "../../mockup/partida"
import { Link } from "react-router-dom";
import { Card, Form, Button } from "react-bootstrap";
import Navigator from "../../components/nav/nav";
import titleImage from "../../images/title-games.png";
import "./styles.scss"

const EditUserPage = () => {
    return (
        <div className="editUserPage">
            <Navigator title={usersExample.name} titlePhoto={titleImage} />
            <div className="mainUserDiv">
                <Form>
                    <Card className="updateProfileCard">
                        <Card.Header>PERFIL</Card.Header>
                        <Card.Body>
                            <Form.Group controlId="newNick">
                                <Form.Label>Nuevo apodo</Form.Label>
                                <Form.Control type="text" placeholder="Elige un nuevo apodo" />
                            </Form.Group>
                            <Form.Group controlId="oldPassword">
                                <Form.Label>Cambiar contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Antigua contraseña" />
                            </Form.Group>
                            <Form.Group controlId="newPassword">
                                <Form.Control type="password" placeholder="Nueva contraseña" />
                            </Form.Group>
                            <Form.Group controlId="newPlusPassword">
                                <Form.Control type="password" placeholder="Repite la nueva contraseña" />
                            </Form.Group>
                        </Card.Body>
                        <Card.Footer>
                            <Link className="updateProfile" to="/">Actualizar</Link>
                        </Card.Footer>
                    </Card>
                </Form>
                <div className="lateralUserCard">
                    <Card className="imageCard">
                        <Card.Header>IMAGEN</Card.Header>
                        <Card.Body>
                            <img src={usersExample.img} />
                            <Button className="changeUserImage">Cambiar imagen</Button>
                        </Card.Body>
                    </Card>
                    <Card className="deleteAccount">
                        <Card.Header>CANCELAR LA CUENTA</Card.Header>
                        <Card.Body>
                            <Card.Text>¡EH! Cuidado, una vez canceles la cuenta no podrás recuperarla de ninguna forma. Todas esas partidas de rol que podrías jugar se preguntarán dónde estás.</Card.Text>
                            <Card.Footer>
                                <Button variant="danger">Cancelar la cuenta</Button>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );

};



export default EditUserPage;