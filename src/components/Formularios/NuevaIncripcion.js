import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Formm from "react-bootstrap/Form";
import { Formik, Form, Field } from "formik";
import React, { useEffect } from "react";
import * as Yup from "yup";
import Error from "../Error";
import Alertify from "alertify.js";
import Spinner from "./Spinner";
import { useMutation, useQuery, gql } from "@apollo/client";
const nuevaIncripcion = gql`
  mutation RegisterEnrollment($input: RegiInputEn!) {
    registerEnrollment(input: $input) {
      _id
    }
  }
`;

const AllProjects = gql`
  query Query {
    allProjects {
      _id
      name
    }
  }
`;

//Funcion para validar el formulario
const RegistroUsuario = Yup.object().shape({
  project: Yup.string().required("Selecciona un proyecto"),
  student: Yup.string().required("La identificacion es obligatoria"),
});

const NuevaIncripcion = ({ setShow, user }) => {
  const handleClose = () => setShow(false);
  const [regisIncripciones] = useMutation(nuevaIncripcion);
  const { data, loading: loadingProyect } = useQuery(AllProjects);
  const obtenerFecha = () => {
    let fechaHoy = "";
    let fechaActual = new Date();
    let year = fechaActual.getFullYear();
    let month = fechaActual.getMonth() + 1;
    let day = fechaActual.getDate();
    fechaHoy = year + "-" + month + "-" + day;
    return fechaHoy;
  };
  const initialValues = {
    project_id: "",
    user_id: user.userSesion._id,
    enrollmentDate: "",
    status: "reject",
    project: "",
    student: user.userSesion._id,
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          regisIncripciones({
            variables: {
              input: {
                ...values,
              },
            },
          })
            .then(() => {
              Alertify.success("Usuario Registrado Con Exito!");
              resetForm();
            })
            .catch(() => {
              Alertify.error("Hubo un error!");
            });
        }}
        validationSchema={RegistroUsuario} //validando el form
      >
        {({ errors, touched }) => {
          return (
            <Form className="mt-3">
              <Formm.Group className="m-2">
                <Formm.Label className="fw-bold">Proyecto</Formm.Label>
                <Field
                  as="select"
                  name="project"
                  className={`form-control ${
                    errors.project && touched.project && "is-invalid"
                  } `}
                >
                  <option value="">--Selecciona un proyecto--</option>
                  {!loadingProyect &&
                    data.allProjects.map(({ _id, name }, index) => (
                      <option key={_id} value={_id}>
                        {name}
                      </option>
                    ))}
                </Field>
                {errors.project && touched.project ? (
                  <Error>{errors.project}</Error>
                ) : null}
              </Formm.Group>

              <Modal.Footer className="mt-3">
                <Button variant="primary" type="submit">
                  Incribirme
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                  Cancelar
                </Button>
              </Modal.Footer>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
export default NuevaIncripcion;
