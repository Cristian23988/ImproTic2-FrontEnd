import Menu from "../MenuPrincipal";
import ContenidoMenu from "../ContenidoMenu";
import VentanaModal from "../VentanaModal";
import RecordUsuario from "../Tables/RecordUsuario";
import { useEffect, useState } from "react";
import ActualizarUsuario from "../Formularios/ActualizarUsuario";
import EliminarUsuario from "../Formularios/EliminarUsuario";
import ActualizarStatus from "../Formularios/ActualizarStatus";

const Usuarios = () => {
  const [datos, setdatos] = useState([]);
  console.log(datos);
  //estado para el modal de actualizar
  const [show, setShow] = useState(false);
  //estado para el modal de eliminar
  const [showEliminar, setShowEliminar] = useState(false);
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
          {datos.map((dato) => (
            <RecordUsuario
              key={dato.id}
              dato={dato}
              setShow={setShow}
              setShowEliminar={setShowEliminar}
            />
          ))}
        </div>
      </ContenidoMenu>
      <VentanaModal
        titulo="Actualizar Estado Usuario"
        setShow={setShow}
        show={show}
      >
        <ActualizarStatus setShow={setShow} />
      </VentanaModal>
      <VentanaModal
        titulo="Advertencia"
        setShow={setShowEliminar}
        show={showEliminar}
      >
        <EliminarUsuario setShow={setShowEliminar} />
      </VentanaModal>
    </>
  );
};
export default Usuarios;
