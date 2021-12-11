import Menu from "../MenuPrincipal";
import ContenidoMenu from "../ContenidoMenu";
import Footer from "../Footer";
import { Table } from "react-bootstrap";
import RecordProyectos from "../Tables/RecordProyectos";
import React, { useState, useEffect } from "react";

const Proyectos = () => {
  const [datos, setdatos] = useState([]);
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
              </tr>
            </thead>
            <tbody>
              {datos.map((dato) => (
                <RecordProyectos key={dato.id} dato={dato} />
              ))}
            </tbody>
          </Table>
        </div>
      </ContenidoMenu>
      <div className="position-absolute bottom-0 w-100 h-auto">
        <Footer />
      </div>
    </>
  );
};
export default Proyectos;
