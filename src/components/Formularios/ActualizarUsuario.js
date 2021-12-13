import { Button } from "react-bootstrap";

import Modal from "react-bootstrap/Modal";
import Formm from "react-bootstrap/Form";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Error from "../Error";
const ActualizarUsuario = ({ setShow }) => {
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
  const handleClose = () => setShow(false);
  const RegistroUsuario = Yup.object().shape({
    email: Yup.string()
      .email("Email no valido")
      .required("El email es obligatorio!"),
    documentId: Yup.number().required("La identificacion es obligatoria"),
    name: Yup.string().required("El nombre es obligatorio"),
    lastName: Yup.string().required("El apellido es obligatorio"),
    fullName: Yup.string()
      .required("El nombre completo es obligatorio")
      .min(10, "Ingrasa tu nombre completo"),
    status: Yup.string().required("Ingresa el estado del usuario"),
    password: Yup.string().required("La clave es obligatoria"),
  });
  //const valores iniciales
  const initialValues = {
    email: "",
    documentId: "",
    name: "",
    lastName: "",
    fullName: "",
    status: "active",
    role: "",
    password: "",
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, { resetForm }) => {
          await handleSubmit(values);
          resetForm();
        }}
        validationSchema={RegistroUsuario} //validando el form
      >
        {({ errors, touched }) => {
          return (
            <Form>
              <Formm.Group className="m-2">
                <Formm.Label className="fw-bold">Email</Formm.Label>
                <Field
                  className={`form-control ${
                    errors.email && touched.email && "is-invalid"
                  } `}
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
                  className={`form-control ${
                    errors.documentId && touched.documentId && "is-invalid"
                  } `}
                  type="number"
                  name="documentId"
                  placeholder="Ingresa tu email"
                />
                {errors.documentId && touched.documentId ? (
                  <Error>{errors.documentId}</Error>
                ) : null}
              </Formm.Group>
              <Formm.Group className="m-2">
                <Formm.Label className="fw-bold">Nombre</Formm.Label>
                <Field
                  className={`form-control ${
                    errors.name && touched.name && "is-invalid"
                  } `}
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
                  className={`form-control ${
                    errors.lastName && touched.lastName && "is-invalid"
                  } `}
                  type="text"
                  name="lastName"
                  placeholder="Ingresa tu apellido"
                />
                {errors.lastName && touched.lastName ? (
                  <Error>{errors.lastName}</Error>
                ) : null}
              </Formm.Group>
              <Formm.Group className="m-2">
                <Formm.Label className="fw-bold">Nombre completo</Formm.Label>
                <Field
                  className={`form-control ${
                    errors.fullName && touched.fullName && "is-invalid"
                  } `}
                  type="text"
                  name="fullName"
                  placeholder="Ingresa tu nombre completo"
                />
                {errors.fullName && touched.fullName ? (
                  <Error>{errors.fullName}</Error>
                ) : null}
              </Formm.Group>

              <Formm.Group className="m-2">
                <Formm.Label className="fw-bold">clave</Formm.Label>
                <Field
                  className={`form-control ${
                    errors.password && touched.password && "is-invalid"
                  } `}
                  type="text"
                  name="password"
                  placeholder="Ingresa tu clave"
                />
                {errors.password && touched.password ? (
                  <Error>{errors.password}</Error>
                ) : null}
              </Formm.Group>
              <Modal.Footer>
                <Button variant="primary">Actualizar</Button>
                <Button variant="secondary" onClick={handleClose}>
                  Cerrar
                </Button>
              </Modal.Footer>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
export default ActualizarUsuario;
