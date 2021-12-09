import { Container, Form } from "react-bootstrap";
import IconEmail from "../images/Icons/IconEmail";
import IconPersona from "../images/Icons/IconPersona";
import IconRol from "../images/Icons/IconRol";
import IconClave from "../images/Icons/IconClave";
import IconNombre from "../images/Icons/IconNombre";
import Boton from "./Buttons";
import Header from "./Header";
import Error from "./Error";
import { useState } from "react";
const RegistroUsuarios = () => {
  const [registros, setregistros] = useState({
    email: "",
    nombre: "",
    apellido: "",
    nombrecompleto: "",
    rol: "",
    contraseña: "",
  });
  const { email, nombre, apellido, nombrecompleto, rol, contraseña } =
    registros;
  const [error, seterror] = useState(false);
  const datosForm = (e) => {
    setregistros({ ...registros, [e.target.name]: e.target.value });
  };

  const RegristroSubmit = (e) => {
    e.preventDefault();
    if (
      email.trim() === "" ||
      nombre.trim() === "" ||
      apellido.trim() === "" ||
      nombrecompleto.trim() === "" ||
      rol.trim() === "" ||
      contraseña.trim() === ""
    ) {
      seterror(true);
      setTimeout(() => {
        seterror(false);
      }, 2000);
      return;
    }
  };
  return (
    <>
      <Header />
      <Container className="d-flex justify-content-center align-items-center ">
        <Form
          className="w-50 mt-3 border p-5 bg-light shadow "
          onSubmit={RegristroSubmit}
        >
          {error ? (
            <Error mensaje="Todos los campos son obligatorios!" />
          ) : null}
          <Form.Group className="m-3">
            <Form.Label className="fw-bold">Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Ingresa tu email"
              value={email}
              onChange={datosForm}
            />
          </Form.Group>
          <Form.Group className="m-3">
            <Form.Label className="fw-bold"></Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              placeholder="Ingresa tu nombre"
              value={nombre}
              onChange={datosForm}
            />
          </Form.Group>
          <Form.Group className="m-3">
            <Form.Label className="fw-bold">Apellido</Form.Label>
            <Form.Control
              type="text"
              name="apellido"
              placeholder="Ingresa tu apellido"
              value={apellido}
              onChange={datosForm}
            />
          </Form.Group>
          <Form.Group className="m-3">
            <Form.Label className="fw-bold">Nombre Completo</Form.Label>
            <Form.Control
              type="text"
              name="nombrecompleto"
              placeholder="Ingresa tu nombre completo"
              value={nombrecompleto}
              onChange={datosForm}
            />
          </Form.Group>
          <Form.Group className="m-3">
            <Form.Label className="fw-bold">Rol</Form.Label>
            <Form.Select value={rol} onChange={datosForm} value="rol">
              <option value="">--Selecciona un rol--</option>
              <option value="administrador">Administrador</option>
              <option value="estudiante">Estudiante</option>
              <option value="lider">Lider</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="m-3" controlId="formBasicPassword">
            <Form.Label className="fw-bold">Contraseña</Form.Label>
            <Form.Control
              type="password"
              value="contraseña"
              placeholder="Ingresa tu nombre contraseña"
              value={contraseña}
              onChange={datosForm}
            />
          </Form.Group>

          <Form.Control
            type="submit"
            className="btn btn-primary w-100"
            value="Registrarse"
          />
        </Form>
      </Container>
    </>
  );
};

export default RegistroUsuarios;
