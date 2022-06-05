import { Modal, Button } from "react-bootstrap";
import "./styles.scss"

function DeleteAccountModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    ¿Deseas borrar tu cuenta?
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Si borras tu cuenta todas las partidas que estabas a punto de jugar
                    desaparecerán como lágrimas en la lluvia.
                    <br /><br />
                    Es algo muy serio, perderás tu apodo y toda tu información será eliminada de forma definitiva,
                    para continuar en el RolGanizador deberás pasar por el tedioso proceso de registro de nuevo y...
                    ¡Puede que otra persona se haya puesto tu apodo y no puedas recuperarlo!
                    <br /><br />
                    Si aun así deseas abandonar tu cuenta, pulsa el botón rojo que dice "Eliminar". Si no es así, clica en el botón gris que dice "Mantener"
                    o en cualquier otro lado de la pantalla que no sea el botón rojo que dice "Eliminar".
                    <br /><br />
                    Incluso puedes apagar tu PC si es demasiado trabajo, no te preocupes, lo entenderíamos. Nadie lo sabría y mantendrías tu maravillosa cuenta.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={props.onHide}>ELIMINAR</Button>
                <Button onClick={props.onHide}>Mantener</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DeleteAccountModal;