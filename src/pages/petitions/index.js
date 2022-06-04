import Navigator from "../../components/nav/nav";
import titleImage from "../../images/title-games.png"
import PetitionSearchbar from "../../components/petitions-searchbar";
import { Card, Table } from "react-bootstrap";
import "./styles.scss"

const Petitions = () => {
    return (
        <div className="petitions">
            <Navigator title="Peticiones" titlePhoto={titleImage} />
            <PetitionSearchbar />
            <Card>
                <Card.Body>
                    <Table>
                        <thead>
                            <tr>
                                <th>Nombre de la partida</th>
                                <th>Descripción</th>
                                <th>Creada por</th>
                                <th>Fecha</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Cosas sqdasdasd</td>
                                <td>Cosas sqdasdasd</td>
                                <td>Cosas sqdasdasd</td>
                                <td>Cosas sqdasdasd</td>
                                <td>Cosas sqdasdasd</td>
                            </tr>
                            <tr>
                                <td>Cosas sqdasdasd</td>
                                <td>Cosas sqdasdasd</td>
                                <td>Cosas sqdasdasd</td>
                                <td>Cosas sqdasdasd</td>
                                <td>Cosas sqdasdasd</td>
                            </tr>
                            <tr>
                                <td>Cosas sqdasdasd</td>
                                <td>Cosas sqdasdasd</td>
                                <td>Cosas sqdasdasd</td>
                                <td>Cosas sqdasdasd</td>
                                <td>Cosas sqdasdasd</td>
                            </tr>
                        </tbody>                    </Table>
                </Card.Body>
            </Card>
        </div>
    );

};
export default Petitions;