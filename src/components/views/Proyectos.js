import Menu from "../MenuPrincipal";
import ContenidoMenu from "../ContenidoMenu";
import { Table, Button } from "react-bootstrap";
import RecordProyectos from "../Tables/RecordProyectos";
import React, { useState, useEffect } from "react";
import VentanaModal from "../VentanaModal";
import ActualizarProyecto from "../Formularios/ActualizarProyecto";
import NuevoProyecto from "../Formularios/NuevoProyecto";
import { useQuery, gql } from "@apollo/client";
import alertify from "alertify.js";
import jwt_decode from "jwt-decode";
import Spinner from "../Formularios/Spinner";

const allProjects = gql`
  query AllProjects {
    allProjects {
      _id
      name
      generalObjective
      specificObjectives
      budget
      startDate
      endDate
      status
      phase
      leader {
        _id
        name
      }
    }
  }
`;
const Proyectos = () => {
  const user = jwt_decode(sessionStorage.getItem("token"));

  const { data, error, loading } = useQuery(allProjects);
  //hook para pasar la info del proyecto al modal de editar
  const [proyectoEditar, setProyectoEditar] = useState({});
  const [showEditar, setShowEditar] = useState(false);
  const [showNuevo, setShowNuevo] = useState(false);

  useEffect(() => {
    if (error) {
      alertify.error("Hubo un error");
    }
  }, [error]);

  let contador = 0;
  if (loading) return <Spinner />;
  return (
    <>
      <Menu/>
      <ContenidoMenu>
        <h1 className="fst-italic">Gestionar proyectos </h1>
        <div className="w-100 d-flex justify-content-start p-5 mb-1 mt-2">
          {user.userSesion.role === "admin" || user.userSesion.role === "student" ? null : (
            <Button variant="primary" onClick={() => setShowNuevo(true)}>
              Nuevo proyecto
            </Button>
          )}
        </div>

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
                {user.userSesion.role === "student" ? null:(<th>Acciones</th>)}      
              </tr>
            </thead>
            <tbody>
              {data.allProjects.map((dato) => (
                <RecordProyectos
                  key={dato._id}
                  dato={dato}
                  contador={(contador += 1)}
                  setProyectoEditar={setProyectoEditar}
                  setShowEditar={setShowEditar}
                  user={user}
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
          user={user}
        />
      </VentanaModal>
      <VentanaModal
        titulo="Crear proyecto"
        setShow={setShowNuevo}
        show={showNuevo}
      >
        <NuevoProyecto setShowNuevo={setShowNuevo} user={user} />
      </VentanaModal>
    </>
  );
};
export default Proyectos;
