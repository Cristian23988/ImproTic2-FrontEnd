import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import ActualizarIncripciones from "../Formularios/ActualizarIncripciones";
import VentanaModal from "../VentanaModal";
const RecordIncripciones = ({ dato }) => {
  const { project_id, user_id, enrollmentDate, status, id } = dato;
  const [estado, setEstado] = useState({});
  const [show, setShow] = useState(false);
  const editarEstado = (id) => {
    if (id === dato.id) {
      setEstado(dato);
    }
    setShow(true);
  };
  return (
    <>
      <tr>
        <td>{project_id}</td>
        <td>{user_id}</td>
        <td>{enrollmentDate}</td>
        <td>{status}</td>
        <td>
          <Button variant="warning" onClick={() => editarEstado(id)}>
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
