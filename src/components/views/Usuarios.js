import Menu from "../MenuPrincipal";
import ContenidoMenu from "../ContenidoMenu";
import VentanaModal from "../VentanaModal";
import RecordUsuario from "../Tables/RecordUsuario";
import { useEffect, useState } from "react";
import ActualizarStatus from "../Formularios/ActualizarStatus";
import { Table } from "react-bootstrap";
const Usuarios = () => {
  const [datos, setdatos] = useState([]);

  //estado para el modal de actualizar
  const [show, setShow] = useState(false);

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
                <RecordUsuario key={dato.id} dato={dato} setShow={setShow} />
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
        <ActualizarStatus setShow={setShow} />
      </VentanaModal>
    </>
  );
};
export default Usuarios;
