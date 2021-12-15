import Menu from "../MenuPrincipal";
import ContenidoMenu from "../ContenidoMenu";
import Footer from "../Footer";
import { Table } from "react-bootstrap";
import RecordAvance from "../Tables/RecordAvance";
import React, { useState, useEffect } from "react";

import Spinner from "../Formularios/Spinner";
import Alertify from "alertify.js";
import { useMutation, useQuery, gql } from "@apollo/client";
const Avances = () => {
  const [datos, setdatos] = useState([]);
  const [modal, setShow] = useState(false);
  const allAdvances = gql`
    query allAdvances {
      allAdvances {
        addDate
        description
        observations
        project {
          _id
          name
        }
      }
    }
  `;

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
                <th>Fecha</th>
                <th>Descripcion</th>
                <th>Observacion</th>
                <th>Id Projecto</th>
                <th> Projecto</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {data.allAdvances.map((dato) => (
                <RecordAvance key={dato.addDate} dato={dato} />
              ))}
            </tbody>
          </Table>
        </div>
      </ContenidoMenu>
    </>
  );
};
export default Avances;
