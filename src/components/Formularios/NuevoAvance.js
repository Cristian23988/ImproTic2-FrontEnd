import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Formm from "react-bootstrap/Form";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Error from "../Error";
import Alertify from "alertify.js";
import { useMutation, useQuery, gql } from "@apollo/client";
import Boton from "../Buttons";
const RegisterAdvance = gql`
  mutation RegisterAdvance($input: RegisterInputAd!) {
    registerAdvance(input: $input) {
      project_id
      description
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
const validarAvance = Yup.object().shape({
  project_id: Yup.string().required("Selecciona un proyecto"),
  description: Yup.string().required("Ingresa una descripcion"),
});

const NuevoAvance = ({ setavance }) => {
  const handleClose = () => setavance(false);
  const [regisIncripciones] = useMutation(RegisterAdvance);
  const { data, loading: loadingProyect } = useQuery(AllProjects);

  const initialValues = {
    project_id: "",
    description: "",
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
              Alertify.success("Avance Registrado Con Exito!");
              resetForm();
            })
            .catch(() => {
              Alertify.error("Hubo un error!");
            });
        }}
        validationSchema={validarAvance} //validando el form
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
                        {_id}
                      </option>
                    ))}
                </Field>
                {errors.project_id && touched.project_id ? (
                  <Error>{errors.project_id}</Error>
                ) : null}
              </Formm.Group>
              <Formm.Group className="m-2">
                <Formm.Label className="fw-bold">Descripcion</Formm.Label>
                <Field
                  className={`form-control ${
                    errors.description && touched.description && "is-invalid"
                  } `}
                  type="description"
                  name="description"
                  placeholder="Ingresa tu descripcion"
                />
                {errors.description && touched.description ? (
                  <Error>{errors.description}</Error>
                ) : null}
              </Formm.Group>

              <Modal.Footer className="mt-3">
                <Button variant="primary" type="submit">
                  Registrar Avance
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

export default NuevoAvance;
