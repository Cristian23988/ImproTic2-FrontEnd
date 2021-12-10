import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import IconActualizar from "../../images/Icons/IconActulizar";
const ModalActualizar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="warning text-white" onClick={handleShow}>
        <IconActualizar /> Editar
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Actualizar Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="m-2">
            <Form.Label className="fw-bold">Email</Form.Label>
            <Form.Control type="email" name="email" />
          </Form.Group>
          <Form.Group className="m-2">
            <Form.Label className="fw-bold">Identificacion</Form.Label>
            <Form.Control type="email" name="email" />
          </Form.Group>
          <Form.Group className="m-2">
            <Form.Label className="fw-bold">Nombre</Form.Label>
            <Form.Control type="email" name="email" />
          </Form.Group>
          <Form.Group className="m-2">
            <Form.Label className="fw-bold">Apellido</Form.Label>
            <Form.Control type="email" name="email" />
          </Form.Group>
          <Form.Group className="m-2">
            <Form.Label className="fw-bold">Nombre completo</Form.Label>
            <Form.Control type="email" name="email" />
          </Form.Group>{" "}
          <Form.Group className="m-2">
            <Form.Label className="fw-bold">clave</Form.Label>
            <Form.Control type="email" name="email" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Actualizar
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalActualizar;
