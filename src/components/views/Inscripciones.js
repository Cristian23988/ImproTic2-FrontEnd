import Menu from "../MenuPrincipal";
import ContenidoMenu from "../ContenidoMenu";
import Footer from "../Footer";
import Row from "react-bootstrap/Row";
import { Table, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Spinner from "../Formularios/Spinner";
import Alertify from "alertify.js";
import VentanaModal from "../VentanaModal";
import NuevaIncripcion from "../Formularios/NuevaIncripcion";
import { useMutation, useQuery, gql } from "@apollo/client";
import RecordIncripciones from "../Tables/RecordIncripciones";
import ActualizarIncripciones from "../Formularios/ActualizarIncripciones";
import jwt_decode from "jwt-decode";
const allEnrollments = gql`
  query AllEnrollments {
    allEnrollments {
      _id
      project_id
      user_id
      status
      enrollmentDate
      egressDate
      project {
        _id
        name
      }
      student {
        _id
        fullName
      }
    }
  }
`;
const Inscripciones = () => {
  const user = jwt_decode(sessionStorage.getItem("token"));
  const { data, error, loading } = useQuery(allEnrollments);
  const [show, setShow] = useState(false);
  const [estado, setestado] = useState(false);
  const [estadoEditar, setEstadoEditar] = useState({});
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
        <h1 className="fst-italic">Gestionar inscripciones</h1>
        <div className="d-flex justify-content-start flex-row gap-5 flex-wrap w-100 p-5 overflow-scroll shadow">
          {user.userSesion.role === "student" ? (
            <button className="btn btn-primary" onClick={setShow}>
              Nueva Incripcion
            </button>
          ) : null}

          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Id</th>
                <th>Projecto</th>
                <th>Usuarios</th>
                <th>Estado</th>
                <th>Fecha De Incripcion</th>
                <th>Fecha Final</th>

                {user.userSesion.role === "leader" ? <th>Acciones</th> : null}
              </tr>
            </thead>
            <tbody>
              {data.allEnrollments.map((dato) => (
                <RecordIncripciones
                  key={dato._id}
                  dato={dato}
                  setestado={setestado}
                  setEstadoEditar={setEstadoEditar}
                  user={user}
                  contador={(contador += 1)}
                />
              ))}
            </tbody>
          </Table>
        </div>
      </ContenidoMenu>

      <VentanaModal titulo="Nueva Incripcion" setShow={setShow} show={show}>
        <NuevaIncripcion setShow={setShow} user={user} />
      </VentanaModal>

      <VentanaModal
        titulo="Actualizar Estado"
        setShow={setestado}
        show={estado}
      >
        <ActualizarIncripciones
          setestado={setestado}
          estadoEditar={estadoEditar}
        />
      </VentanaModal>
    </>
  );
};
export default Inscripciones;
