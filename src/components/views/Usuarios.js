import Menu from "../MenuPrincipal";
import ContenidoMenu from "../ContenidoMenu";
import RecordUsuario from "../Tables/RecordUsuario";
import { useEffect, useState } from "react";
import ActualizarStatus from "../Formularios/ActualizarStatus";
import VentanaModal from "../VentanaModal";
import { Table } from "react-bootstrap";
import Spinner from "../Formularios/Spinner";
import { useQuery, gql } from "@apollo/client";
import jwt_decode from "jwt-decode";
import alertify from "alertify.js";

const ALLUSERS = gql`
  query Query {
    allUsers {
      _id
      email
      documentId
      name
      lastName
      fullName
      role
      status
      password
    }
  }
`;


const Usuarios = () => {
  const user = jwt_decode(sessionStorage.getItem("token"));
  //estado para el modal de actualizar
  const [show, setShow] = useState(false);
  const { data, error, loading } = useQuery(ALLUSERS);
  //hook para pasar la info del proyecto al modal de editar
  const [estadoEditar, setEstadoEditar] = useState({});

  useEffect(() => {
    if (error) {
      alertify.error("Hubo un error");
    }
  }, [error]);

  let contador = 0;
  if (loading) return <Spinner />;
  return (
    <>
      <Menu />
      <ContenidoMenu>
        {user.userSesion.role==='leader' ? (
          <h1 className="fst-italic">Lista de estudiantes del sistema</h1>
        ):(
          <h1 className="fst-italic">Gestionar usuarios del sistema</h1>
        ) }
        <div className="d-flex justify-content-start flex-row gap-5 flex-wrap w-100 p-5 overflow-scroll shadow">
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Correo</th>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Nombre Completo</th>
                <th>Rol</th>
                <th>Estado</th>
                <th>Contraseña</th>              
                <th>Acciones</th>                      
              </tr>
            </thead>
            <tbody>       
              {data.allUsers.map((dato) => {
                if(user.userSesion.role==='leader' && dato.role==='student'){
                  return(
                    <RecordUsuario
                      key={dato.id}
                      dato={dato}
                      setShow={setShow}
                      setEstadoEditar={setEstadoEditar}
                      contador={(contador += 1)}
                      user={user}
                    />
                  )               
                }else if(user.userSesion.role==='admin'){
                  return(
                    <RecordUsuario
                      key={dato.id}
                      dato={dato}
                      setShow={setShow}
                      setEstadoEditar={setEstadoEditar}
                      contador={(contador += 1)}
                      user={user}
                    />
                  )
                }                 
              })}            
            </tbody>
          </Table>
        </div>
      </ContenidoMenu>
      <VentanaModal
        titulo="Actualizar Estado Usuario"
        setShow={setShow}
        show={show}
      >
        <ActualizarStatus setShow={setShow} estadoEditar={estadoEditar} />
      </VentanaModal>
    </>
  );
};
export default Usuarios;
