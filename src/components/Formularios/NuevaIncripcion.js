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
      project_id
      user_id
      enrollmentDate
      egressDate
      project {
        _id
        name
      }
      student {
        _id
        documentId
      }
    }
  }
`;

const AllProjects = gql`
  query AllProjects {
    allProjects {
      _id
      name
    }
  }
`;
const initialValues = {
  project: "",
  student: "",
  status: "",
};
//Funcion para validar el formulario
const RegistroUsuario = Yup.object().shape({
  project: Yup.string().required("Selecciona un proyecto"),
  student: Yup.number().required("La identificacion es obligatoria"),
  status: Yup.string().required("El estado es obligatorio"),
});
const NuevaIncripcion = ({ setShow }) => {
  const [registerUser] = useMutation(nuevaIncripcion);

  const { data, loading: loadingProyect } = useQuery(AllProjects);

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          registerUser({
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
                  <option value="">--Selecciona un rol--</option>
                </Field>
                {errors.role && touched.role ? (
                  <Error>{errors.role}</Error>
                ) : null}
              </Formm.Group>

              <Formm.Group className="m-2">
                <Formm.Label className="fw-bold">Ustudiante</Formm.Label>
                <Field
                  className={`form-control ${
                    errors.student && touched.student && "is-invalid"
                  } `}
                  type="number"
                  name="student"
                  placeholder="Ingresa tu identificacion"
                />
                {errors.student && touched.student ? (
                  <Error>{errors.student}</Error>
                ) : null}
              </Formm.Group>

              <Formm.Group className="m-2">
                <Formm.Label className="fw-bold">Nombre</Formm.Label>
                <Field
                  className={`form-control ${
                    errors.status && touched.status && "is-invalid"
                  } `}
                  type="text"
                  name="status"
                  placeholder="Ingresa tu nombre"
                />
                {errors.status && touched.status ? (
                  <Error>{errors.status}</Error>
                ) : null}
              </Formm.Group>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
export default NuevaIncripcion;
/* {!loadingProyect &&
                    data.AllProjects.map(({ _id, name }, index) => (
                      <option key={index} value={name}>
                        {name}
                      </option>
                    ))}*/
