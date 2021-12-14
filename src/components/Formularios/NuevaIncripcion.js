import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Formm from "react-bootstrap/Form";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Error from "../Error";
import Alertify from "alertify.js";
import { useMutation, useQuery, gql } from "@apollo/client";
const NuevaIncripcion = () => {
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
  const proyectos = gql`
    query Query($id: ID!) {
      projectById(_id: $id) {
        _id
        name
      }
    }
  `;
  const intialvalues = {
    project_id: "",
    user_id: "",
    enrollmentDate: "",
    project: "",
    student: "",
  };
  const validacion = Yup.object().shape({
    project_id: Yup.string().required("no se"),
    user_id: Yup.string().required("Campo Obligatorio"),
    enrollmentDate: Yup.date("Ingresa una fecha"),
    project: Yup.string().required("Selecciona un proyecto"),
    student: Yup.string().required("campo obligatorio"),
  });
  return (
    <>
      <Formik initialValues={intialvalues} validationSchema={validacio}>
        {({ errors, touched }) => {
          return (
            <Form>
              <Formm.Group className="m-2">
                <Form.Label>Proyecto</Form.Label>
                <Field
                  type="text"
                  name="project_id"
                  placeholde="Nombre Proyecto"
                  className={`form-control ${
                    errors.project_id && touched.project_id && "is-invalid"
                  } `}
                />
                {errors.project_id && touched.project_id ? (
                  <Error>{errors.project_id}</Error>
                ) : null}
              </Formm.Group>
              <Formm.Group className="m-2">
                <Form.Label>Usuario </Form.Label>
                <Field
                  type="text"
                  name="user_id"
                  placeholde="Nombre Proyecto"
                  className={`form-control ${
                    errors.user_id && touched.user_id && "is-invalid"
                  } `}
                />
                {errors.user_id && touched.user_id ? (
                  <Error>{errors.user_id}</Error>
                ) : null}
              </Formm.Group>
              <Formm.Group className="m-2">
                <Form.Label>Fecha</Form.Label>
                <Field
                  type="date"
                  name="enrollmentDate"
                  placeholde="Nombre Proyecto"
                  className={`form-control ${
                    errors.enrollmentDate &&
                    touched.enrollmentDate &&
                    "is-invalid"
                  } `}
                />
                {errors.enrollmentDate && touched.enrollmentDate ? (
                  <Error>{errors.enrollmentDate}</Error>
                ) : null}
              </Formm.Group>

              <Formm.Group className="m-2">
                <Formm.Label className="fw-bold">
                  <IconRol /> Proyecto
                </Formm.Label>
                <Field
                  as="select"
                  name="project"
                  className={`form-control ${
                    errors.project && touched.project && "is-invalid"
                  } `}
                >
                  <option value="">--Selecciona un rol--</option>
                  {!loadingRoles &&
                    data.roles.map(({ code, value }, index) => (
                      <option key={index} value={code}>
                        {value}
                      </option>
                    ))}
                </Field>
                {errors.project && touched.project ? (
                  <Error>{errors.project}</Error>
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
