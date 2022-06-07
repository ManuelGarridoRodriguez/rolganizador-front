import { Modal, Button } from "react-bootstrap";
import "./styles.scss"

function ExitGameModal(props) {
    const { modalInfo } = props;
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {modalInfo.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    {modalInfo.text}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={modalInfo.action}>¡Sí!</Button>
                <Button onClick={props.onHide}>No</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ExitGameModal;