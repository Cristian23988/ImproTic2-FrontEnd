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
import Footer from "./Footer";
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
    documentId: Yup.number().required("La identificacion es obligatoria"),
    name: Yup.string().required("El nombre es obligatorio"),
    lastName: Yup.string().required("El apellido es obligatorio"),
    fullName: Yup.string().required("El nombre completo es obligatorio"),
    role: Yup.string().required("El rol es obligatorio"),
    password: Yup.string().required("La clave es obligatoria"),
  });

  return (
    <>
      <Header />
      <Container className="d-flex justify-content-center align-items-center vh-100 mt-5 ">
        <Formik
          initialValues={{
            email: "",
            documentId: "",
            name: "",
            lastName: "",
            fullName: "",
            role: "",
            status: "pending",
            password: "",
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
                <Formm.Group className="m-2">
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

                <Formm.Group className="m-2">
                  <Formm.Label className="fw-bold">Identificacion</Formm.Label>
                  <Field
                    className="form-control"
                    type="number"
                    name="documentId"
                    placeholder="Ingresa tu identificacion"
                  />
                  {errors.documentId && touched.documentId ? (
                    <Error>{errors.documentId}</Error>
                  ) : null}
                </Formm.Group>

                <Formm.Group className="m-2">
                  <Formm.Label className="fw-bold">Nombre</Formm.Label>
                  <Field
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="Ingresa tu nombre"
                  />
                  {errors.name && touched.name ? (
                    <Error>{errors.name}</Error>
                  ) : null}
                </Formm.Group>

                <Formm.Group className="m-2">
                  <Formm.Label className="fw-bold">Apellido</Formm.Label>
                  <Field
                    className="form-control"
                    type="text"
                    name="lastName"
                    placeholder="Ingresa tu apellido"
                  />
                  {errors.lastName && touched.lastName ? (
                    <Error>{errors.lastName}</Error>
                  ) : null}
                </Formm.Group>
                <Formm.Group className="m-2">
                  <Formm.Label className="fw-bold">Nombre Completo</Formm.Label>
                  <Field
                    className="form-control"
                    type="text"
                    name="fullName"
                    placeholder="Ingresa tu nombre completo"
                  />
                  {errors.fullName && touched.fullName ? (
                    <Error>{errors.fullName}</Error>
                  ) : null}
                </Formm.Group>

                <Formm.Group className="m-2">
                  <Formm.Label className="fw-bold">Rol</Formm.Label>
                  <Field as="select" name="role" className="form-control">
                    <option value="">--Selecciona un rol--</option>
                    <option value="administrador">Administrador</option>
                    <option value="estudiante">Estudiante</option>
                    <option value="lider">Lider</option>
                  </Field>
                  {errors.role && touched.role ? (
                    <Error>{errors.role}</Error>
                  ) : null}
                </Formm.Group>

                <Formm.Group className="m-2">
                  <Formm.Label className="fw-bold">Clave</Formm.Label>
                  <Field
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="Ingresa tu nombre clave"
                  />
                  {errors.password && touched.password ? (
                    <Error>{errors.password}</Error>
                  ) : null}
                </Formm.Group>
                <Boton variante="primary" tipo="submit" clase="w-100">
                  <IconRegistrer /> Registrarse
                </Boton>
              </Form>
            );
          }}
        </Formik>
      </Container>
      <Footer />
    </>
  );
};
export default RegistroUsuarios;
