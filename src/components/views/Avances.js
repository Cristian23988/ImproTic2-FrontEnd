import Menu from "../MenuPrincipal";
import ContenidoMenu from "../ContenidoMenu";
import Footer from "../Footer";
import { Table } from "react-bootstrap";
import RecordAvance from "../Tables/RecordAvance";
import React, { useState, useEffect } from "react";
import Spinner from "../Formularios/Spinner";
import Alertify from "alertify.js";
import ActualizarDescription from "../Formularios/ActualizarDescription";
import ActualizarObservacion from "../Formularios/ActualizarObservacion";
import VentanaModal from "../VentanaModal";
import { useMutation, useQuery, gql } from "@apollo/client";
import jwt_decode from "jwt-decode";
import NuevoAvance from "../Formularios/NuevoAvance";
const allAdvances = gql`
  query Query {
    allAdvances {
      _id
      project_id
      addDate
      description
      observations
      project {
        _id
        name
        status
      }
    }
  }
`;

const Avances = () => {
  const [estado, setavances] = useState({});
  const [des, setDesc] = useState(false);
  const [show, setShow] = useState(false);
  const [avance, setavance] = useState(false);
  const [descripcionEditar, setdescripcionoEditar] = useState({});
  const { data, error, loading } = useQuery(allAdvances);
  const user = jwt_decode(sessionStorage.getItem("token"));
  let contador = 0;
  useEffect(() => {
    if (error) {
      Alertify.error("Hubo un error!");
    }
  }, [error]);

  if (loading) return <Spinner />;
  return (
    <>
      <Menu />
      <ContenidoMenu>
        <h1 className="fst-italic">Gestionar avances</h1>
        <div className="d-flex justify-content-starst flex-row gap-5 flex-wrap w-100 p-5 overflow-scroll shadow">
          {user.userSesion.role === "student" ? (
            <button className="btn btn-primary" onClick={setavance}>
              Nuevos Avances
            </button>
          ) : null}
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>id</th>
                <th>Fecha</th>
                <th>Descripcion</th>
                <th>Observacion</th>
                <th> Projecto</th>
                <th>Estado Proyecto</th>
                <th colSpan={2} className="text-center">
                  Opciones
                </th>
              </tr>
            </thead>
            <tbody>
              {data.allAdvances.map((dato) => (
                <RecordAvance
                  key={dato._id}
                  dato={dato}
                  setShow={setShow}
                  setavances={setavances}
                  setdescripcionoEditar={setdescripcionoEditar}
                  setDesc={setDesc}
                  contador={(contador += 1)}
                  user={user}
                />
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
        <ActualizarDescription setShow={setShow} estado={estado} />
      </VentanaModal>

      <VentanaModal
        titulo="Actualizar observacion"
        setShow={setDesc}
        show={des}
      >
        <ActualizarObservacion
          setDesc={setDesc}
          descripcionEditar={descripcionEditar}
        />
      </VentanaModal>

      <VentanaModal titulo="Nuevo Avance" setShow={setavance} show={avance}>
        <NuevoAvance setavance={setavance} />
      </VentanaModal>
    </>
  );
};
export default Avances;
