import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const ActualizarStatus = ({ setShow }) => {
  const handleClose = () => setShow(false);
  return (
    <>
      <Form.Group>
        <Form.Label>Estado</Form.Label>
        <Form.Select>
          <option value="">--Seleccione una opcion--</option>
          <option value="active">Activo</option>
          <option value="pending">Inactivo</option>
        </Form.Select>
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

export default ActualizarStatus;
