import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Formm from "react-bootstrap/Form";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Error from "../Error";

const ActualizarStatus = ({ setShowEditar, proyectoEditar }) => {
  const handleSubmit = async (values) => {
    const url = "http://localhost:4000/proyectos";
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

  const handleClose = () => setShowEditar(false);
  const ActualizarProyecto = Yup.object().shape({
    status: Yup.string().required("El Estado es obligatorio!"),
    phase: Yup.string().required("La fase es obligatoria"),
  });
  //const valores iniciales
  const initialValues = {
    status: proyectoEditar.status,
    phase: proyectoEditar.phase,
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, { resetForm }) => {
          await handleSubmit(values);
          resetForm();
        }}
        validationSchema={ActualizarProyecto} //validando el form
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
                  <option value="inactive">Inactivo</option>
                </Field>
                {errors.status && touched.status ? (
                  <Error>{errors.status}</Error>
                ) : null}
              </Formm.Group>
              <Formm.Group>
                <Formm.Label>Fase</Formm.Label>
                <Field
                  className={`form-control ${
                    errors.phase && touched.phase && "is-invalid"
                  } `}
                  as="select"
                  name="phase"
                >
                  <option value="">--Seleccione una opcion--</option>
                  <option value="in_progress">En desarrollo</option>
                  <option value="ended">Terminado</option>
                  <option value="started">Comenzado</option>
                </Field>
                {errors.phase && touched.phase ? (
                  <Error>{errors.phase}</Error>
                ) : null}
              </Formm.Group>
              <Modal.Footer>
                <Button variant="warning" type="submit">
                  Guardar cambios
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

export default ActualizarStatus;
