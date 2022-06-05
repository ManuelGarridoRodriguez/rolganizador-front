import { Modal, Button } from "react-bootstrap";
import "./styles.scss"

function ExitGameModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    ¿Deseas abandonar la partida?
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Si dejas la partida deberás pedir permiso para entrar de nuevo y dejarás de tener acceso
                    al chat y la información de la misma. ¿Deseas abandonarla?
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={props.onHide}>¡Sí!</Button>
                <Button onClick={props.onHide}>No</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ExitGameModal;