import Menu from "../MenuPrincipal";
import ContenidoMenu from "../ContenidoMenu";
import RecordUsuario from "../Tables/RecordUsuario";
import { useEffect, useState } from "react";
import ActualizarStatus from "../Formularios/ActualizarStatus";
import VentanaModal from "../VentanaModal";

import { Table } from "react-bootstrap";
const Usuarios = () => {
  const [datos, setdatos] = useState([]);
  //estado para el modal de actualizar
  const [show, setShow] = useState(false);
  //hook para pasar la info del proyecto al modal de editar
  const [estadoEditar, setEstadoEditar]= useState({});
  useEffect(() => {
    const consultaUrl = async () => {
      try {
        const url = `http://localhost:4000/usuarios`;
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
        <h1 className="fst-italic">Gestionar usuarios del sistema</h1>
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
              {datos.map((dato) => (
                <RecordUsuario
                  key={dato.id}
                  dato={dato}
                  setShow={setShow}
                  setEstadoEditar={setEstadoEditar}
                />
              ))}
            </tbody>
          </Table>
        </div>
      </ContenidoMenu>
      <VentanaModal
        titulo="Actualizar Estado Usuario"
        setShow={setShow}
        show={show}
      >
        <ActualizarStatus 
          setShow={setShow} 
          estadoEditar={estadoEditar}
        />
      </VentanaModal>
    </>
  );
};
export default Usuarios;
