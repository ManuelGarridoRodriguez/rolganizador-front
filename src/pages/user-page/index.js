import { useState, useEffect } from "react";
import axios from "axios";
import { BsBrush } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Navigator from "../../components/nav/nav";
import titleImage from "../../images/title-games.png"
import "./styles.scss";

const UserPage = () => {
    const [user, setUser] = useState();
    useEffect(() => {
        const currentUser = localStorage.getItem('user');
        axios
            .get(`http://localhost:3001/users/${currentUser}`)
            .then(({ data }) => setUser(data))
    }, []);

    const editUserDate = (date) => {
        date = date.split("T")[0];
        const reverseDate = date.split('-').reverse().join('/');
        return reverseDate;
    }

    return (
        <div className="userPage">
            {user && <Navigator title={user.name} titlePhoto={titleImage} />}
            <Card>
                {user && <Card.Img variant="top" src={user.image} />}
                <Card.Body>
                    {user && <Card.Title>{user.nick}</Card.Title>}
                    <hr />
                    {user && <Card.Text>Cuenta creada el: {editUserDate(user.createdDate)} </Card.Text>}
                    <hr />
                </Card.Body>
                <Card.Footer>
                    <Link className="linkToProfile" to="/edit-user"><BsBrush /> Editar el perfil</Link>
                </Card.Footer>
            </Card>
        </div>
    );

};



export default UserPage;