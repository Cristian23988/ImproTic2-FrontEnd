import Menu from "../MenuPrincipal";
import ContenidoMenu from "../ContenidoMenu";
import Footer from "../Footer";
import { Table } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import RecordIncripciones from "../Tables/RecordIncripciones";
const Inscripciones = () => {
  const [datos, setguardarIncripciones] = useState([]);
  useEffect(() => {
    const consultarApi = async () => {
      const url = "http://localhost:4000/incripciones";
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      setguardarIncripciones(resultado);
    };
    consultarApi();
  }, []);
  return (
    <>
      <Menu />
      <ContenidoMenu>
        <h1 className="fst-italic">Gestionar inscripciones</h1>

        <div className="d-flex justify-content-start flex-row gap-5 flex-wrap w-100 p-5 overflow-scroll shadow">
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Projecto</th>
                <th>Usuarios</th>
                <th>Fecha De Incripcion</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {datos.map((dato) => (
                <RecordIncripciones key={dato.id} dato={dato} />
              ))}
            </tbody>
          </Table>
        </div>
      </ContenidoMenu>
    </>
  );
};
export default Inscripciones;
