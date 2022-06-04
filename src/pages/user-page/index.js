import { usersExample } from "../../mockup/partida"
import { BsBrush } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Navigator from "../../components/nav/nav";
import titleImage from "../../images/title-games.png"
import "./styles.scss";

const UserPage = () => {
    return (
        <div className="userPage">
            <Navigator title={usersExample.name} titlePhoto={titleImage} />
            <Card>
                <Card.Img variant="top" src={usersExample.img} />
                <Card.Body>
                    <Card.Title>{usersExample.name}</Card.Title>
                    <div className="userGames">
                        <Card.Text>(X) partidas creadas</Card.Text>
                        <Card.Text>(X) partidas unidas</Card.Text>
                    </div>
                    <hr />
                    <Card.Text>Cuenta creada el: XX/XX/XXXX </Card.Text>
                    <hr />
                </Card.Body>
                <Card.Footer>
                    <Link className="linkToProfile" to="/"><BsBrush /> Editar el perfil</Link>
                </Card.Footer>
            </Card>
        </div>
    );

};



export default UserPage;