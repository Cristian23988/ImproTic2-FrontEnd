import Button from "react-bootstrap/Button";
import IconAvance from "../../images/Icons/IconAvance";
import IconModificar from "../../images/Icons/IconModificar";
import React, { useState } from "react";
import ActualizarDescription from "../Formularios/ActualizarDescription";
import VentanaModal from "../VentanaModal";

const RecorAvance = ({ dato }) => {
  const { project, addDate, description, observations } = dato;
  const [avances, setavances] = useState({});

  const [show, setShow] = useState(false);
  const editarAvance = (addDate) => {
    if (addDate === dato.addDate) {
      setavances(dato);
    }
    setShow(true);
  };
  return (
    <>
      <tr>
        <td>{addDate}</td>
        <td className="overflow-scroll">{description}</td>
        <td>{observations}</td>
        <td>{project._id}</td>
        <td>{project.name}</td>
        <td>
          <Button variant="warning" onClick={() => editarAvance(addDate)}>
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
