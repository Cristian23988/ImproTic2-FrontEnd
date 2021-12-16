import Menu from "../MenuPrincipal";
import ContenidoMenu from "../ContenidoMenu";
import Footer from "../Footer";
import { Table } from "react-bootstrap";
import RecordAvance from "../Tables/RecordAvance";
import React, { useState, useEffect } from "react";
import Spinner from "../Formularios/Spinner";
import Alertify from "alertify.js";
import ActualizarDescription from "../Formularios/ActualizarDescription";
import VentanaModal from "../VentanaModal";
import { useMutation, useQuery, gql } from "@apollo/client";

const allAdvances = gql`
  query AllAdvances {
    allAdvances {
      _id
      project_id
      addDate
      description
      project {
        _id
        name
      }
    }
  }
`;
const Avances = () => {
  const [estado, setavances] = useState({});
  const [show, setShow] = useState(false);
  const { data, error, loading } = useQuery(allAdvances);

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
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>id</th>
                <th>Id projecto</th>
                <th>Fecha</th>
                <th>Descripcion</th>
                <th> Projecto</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {data.allAdvances.map((dato) => (
                <RecordAvance
                  key={dato._id}
                  dato={dato}
                  setShow={setShow}
                  setavances={setavances}
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
    </>
  );
};
export default Avances;
