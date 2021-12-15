import { Button } from "react-bootstrap";
import Formm from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import React, { useState, useEffect } from "react";

const ActualizarDescription = ({ setShow }) => {
  const handleClose = () => setShow(false);
  return (
    <>
      <Formm.Group>
        <Formm.Label>Descripcion</Formm.Label>
        <Formm.Control as="textarea" placeholder="Descripcion" />
      </Formm.Group>
      <Modal.Footer>
        <Button variant="warning">Guardar cambios</Button>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
      </Modal.Footer>
    </>
  );
};

export default ActualizarDescription;
