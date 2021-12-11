import Menu from "../MenuPrincipal";
import ContenidoMenu from "../ContenidoMenu";
import { Table } from "react-bootstrap";
import RecordProyectos from "../Tables/RecordProyectos";
import React, { useState, useEffect } from "react";
import VentanaModal from '../VentanaModal';
import ActualizarProyecto from '../Formularios/ActualizarProyecto';

const Proyectos = () => {
  const [datos, setdatos] = useState([]);
  //hook para pasar la info del proyecto al modal de editar
  const [proyectoEditar, setProyectoEditar]= useState({});
  const [showEditar, setShowEditar]= useState(false);

  useEffect(() => {
    const consultaUrl = async () => {
      try {
        const url = `http://localhost:4000/projectos`;
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
        <h1 className="fst-italic">Gestionar proyectos </h1>
        <div className="d-flex justify-content-start flex-row gap-5 flex-wrap w-100 p-5 overflow-scroll shadow">
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Objetivo general</th>
                <th>Objetivos especificos</th>
                <th>Presupuesto</th>
                <th>Fecha inicio</th>
                <th>Fecha fin</th>
                <th>Lider</th>
                <th>Estado</th>
                <th>Fase</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {datos.map((dato) => (
                <RecordProyectos 
                  key={dato.id} 
                  dato={dato} 
                  setProyectoEditar={setProyectoEditar}
                  setShowEditar={setShowEditar}
                />
              ))}
            </tbody>
          </Table>
        </div>
      </ContenidoMenu>
      <VentanaModal
        titulo="Editar proyecto"
        setShow={setShowEditar}
        show={showEditar}
      >
        <ActualizarProyecto
          setShowEditar={setShowEditar}
          proyectoEditar={proyectoEditar}
        />
      </VentanaModal>
    </>
  );
};
export default Proyectos;
