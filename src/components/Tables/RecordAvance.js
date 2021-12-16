import Button from "react-bootstrap/Button";
import IconAvance from "../../images/Icons/IconAvance";
import IconModificar from "../../images/Icons/IconModificar";
import React, { useState } from "react";

const RecorAvance = ({ dato, setShow, setavances }) => {
  const { _id, project_id, addDate, description, project } = dato;
  const editarAvance = (addDate) => {
    if (addDate === dato.addDate) {
      setavances(dato);
    }
    setShow(true);
  };
  return (
    <>
      <tr>
        <td>{_id}</td>
        <td>{project_id}</td>
        <td>{addDate}</td>
        <td>{description}</td>
        <td>{project.name}</td>
        <td>
          <Button variant="warning" onClick={() => editarAvance(addDate)}>
            Editar
          </Button>
        </td>
      </tr>
    </>
  );
};

export default RecorAvance;
