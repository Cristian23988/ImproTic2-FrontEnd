import { Card, Button } from "react-bootstrap";
import {useState} from "react";

const RecordUsuario = ({ dato, setShow, setShowEliminar }) => {

  const { email, name, lastName, fullName, role, status, password, id } = dato;
  return (
    <Card>
      <Card.Header className="bg-dark text-white">{fullName}</Card.Header>
      <Card.Body>
        <Card.Title>Datos</Card.Title>
        <div className="row align-items-start p-2">
          <div className="col">
            <b>Nombres:</b> {name}
          </div>
          <div className="col">
            <b>Apellidos:</b> {lastName}
          </div>
        </div>
        <div className="row align-items-start p-2">
          <div className="col">
            <b>Email:</b> {email}
          </div>
          <div className="col">
            <b>Rol:</b> {role}
          </div>
        </div>
        <div className="row align-items-start p-2">
          <div className="col">
            <b>Estado:</b> {status}
          </div>
          <div className="col">
            <b>Contraseña:</b> {password}
          </div>
        </div>
        <div className="row align-items-start p-2">
          <div className="col">
            <button className="btn btn-primary" onClick={setShow}>
              Editar
            </button>
          </div>
          <div className="col">
              <button className="btn btn-primary" onClick={setShowEliminar}>
                Eliminar
              </button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default RecordUsuario;
