import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Formm from "react-bootstrap/Form";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Error from "../Error";
import Alertify from 'alertify.js';

const NuevoProyecto=({ setShowNuevo })=>{
    const handleClose = () => setShowNuevo(false);
    const handleSubmit = async (values) => {
        values.specificObjectives=values.specificObjectives.split(';')
        const url = 'http://localhost:4000/projectos';
        const resultado = await fetch(url, {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
            "Content-Type": "application/json",
            },
        });
        const res = await resultado.json(); 
        //alertify

        Alertify.success('Proyecto Creado con exito!');
        handleClose(); 
        console.log(res)
    };
    //funcion para obtener la fecha actual
    const obtenerFecha=()=>{
        let fechaHoy='';
        let fechaActual=new Date();
        let year=fechaActual.getFullYear();
        let month=fechaActual.getMonth();
        let day=fechaActual.getDate();
        fechaHoy=year+'-'+month+'-'+day;
        return fechaHoy;
    }
    
    const nuevoProyecto = Yup.object().shape({
      name: Yup.string().required("El nombre es obligatorio!"),
      generalObjective:Yup.string().required("El objetivo general es obligatorio!"),
      specificObjectives: Yup.string().required("Los objetivos especificos son obligatorios!"),
      budget:Yup.number().required("El presupuestoes obligatorio!"),
      endDate:Yup.date().required("La fecha de fin es obligatoria"),
      leaderboard:Yup.string().required("El lider es obligatorio!")
    });
    //const valores iniciales
    const initialValues = {
      name:"",
      generalObjective: "",
      specificObjectives:"",
      budget:"",
      startDate: "",
      endDate: "",
      leader_id:"Alejo",
      status: "inactive",
      phase: "started",
    };
   
    return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, { resetForm}) => {
          await handleSubmit(values);
          resetForm();
        }}
        validationSchema={nuevoProyecto} //validando el form
      >
        {({ errors, touched }) => {
          return (
            <Form>
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
                  placeholder="Objetivos especificos del proyecto. digitelos separados por ';' "
                  name="specificObjectives"
                />
                {errors.specificObjectives && touched.specificObjectives ? (
                  <Error>{errors.specificObjectives}</Error>
                ) : null}

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
                <Formm.Label>Fecha de inicio</Formm.Label>
                <Field
                  className={`form-control ${
                    errors.startDate && touched.startDate && "is-invalid"
                  } `}
                  type="date"
                  name="startDate"
                />
                {errors.startDate && touched.startDate ? (
                  <Error>{errors.startDate}</Error>
                ) : null}
              </Formm.Group>
              <Formm.Group>
                <Formm.Label>Fecha de fin</Formm.Label>
                <Field
                  className={`form-control ${
                    errors.endDate && touched.endDate && "is-invalid"
                  } `}
                  type="date"
                  name="endDate"
                />
                {errors.endDate && touched.endDate ? (
                  <Error>{errors.endDate}</Error>
                ) : null}
              </Formm.Group>
              <Formm.Group>
                <Formm.Label>Lider de proyecto</Formm.Label>
                <Field
                  className={`form-control ${
                    errors.leader_id && touched.leader_id && "is-invalid"
                  } `}
                  type="text"
                  name="leader_id"
                />
                {errors.leader_id && touched.leader_id ? (
                  <Error>{errors.leader_id}</Error>
                ) : null}
              </Formm.Group>
              <Modal.Footer>
                <Button variant="primary" type="submit">
                  Agregar proyecto
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

}
export default NuevoProyecto;