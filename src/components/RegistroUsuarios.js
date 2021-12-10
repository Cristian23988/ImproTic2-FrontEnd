import { Button, Container } from "react-bootstrap";
import Formm from "react-bootstrap/Form";
import IconEmail from "../images/Icons/IconEmail";
import IconEstudiantes from "../images/Icons/IconEstudiantes";
import IconUsuarios from "../images/Icons/IconUsuarios";
import IconRol from "../images/Icons/IconRol";
import IconClave from "../images/Icons/IconClave";
import IconNombre from "../images/Icons/IconNombre";
import Boton from "./Buttons";
import Header from "./Header";
import Error from "./Error";
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Footer from './Footer';
import IconRegistrer from "../images/Icons/IconRegistrer";

const RegistroUsuarios = () => {
  //Funcion para el sumbit

  //Prueba para una api con los datos
  const handleSubmit = async (values) => {
    const url = "http://localhost:4000/usuarios";
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

  //Funcion para validar el formulario
  const RegistroUsuario = Yup.object().shape({
    email: Yup.string()
      .email("Email no valido")
      .required("El email es obligatorio!"),
    nombre: Yup.string().required("El nombre es obligatorio"),
    apellido: Yup.string().required("El apellido es obligatorio"),
    nombrecompleto: Yup.string().required("El nombre completo es obligatorio"),
    rol: Yup.string().required("El rol es obligatorio"),
    clave: Yup.string().required("La clave es obligatoria"),
  });

  const[claseErrorEmail, setClaseError]=useState('');
  const[claseErrorClave, setClaseErrorClave]=useState('');
  const[claseErrorNombre, setClaseErrorNombre]=useState('');
  const[claseErrorApellido, setClaseErrorApellido]=useState('');
  const[claseErrorNomCom, setClaseErrorNomCom]=useState('');
  const[claseErrorRol, setClaseErrorRol]=useState('');
  return (
    <>
      <Header />
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Formik
          initialValues={{
            email: "",
            nombre: "",
            apellido: "",
            nombrecompleto: "",
            rol: "",
            clave: "",
          }}
          onSubmit={async (values, { resetForm }) => {
            await handleSubmit(values);
            resetForm();
          }}
          validationSchema={RegistroUsuario} //validando el form
        >
          {({ errors, touched }) => {
            return (
              <Form className="mt-3 border p-3 pt-4 bg-light shadow "  style={{width: '40%'}}>
                <Formm.Group className="m-3">
                  <Formm.Label className="fw-bold">
                    <IconEmail/>{' '}
                    Email
                  </Formm.Label>
                  <Field
                    className={`form-control ${claseErrorEmail}`}
                    type="email"
                    name="email"
                    placeholder="Ingresa tu email"
                  />
                  {errors.email && touched.email ? (
                    <Error>{errors.email}</Error>
                  ) : null}
                  {errors.email && touched.email ? setClaseError('border border-danger border-2'):setClaseError('')}
                </Formm.Group>

                <Formm.Group className="m-3">
                  <Formm.Label className="fw-bold">
                    <IconNombre/>{' '}
                    Nombre
                  </Formm.Label>
                  <Field
                    className={`form-control ${claseErrorNombre}`}
                    type="text"
                    name="nombre"
                    placeholder="Ingresa tu nombre"
                  />
                  {errors.nombre && touched.nombre ? (
                    <Error>{errors.nombre}</Error>
                  ) : null}
                  {errors.nombre && touched.nombre ? setClaseErrorNombre('border border-danger border-2'):setClaseErrorNombre('')}
                </Formm.Group>

                <Formm.Group className="m-3">
                  <Formm.Label className="fw-bold">
                    <IconEstudiantes/>{' '}
                    Apellido
                  </Formm.Label>
                  <Field
                    className={`form-control ${claseErrorApellido}`}
                    type="text"
                    name="apellido"
                    placeholder="Ingresa tu apellido"
                  />
                  {errors.apellido && touched.apellido ? (
                    <Error>{errors.apellido}</Error>
                  ) : null}
                  {errors.apellido && touched.apellido ? setClaseErrorApellido('border border-danger border-2'):setClaseErrorApellido('')}
                </Formm.Group>
                <Formm.Group className="m-3">
                  <Formm.Label className="fw-bold">
                    <IconUsuarios/>{' '}
                    Nombre Completo
                  </Formm.Label>
                  <Field
                    className={`form-control ${claseErrorNomCom}`}
                    type="text"
                    name="nombrecompleto"
                    placeholder="Ingresa tu nombre completo"
                  />
                  {errors.nombrecompleto && touched.nombrecompleto ? (
                    <Error>{errors.nombrecompleto}</Error>
                  ) : null}
                  {errors.nombrecompleto && touched.nombrecompleto ? setClaseErrorNomCom('border border-danger border-2'):setClaseErrorNomCom('')}
                </Formm.Group>

                <Formm.Group className="m-3">
                  <Formm.Label className="fw-bold">
                   <IconRol/>{' '}
                    Rol
                  </Formm.Label>
                  <Field as="select" name="rol" className={`form-control ${claseErrorRol}`}>
                    <option value="">--Selecciona un rol--</option>
                    <option value="administrador">Administrador</option>
                    <option value="estudiante">Estudiante</option>
                    <option value="lider">Lider</option>
                  </Field>
                  {errors.rol && touched.rol ? (
                    <Error>{errors.rol}</Error>
                  ) : null}
                  {errors.rol && touched.rol ? setClaseErrorRol('border border-danger border-2'):setClaseErrorRol('')}
                </Formm.Group>

                <Formm.Group className="m-3">
                  <Formm.Label className="fw-bold">
                    <IconClave/>{' '}
                    Clave
                  </Formm.Label>
                  <Field
                    className={`form-control ${claseErrorClave}`}
                    type="password"
                    name="clave"
                    placeholder="Ingresa tu nombre clave"
                  />
                  {errors.clave && touched.clave ? (
                    <Error>{errors.clave}</Error>
                  ) : null}
                  {errors.clave && touched.clave ? setClaseErrorClave('border border-danger border-2'):setClaseErrorClave('')}
                </Formm.Group>
                <Formm.Group className="m-3">
                  <Boton
                    variante="primary"
                    tipo="submit"
                    clase="w-100"
                  >
                    <IconRegistrer/>{' '}Registrarse
                  </Boton>
                </Formm.Group>
              </Form>
            );
          }}
        </Formik>
      </Container>
      <Footer/>
    </>
  );
};
export default RegistroUsuarios;
