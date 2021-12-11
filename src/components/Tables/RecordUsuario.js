import { Card, Button } from "react-bootstrap";
import { useState } from "react";

const RecordUsuario = ({ dato, setShow, setShowEliminar }) => {
  const { email, name, lastName, fullName, role, status, password, id } = dato;
  return (
    <tr>
      <td>{id}</td>
      <td>{email}</td>
      <td>{name}</td>
      <td>{lastName}</td>
      <td className="overflow-scroll">{fullName}</td>
      <td>{role}</td>
      <td>{status}</td>
      <td>{password}</td>
      <td>
        <button className="btn btn-primary me-3" onClick={setShow}>
          Editar
        </button>
        <button className="btn btn-danger" onClick={setShowEliminar}>
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default RecordUsuario;
