import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Formm from "react-bootstrap/Form";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Error from "../Error";
import { useMutation, gql } from "@apollo/client";
import Alertify from "alertify.js";
const UpdateEnrollment = gql`
  mutation Mutation($id: ID!, $input: UpdateInputEn!) {
    updateEnrollment(_id: $id, input: $input) {
      _id
    }
  }
`;
const ActuailizarIncripciones = ({ setShow, estadoEditar }) => {
  const handleClose = () => setShow(false);
  const [updateStatus] = useMutation(UpdateEnrollment);
  console.log(updateStatus);
  const editarEstado = Yup.object().shape({
    status: Yup.string().required("El estado es obligadorio !"),
  });
  let idincripcion = estadoEditar._id;
  const initialValues = {
    status: estadoEditar.status,
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={editarEstado} //validando el form
        onSubmit={(values) => {
          updateStatus({
            variables: {
              id: idincripcion,
              input: {
                ...values,
              },
            },
          })
            .then(() => {
              Alertify.success("Usuario modificado con Exito!");
            })
            .catch(() => {
              Alertify.error("Hubo un error!");
            });
          handleClose();
        }}
      >
        {({ errors, touched }) => {
          return (
            <Form>
              <Formm.Group>
                <Formm.Label>Estado</Formm.Label>
                <Field
                  className={`form-control ${
                    errors.status && touched.status && "is-invalid"
                  } `}
                  as="select"
                  name="status"
                >
                  <option value="">--Seleccione una opcion--</option>
                  <option value="acepted">Activo</option>
                  <option value="rejected">Inactivo</option>
                </Field>
                {errors.status && touched.status ? (
                  <Error>{errors.status}</Error>
                ) : null}
              </Formm.Group>
              <Modal.Footer>
                <Button variant="warning" type="submit">
                  Editar cambios
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

export default ActuailizarIncripciones;
