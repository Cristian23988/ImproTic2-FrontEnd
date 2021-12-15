import Menu from "../MenuPrincipal";
import ContenidoMenu from "../ContenidoMenu";
import Footer from "../Footer";
import Row from "react-bootstrap/Row";
import { Table, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Spinner from "../Formularios/Spinner";
import Alertify from "alertify.js";
import VentanModal from "../VentanaModal";
import NuevaIncripcion from "../Formularios/NuevaIncripcion";
import { useMutation, useQuery, gql } from "@apollo/client";
import RecordIncripciones from "../Tables/RecordIncripciones";
const Inscripciones = () => {
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

  const { data, error, loading } = useQuery(allEnrollments);

  const [show, setShow] = useState(false);
  console.log(data);
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
          <button className="btn btn-primary" onClick={setShow}>
            Nueva Incripcion
          </button>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Id</th>
                <th>Projecto</th>
                <th>Usuarios</th>
                <th>Estado</th>
                <th>Fecha De Incripcion</th>
                <th>Fecha Final</th>
                <th>Projecto</th>
                <th>Studen</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {data.allEnrollments.map((dato) => (
                <RecordIncripciones key={dato._id} dato={dato} />
              ))}
            </tbody>
          </Table>
        </div>
      </ContenidoMenu>
      <VentanModal titulo="Nueva Incripcion" setShow={setShow} show={show}>
        <NuevaIncripcion setShow={setShow} />
      </VentanModal>
    </>
  );
};
export default Inscripciones;
