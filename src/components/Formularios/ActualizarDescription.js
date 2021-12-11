import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import Modal from "react-bootstrap/Modal";
const ActualizarDescription = ({ setShow }) => {
  const handleClose = () => setShow(false);
  return (
    <>
      <Form.Group>
        <Form.Label>Descripcion</Form.Label>
        <Form.Control as="textarea" placeholder="Descripcion" />
      </Form.Group>
      <Modal.Footer>
        <Button variant="danger">Eliminar</Button>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
      </Modal.Footer>
    </>
  );
};

export default ActualizarDescription;
