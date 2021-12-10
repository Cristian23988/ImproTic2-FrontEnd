import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
const ModalEliminar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Eliminar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="bg-danger ">
          <Modal.Title className="text-white font-bold">Eliminar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>¿Estas seguro de eliminar este usuario?</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Eliminar
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalEliminar;
