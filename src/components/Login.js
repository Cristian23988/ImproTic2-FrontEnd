import { Container } from "react-bootstrap";
import Boton from "./Buttons";
import IconEmail from "../images/Icons/IconEmail";
import IconClave from "../images/Icons/IconClave";
import IconLogin from "../images/Icons/IconLogin";
import Header from "./Header";
import Formm from "react-bootstrap/Form";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
// import { string } from "yup";
import Error from "./Error";
import Footer from './Footer';
import {useState} from 'react';

const Login = () => {
  const handleSubmit = (values) => {
    console.log("Arreglo" + values);
  };
  const inicioSesion = Yup.object().shape({
    email: Yup.string().email("Email no valido!").required("Ingresa tu email !"),
    clave: Yup.string().required("Ingresa tu clave !"),
  });
  const[claseErrorEmail, setClaseError]=useState('');
  const[claseErrorClave, setClaseErrorClave]=useState('');
  
  return (
    <>
      <Header />
      <Container className="d-flex justify-content-center align-items-center vh-100 ">
        <Formik
          initialValues={{
            email: "",
            clave: "",
          }}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
          validationSchema={inicioSesion}
        >
          {({ errors, touched }) => {
            return (
              <Form className="w-25  border p-5 bg-light shadow">
                <Formm.Group className="mb-3" controlId="formBasicEmail">
                  <Formm.Label className="fw-bold">
                    <IconEmail /> Email usuario
                  </Formm.Label>
                  <Field
                    type="email"
                    placeholder="Ingresa tu email"
                    name="email"
                    className={`form-control ${claseErrorEmail}`}
                  />
                  {errors.email && touched.email ? (
                    <Error>{errors.email}</Error>
                  ): null}
                  {errors.email && touched.email ? setClaseError('border border-danger border-2'):setClaseError('')}
                </Formm.Group>

                <Formm.Group className="mb-3" controlId="formBasicPassword">
                  <Formm.Label className="fw-bold">
                    <IconClave /> Clave
                  </Formm.Label>
                  <Field
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    name="clave"
                    className={`form-control ${claseErrorClave}`}
                  />
                  {errors.clave && touched.clave ? (
                    <Error>{errors.clave}</Error>
                  ) : null}
                  {errors.clave && touched.clave ? setClaseErrorClave('border border-danger border-2'):setClaseErrorClave('')}
                </Formm.Group>
                <Boton
                  variante="primary"
                  tipo="submit"
                  clase="w-100"
                >
                  <IconLogin/>{' '}Ingresar
                </Boton>
              </Form>
            );
          }}
        </Formik>
      </Container>
      <Footer/>
    </>
  );
};
export default Login;
