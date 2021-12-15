import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import ActualizarIncripciones from "../Formularios/ActualizarIncripciones";
import VentanaModal from "../VentanaModal";

const RecordIncripciones = ({ dato }) => {
  const {
    _id,
    project_id,
    user_id,
    status,
    enrollmentDate,
    egressDate,
    project,
    student,
  } = dato;

  const [estado, setEstado] = useState({});
  const [show, setShow] = useState(false);
  const editarEstado = (_id) => {
    if (_id === dato._id) {
      setEstado(dato);
    }
    setShow(true);
  };

  return (
    <>
      <tr>
        <td>{_id} </td>
        <td>{project_id}</td>
        <td>{user_id}</td>
        <td>{status}</td>
        <td>{enrollmentDate}</td>
        <td>{egressDate}</td>
        <td>{project.name}</td>
        <td>{student.fullName}</td>
        <td>
          <Button variant="warning" onClick={() => editarEstado(_id)}>
            Editar
          </Button>
        </td>
      </tr>

      <VentanaModal titulo="Actualizar Estado" setShow={setShow} show={show}>
        <ActualizarIncripciones setShow={setShow} />
      </VentanaModal>
    </>
  );
};

export default RecordIncripciones;
