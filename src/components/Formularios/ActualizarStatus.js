import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Formm from "react-bootstrap/Form";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Error from "../Error";

const ActualizarStatus = ({ setShow, estadoEditar }) => {
  const handleClose = () => setShow(false);

  const EditarStatus = Yup.object().shape({
    status: Yup.string().required("Ingresa el estado del usuario"),
  });

  //const valores iniciales
  const initialValues = {
    status: estadoEditar.status,
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={EditarStatus} //validando el form
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
                  <option value="active">Activo</option>
                  <option value="pending">Inactivo</option>
                </Field>
                {errors.status && touched.status ? (
                  <Error>{errors.status}</Error>
                ) : null}
              </Formm.Group>
              <Modal.Footer>
                <Button variant="warning">Editar</Button>
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

export default ActualizarStatus;
