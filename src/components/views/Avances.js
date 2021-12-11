import Menu from "../MenuPrincipal";
import ContenidoMenu from "../ContenidoMenu";
import Footer from "../Footer";
import { Table } from "react-bootstrap";
import RecordAvance from "../Tables/RecordAvance";
import React, { useState, useEffect } from "react";
import ActualizarDescription from "../Formularios/ActualizarDescription";
import VentanaModal from "../VentanaModal";
const Avances = () => {
  const [datos, setdatos] = useState([]);

  const [show, setShow] = useState(false);
  useEffect(() => {
    const consultaUrl = async () => {
      try {
        const url = `http://localhost:4000/avances`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setdatos(resultado);
      } catch (error) {
        console.log("ocurrio un erro " + error);
      }
    };
    consultaUrl();
  }, []);
  return (
    <>
      <Menu />
      <ContenidoMenu>
        <h1 className="fst-italic">Gestionar avances</h1>
        <div className="d-flex justify-content-starst flex-row gap-5 flex-wrap w-100 p-5 overflow-scroll shadow">
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th></th>
                <th>Projecto</th>
                <th>Fecha</th>
                <th>Descripcion</th>
                <th>Observacion</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {datos.map((dato) => (
                <RecordAvance key={dato.id} dato={dato} />
              ))}
            </tbody>
          </Table>
        </div>
      </ContenidoMenu>
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
export default Avances;
