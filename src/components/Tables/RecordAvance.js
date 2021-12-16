import Button from "react-bootstrap/Button";
import IconAvance from "../../images/Icons/IconAvance";
import IconModificar from "../../images/Icons/IconModificar";
import React, { useState } from "react";

const RecorAvance = ({
  dato,
  setShow,
  setavances,
  contador,
  setDesc,
  setdescripcionoEditar,
}) => {
  const { _id, project_id, addDate, description, observations, project } = dato;
  const editarAvance = (_id) => {
    if (_id === dato._id) {
      setavances(dato);
    }
    setShow(true);
  };
  const editarDescription = (_id) => {
    if (_id === dato._id) {
      setdescripcionoEditar(dato);
    }
    setDesc(true);
  };
  return (
    <>
      <tr>
        <td>{contador}</td>
        <td>{addDate}</td>
        <td>{description}</td>
        <th>{observations}</th>
        <td>{project.name}</td>
        <th>{project.status}</th>
        <td>
          <Button variant="warning" onClick={() => editarAvance(_id)}>
            Editar
          </Button>
        </td>
        {project.status === "active" ? (
          <td>
            <Button variant="warning" onClick={() => editarDescription(_id)}>
              Editar
            </Button>
          </td>
        ) : null}
      </tr>
    </>
  );
};

export default RecorAvance;
