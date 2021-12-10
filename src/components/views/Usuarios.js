import Menu from "../MenuPrincipal";
import ContenidoMenu from "../ContenidoMenu";
import Footer from "../Footer";
import RecordUsuario from "../Tables/RecordUsuario";
import React, { useEffect, useState } from "react";
const Usuarios = () => {
  const [datos, setdatos] = useState([]);
  console.log(datos);
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
            <RecordUsuario key={dato.id} dato={dato} />
          ))}
        </div>
      </ContenidoMenu>
    </>
  );
};
export default Usuarios;
