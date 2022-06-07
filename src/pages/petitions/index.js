import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigator from "../../components/nav/nav";
import titleImage from "../../images/title-games.png"
import { Button, Card, Table } from "react-bootstrap";
import "./styles.scss"

const Petitions = () => {
    const [petitions, setPetitions] = useState([]);

    const acceptUser = (petition) => {
        const clonedPetition = {...petition};
        const clonedPetitionsArray = [...petitions];
        clonedPetition.status = 'accepted';
        axios
        .patch(`http://localhost:3001/petitions/${petition._id}`, clonedPetition)
        .then(({data}) => {
            const index = petitions.findIndex((petition) => petition._id === data._id);
            clonedPetitionsArray[index] = data;
            setPetitions(clonedPetitionsArray);

            const game = {...data.game};
            game.participants.push(data.sender._id);
            axios.patch(`http://localhost:3001/game/${petition.game._id}`, game);
        })
    }

    const rejectUser = (petition) => {
        const clonedPetition = {...petition};
        const clonedPetitionsArray = [...petitions];
        clonedPetition.status = 'rejected';
        axios
        .patch(`http://localhost:3001/petitions/${petition._id}`, clonedPetition)
        .then(({data}) => {
            const index = petitions.findIndex((petition) => petition._id === data._id);
            clonedPetitionsArray[index] = data;
            setPetitions(clonedPetitionsArray);
        })
    }


    const renderActions = (petition) => {
        const actualUser = localStorage.getItem('user');
        if ((petition.receptor?._id === actualUser && petition.status === 'pending') || petition.status !== 'user deleted') {
            return (
                <div>
                    <Button variant="danger" type="button" onClick={() => rejectUser(petition)} >Rechazar</Button>{' '}
                    <Button variant='success' type="button" onClick={() => acceptUser(petition)} >Aceptar</Button>
                </div>
            )
        }

        return 'Ninguna acción disponible';
    }

    useEffect(() => {
        const userId = localStorage.getItem('user');
        axios
            .get(`http://localhost:3001/petitions/user/${userId}`)
            .then(({ data }) => setPetitions(data))
    }, [])


    return (
        <div className="petitions">
            <Navigator title="Peticiones" titlePhoto={titleImage} />
            <Card>
                <Card.Body>
                    <Table>
                        <thead>
                            <tr>
                                <th>Nombre de la partida</th>
                                <th>Descripción</th>
                                <th>Emisor</th>
                                <th>Receptor</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!!petitions.length && petitions.map((petition) => (
                                <tr>
                                    <td>{petition.game?.name ?? 'Partida eliminada'}</td>
                                    <td>{petition.status.toUpperCase()}</td>
                                    <td>{petition.sender?.nick ?? 'Usuario eliminado'}</td>
                                    <td>{petition.receptor?.nick ?? 'Usuario eliminado'}</td>
                                    <td>{renderActions(petition)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </div>
    );

};
export default Petitions;