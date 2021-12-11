import Button from "react-bootstrap/Button";
import IconAvance from "../../images/Icons/IconAvance";
import IconModificar from "../../images/Icons/IconModificar";
import React, { useState } from "react";
import ActualizarDescription from "../Formularios/ActualizarDescription";
import VentanaModal from "../VentanaModal";

const RecorAvance = ({ dato }) => {
  const { project_id, addDate, description, observations, id } = dato;
  const [avances, setavances] = useState({});

  const [show, setShow] = useState(false);
  const editarAvance = (id) => {
    if (id === dato.id) {
      setavances(dato);
    }
    setShow(true);
  };
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{project_id}</td>
        <td>{addDate}</td>
        <td className="overflow-scroll">{description}</td>
        <td>{observations}</td>
        <td>
          <Button variant="warning" onClick={() => editarAvance(id)}>
            Editar
          </Button>
        </td>
      </tr>

      <VentanaModal
        titulo="Actualizar Descripcion"
        setShow={setShow}
        show={show}
      >
        <ActualizarDescription setShow={setShow} />
      </VentanaModal>
    </>
  );
};

export default RecorAvance;
