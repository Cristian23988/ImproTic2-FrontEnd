import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Formm from "react-bootstrap/Form";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Error from "../Error";
import ObjetivosEspecificos from "../Tables/ObjetivosEspecificos";
import Alertify from 'alertify.js';
import { useMutation, gql } from '@apollo/client';


const UPDATEPROJECT =  gql`
  mutation Mutation($id: ID!, $input: UpdateInputPro!) {
    updateProject(_id: $id, input: $input) {
      _id
    }
  }
`;
const ActualizarStatus = ({ setShowEditar, proyectoEditar, user }) => {

  const [updateProject] = useMutation(UPDATEPROJECT);


  const handleClose = () => setShowEditar(false);
  let idUser=proyectoEditar._id;
  const handleSubmit = (values) => {
    values.specificObjectives=values.specificObjectives.split(';')
    //actualizar proyecto
    updateProject({
      variables:{
        id:idUser,
        input:{
          ...values
        }
      }
    }).then(() => {
      Alertify.success("Proyecto modificado con Exito!");
    }).catch(() => {
      Alertify.error("Hubo un error!");
    })  
    handleClose();
  };
  
  const ActualizarProyecto = Yup.object().shape({
    name: Yup.string().required("El nombre es obligatorio!"),
    generalObjective:Yup.string().required("El objetivo general es obligatorio!"),
    specificObjectives: Yup.string().required("Los objetivos especificos son obligatorios!"),
    budget:Yup.number().required("El presupuestoes obligatorio!"),
    status: Yup.string().required("El Estado es obligatorio!"),
    phase: Yup.string().required("La fase es obligatoria")
  });
  //const valores iniciales
  const initialValues = {
    name:proyectoEditar.name,
    generalObjective: proyectoEditar.generalObjective,
    specificObjectives:proyectoEditar.specificObjectives,
    budget: proyectoEditar.budget,
    startDate: proyectoEditar.startDate,
    endDate: proyectoEditar.endDate,
    leader_id: user.userSesion._id,
    status: proyectoEditar.status,
    phase: proyectoEditar.phase,
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          handleSubmit(values);        
        }}
        validationSchema={ActualizarProyecto} //validando el form
      >
        {({ errors, touched }) => {
          return (
            <Form>
              {user.userSesion.role ==='leader' && user.userSesion.role!== 'student' ? (
              <>              
                <Formm.Group>
                  <Formm.Label>Nombre</Formm.Label>
                  <Field
                    className={`form-control ${
                      errors.name && touched.name && "is-invalid"
                    } `}
                    type="text"
                    placeholder="Nombre del proyecto"
                    name="name"
                  />
                  {errors.name && touched.name ? (
                    <Error>{errors.name}</Error>
                  ) : null}
                </Formm.Group>
                <Formm.Group>
                  <Formm.Label>Objetivo general</Formm.Label>
                  <Field
                    className={`form-control ${
                      errors.generalObjective && touched.generalObjective && "is-invalid"
                    } `}
                    type="text"
                    placeholder="Objetivo general del proyecto"
                    name="generalObjective"
                  />
                  {errors.generalObjective && touched.generalObjective ? (
                    <Error>{errors.generalObjective}</Error>
                  ) : null}
                </Formm.Group>
                <Formm.Group>
                  <Formm.Label>Objetivos especificos</Formm.Label>
                  <Field
                    className={`form-control ${
                      errors.specificObjectives && touched.specificObjectives && "is-invalid"
                    } `}
                    as="textarea"
                    placeholder="Objetivos especificos del proyecto"
                    name="specificObjectives"
                  />
                  {errors.specificObjectives && touched.specificObjectives ? (
                    <Error>{errors.specificObjectives}</Error>
                  ) : null}

                </Formm.Group>
                <Formm.Group className="mt-2">
                    <ObjetivosEspecificos                  
                      specificObjectives={proyectoEditar.specificObjectives}                
                    />
                </Formm.Group>
                <Formm.Group>
                  <Formm.Label>Presupuesto </Formm.Label>
                  <Field
                    className={`form-control ${
                      errors.budget && touched.budget && "is-invalid"
                    } `}
                    type="number"
                    placeholder="Presupuesto del proyecto"
                    name="budget"
                  />
                  {errors.budget && touched.budget ? (
                    <Error>{errors.budget}</Error>
                  ) : null}
                </Formm.Group>
                <Formm.Group>
                  <Formm.Label>Lider id </Formm.Label>
                  <Field
                    className={`form-control ${
                      errors.leader_id && touched.leader_id && "is-invalid"
                    } `}
                    type="text"
                    placeholder="Id de lider"
                    name="leader_id"
                    disabled={true}
                  />
                  {errors.leader_id && touched.leader_id ? (
                    <Error>{errors.leader_id}</Error>
                  ) : null}
                </Formm.Group>
              </>
            ):(
              <>
                <Formm.Group>
                  <Formm.Label>Estado</Formm.Label>
                  <Field
                    className={`form-control ${
                      errors.status && touched.status && "is-invalid"
                    } `}
                    as="select"
                    name="status"
                  >
                    <option value=" ">--Seleccione una opcion--</option>
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
                    <option value=" ">--Seleccione una opcion--</option>
                    <option value="in_progress">En desarrollo</option>
                    <option value="ended">Terminado</option>
                    <option value="started">Comenzado</option>
                  </Field>
                  {errors.phase && touched.phase ? (
                    <Error>{errors.phase}</Error>
                  ) : null}
                </Formm.Group>
              </>
            )}
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
