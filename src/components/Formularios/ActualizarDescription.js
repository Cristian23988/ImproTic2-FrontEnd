import { Button } from "react-bootstrap";
import Formm from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Error from "../Error";
import { useMutation, gql } from "@apollo/client";
import Alertify from "alertify.js";
const updateStatus = gql`
  mutation UpdateAdvance($id: ID!, $input: UpdateInputAd!) {
    updateAdvance(_id: $id, input: $input) {
      _id
    }
  }
`;

const ActualizarDescription = ({ setShow, estado }) => {
  const handleClose = () => setShow(false);
  const [updateDescripcion] = useMutation(updateStatus);
  const editarEstado = Yup.object().shape({
    description: Yup.string().required("El estado es obligadorio !"),
  });
  let iddescripcion = estado._id;
  console.log(iddescripcion);
  const initialValues = {
    description: estado.description,
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={editarEstado} //validando el form
        onSubmit={(values) => {
          updateDescripcion({
            variables: {
              id: iddescripcion,
              input: {
                ...values,
              },
            },
          })
            .then(() => {
              Alertify.success("Descripcion modificado con Exito!");
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
                  as="textarea"
                  name="description"
                  className="form-control"
                ></Field>
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

export default ActualizarDescription;
