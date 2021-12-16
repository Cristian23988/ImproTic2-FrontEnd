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
  project_id: Yup.string().required("Selecciona un proyecto"),
});

const NuevaIncripcion = ({ setShow, user }) => {
  const handleClose = () => setShow(false);
  const [regisIncripciones] = useMutation(nuevaIncripcion);
  const { data, loading: loadingProyect } = useQuery(AllProjects);

  const initialValues = {
    project_id: "",
    user_id: user.userSesion._id,
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
              console.log("Hola");
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
                  name="project_id"
                  className={`form-control ${
                    errors.project_id && touched.project_id && "is-invalid"
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
                {errors.project_id && touched.project_id ? (
                  <Error>{errors.project_id}</Error>
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
