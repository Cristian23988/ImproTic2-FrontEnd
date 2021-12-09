import { Button, Container } from "react-bootstrap";
import Formm from "react-bootstrap/Form";
/*import IconEmail from "../images/Icons/IconEmail";
import IconPersona from "../images/Icons/IconPersona";
import IconRol from "../images/Icons/IconRol";
import IconClave from "../images/Icons/IconClave";
import IconNombre from "../images/Icons/IconNombre";*/
import Boton from "./Buttons";
import Header from "./Header";
import Error from "./Error";
// import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Footer from './Footer';
import IconRegistrer from "../images/Icons/IconRegistrer";

const RegistroUsuarios = () => {
  //Funcion para el sumbit

  //Prueba para una api con los datos
  const handleSubmit = async (values) => {
    const url = "http://localhost:4000/usuarios";
    const resultado = await fetch(url, {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await resultado.json();
    console.log(resultado);
  };

  //Funcion para validar el formulario
  const RegistroUsuario = Yup.object().shape({
    email: Yup.string()
      .email("Email no valido")
      .required("El email es obligatorio!"),
    nombre: Yup.string().required("El nombre es obligatorio"),
    apellido: Yup.string().required("El apellido es obligatorio"),
    nombrecompleto: Yup.string().required("El nombre completo es obligatorio"),
    rol: Yup.string().required("El rol es obligatorio"),
    clave: Yup.string().required("La clave es obligatoria"),
  });

  return (
    <>
      <Header />
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Formik
          initialValues={{
            email: "",
            nombre: "",
            apellido: "",
            nombrecompleto: "",
            rol: "",
            clave: "",
          }}
          onSubmit={async (values, { resetForm }) => {
            await handleSubmit(values);
            resetForm();
          }}
          validationSchema={RegistroUsuario} //validando el form
        >
          {({ errors, touched }) => {
            return (
              <Form className="w-50 mt-3 border p-5 bg-light shadow ">
                <Formm.Group className="m-3">
                  <Formm.Label className="fw-bold">Email</Formm.Label>
                  <Field
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="Ingresa tu email"
                  />
                  {errors.email && touched.email ? (
                    <Error>{errors.email}</Error>
                  ) : null}
                </Formm.Group>

                <Formm.Group className="m-3">
                  <Formm.Label className="fw-bold">Nombre</Formm.Label>
                  <Field
                    className="form-control"
                    type="text"
                    name="nombre"
                    placeholder="Ingresa tu nombre"
                  />
                  {errors.nombre && touched.nombre ? (
                    <Error>{errors.nombre}</Error>
                  ) : null}
                </Formm.Group>

                <Formm.Group className="m-3">
                  <Formm.Label className="fw-bold">Apellido</Formm.Label>
                  <Field
                    className="form-control"
                    type="text"
                    name="apellido"
                    placeholder="Ingresa tu apellido"
                  />
                  {errors.apellido && touched.apellido ? (
                    <Error>{errors.apellido}</Error>
                  ) : null}
                </Formm.Group>
                <Formm.Group className="m-3">
                  <Formm.Label className="fw-bold">Nombre Completo</Formm.Label>
                  <Field
                    className="form-control"
                    type="text"
                    name="nombrecompleto"
                    placeholder="Ingresa tu nombre completo"
                  />
                  {errors.nombrecompleto && touched.nombrecompleto ? (
                    <Error>{errors.nombrecompleto}</Error>
                  ) : null}
                </Formm.Group>

                <Formm.Group className="m-3">
                  <Formm.Label className="fw-bold">Rol</Formm.Label>
                  <Field as="select" name="rol" className="form-control">
                    <option value="">--Selecciona un rol--</option>
                    <option value="administrador">Administrador</option>
                    <option value="estudiante">Estudiante</option>
                    <option value="lider">Lider</option>
                  </Field>
                  {errors.rol && touched.rol ? (
                    <Error>{errors.rol}</Error>
                  ) : null}
                </Formm.Group>

                <Formm.Group className="m-3">
                  <Formm.Label className="fw-bold">Clave</Formm.Label>
                  <Field
                    className="form-control"
                    type="password"
                    name="clave"
                    placeholder="Ingresa tu nombre clave"
                  />
                  {errors.clave && touched.clave ? (
                    <Error>{errors.clave}</Error>
                  ) : null}
                </Formm.Group>
                <Boton
                  variante="primary"
                  tipo="submit"
                  clase="w-100"
                >
                  <IconRegistrer/>{' '}Registrarse
                </Boton>
              </Form>
            );
          }}
        </Formik>
      </Container>
      <Footer/>
    </>
  );
};
export default RegistroUsuarios;
