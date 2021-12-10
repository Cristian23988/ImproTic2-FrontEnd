import { Button, Container } from "react-bootstrap";

import Header from "./Header";
import Footer from "./Footer";
import UsuarioNuevo from "./UsuarioNuevo";

const RegistroUsuarios = () => {
  //Funcion para el sumbit

  return (
    <>
      <Header />
      <Container className="d-flex justify-content-center align-items-center vh-100 mt-5  ">
        <UsuarioNuevo />
      </Container>
      <Footer />
    </>
  );
};
export default RegistroUsuarios;
