import { Button } from "react-bootstrap";
import Formm from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Error from "../Error";
import { useMutation, gql } from "@apollo/client";
import Alertify from "alertify.js";
const updateObes = gql`
  mutation UpdateAdvance($id: ID!, $input: UpdateInputAd!) {
    updateAdvance(_id: $id, input: $input) {
      _id
    }
  }
`;
const ActualizarObservacion = ({ setDesc, descripcionEditar }) => {
  const handleClose = () => setDesc(false);
  const [updateObservacion] = useMutation(updateObes);
  const editarObservacion = Yup.object().shape({
    observations: Yup.string().required("La observacion es obligadorio !"),
  });
  let idobservacion = descripcionEditar._id;
  console.log(idobservacion);
  const initialValues = {
    observations: descripcionEditar.observations,
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={editarObservacion} //validando el form
        onSubmit={(values) => {
          updateObservacion({
            variables: {
              id: idobservacion,
              input: {
                ...values,
              },
            },
          })
            .then(() => {
              Alertify.success("Observacio modificado con Exito!");
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
                <Formm.Label>Observacion</Formm.Label>
                <Field
                  className={`form-control ${
                    errors.observations && touched.observations && "is-invalid"
                  } `}
                  as="textarea"
                  name="observations"
                  className="form-control"
                ></Field>
                {errors.observations && touched.observations ? (
                  <Error>{errors.observations}</Error>
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

export default ActualizarObservacion;
