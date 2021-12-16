// import IconRegistrer from '../images/Icons/IconRegistrer';
import { Nav } from "react-bootstrap";
import IconMenu from "../images/Icons/IconMenu";
import IconHome from "../images/Icons/IconHome";
import IconUsuarios from "../images/Icons/IconUsuarios";
import IconAvance from "../images/Icons/IconAvance";
import IconProyectos from "../images/Icons/IconProyectos";
import IconInscripcion from "../images/Icons/IconInscripcion";
import BarraPerfil from "./BarraPerfil";
import ActualizarUsuario from "./Formularios/ActualizarUsuario";
import VentanaModal from "./VentanaModal";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

const MenuPrincipal = () => {
  const user = jwt_decode(sessionStorage.getItem("token"));
  const encabezado = {
    height: "10%",
    width: "15%",
  };
  const menu = {
    height: "90%",
    width: "15%",
  };
  //states de los  links activo
  const [linkHome, setLinkHome] = useState("");
  const [linkUsuarios, setLinkUsuarios] = useState("");
  const [linkProyectos, setLinkProyectos] = useState("");
  const [linkAvances, setLinkAvances] = useState("");
  const [linkInscripciones, setLinkInscripciones] = useState("");
  //estado para el modal de actualizar
  const [show, setShow] = useState(false);
  var URLactual = window.location.href;

  useEffect(() => {
    if (URLactual === "https://improtic-frontend.herokuapp.com/menu/usuarios") {
      setLinkUsuarios("active");
      setLinkProyectos("");
      setLinkAvances("");
      setLinkHome("");
      setLinkInscripciones("");
    } else if (URLactual === "https://improtic-frontend.herokuapp.com/menu/proyectos") {
      setLinkUsuarios("");
      setLinkProyectos("active");
      setLinkAvances("");
      setLinkHome("");
      setLinkInscripciones("");
    } else if (URLactual === "https://improtic-frontend.herokuapp.com/menu/avances") {
      setLinkUsuarios("");
      setLinkProyectos("");
      setLinkAvances("active");
      setLinkHome("");
      setLinkInscripciones("");
    } else if (URLactual === "https://improtic-frontend.herokuapp.com/menu/inscripciones") {
      setLinkUsuarios("");
      setLinkProyectos("");
      setLinkAvances("");
      setLinkHome("");
      setLinkInscripciones("active");
    } else {
      setLinkUsuarios("");
      setLinkProyectos("");
      setLinkAvances("");
      setLinkHome("active");
      setLinkInscripciones("");
    }
  }, []);
  
  return (
    <>
      <BarraPerfil setShow={setShow} />
      <VentanaModal
        titulo="Actualizar perfil Usuario"
        setShow={setShow}
        show={show}
      >
        <ActualizarUsuario setShow={setShow} />
      </VentanaModal>
      <div
        className="nav-item text-white bg-primary position-absolute p-5 top-0 start-0 d-flex justify-content-center align-items-center"
        style={encabezado}
      >
        <Nav.Link href="/" className="text-white">
          <IconMenu /> Menu Principal
        </Nav.Link>
      </div>
      <Nav
        className=" nav nav-pills flex-column bg-dark  p-3 position-absolute  bottom-0 start-0"
        style={menu}
      >
        <Link
          to="/menu/home"
          className={`${linkHome} nav-link text-white text-center`}
          onClick={() => {
            setLinkHome("active");
            setLinkUsuarios("");
            setLinkProyectos("");
            setLinkAvances("");
            setLinkInscripciones("");
          }}
        >
          <IconHome /> Home
        </Link>
        {user.userSesion.role==="student" ? null:(
          <Link
            to="/menu/usuarios"
            className={`${linkUsuarios} nav-link text-white text-center`}
            onClick={() => {
              setLinkUsuarios("active");
              setLinkHome("");
              setLinkProyectos("");
              setLinkAvances("");
              setLinkInscripciones("");
            }}
          >
            <IconUsuarios /> Usuarios
          </Link>
        )}
        <Link
          to="/menu/proyectos"
          className={`${linkProyectos} nav-link text-white text-center`}
          onClick={() => {
            setLinkUsuarios("");
            setLinkHome("");
            setLinkProyectos("active");
            setLinkAvances("");
            setLinkInscripciones("");
          }}
        >
          <IconProyectos /> Proyectos
        </Link>
        <Link
          to="/menu/avances"
          className={`${linkAvances} nav-link text-white text-center`}
          onClick={() => {
            setLinkUsuarios("");
            setLinkHome("");
            setLinkProyectos("");
            setLinkAvances("active");
          }}
        >
          <IconAvance /> Avances
        </Link>
        <Link
          to="/menu/inscripciones"
          className={`${linkInscripciones} nav-link text-white text-center`}
          onClick={() => {
            setLinkUsuarios("");
            setLinkHome("");
            setLinkProyectos("");
            setLinkAvances("");
            setLinkInscripciones("active");
          }}
        >
          <IconInscripcion /> Inscripciones
        </Link>
        {/* <Nav.Link eventKey="disabled"  disabled>
                    Disabled
                </Nav.Link> */}
      </Nav>
    </>
  );
};

export default MenuPrincipal;
