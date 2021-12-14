import { Container } from "react-bootstrap";
import Boton from "./Buttons";
import IconEmail from "../images/Icons/IconEmail";
import IconClave from "../images/Icons/IconClave";
import IconLogin from "../images/Icons/IconLogin";
import Header from "./Header";
import Formm from "react-bootstrap/Form";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Error from "./Error";
import Footer from "./Footer";
import { useNavigate } from 'react-router-dom';
import { useMutation, gql } from '@apollo/client';
import Alertify from "alertify.js";


const LOGIN = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password)
  }
`;

const inicioSesion = Yup.object().shape({
  email: Yup.string()
    .email("Email no valido!")
    .required("Ingresa tu email !"),
  password: Yup.string().required("Ingresa tu clave !"),
});

const Login = () => {

  const [loginUser] = useMutation(LOGIN);
  const navigate = useNavigate();

  const handleSubmit = values => {
    loginUser({
      variables: {
        ...values,
      }
    })
    .then(response => {
      Alertify.success("Login correcto!"); 
      sessionStorage.setItem('token', response.data.loginUser);
      sessionStorage.setItem('email', values.email)
      navigate('/menu/home');
    })
    .catch(() => Alertify.error("Hubo un error al iniciar sesion!"));
  }; 

  return (
    <>
      <Header />
      <Container className="d-flex justify-content-center align-items-center vh-100 ">
        <Formik
          initialValues={{
            email: "",
            password: "",
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
                    className={`form-control ${
                      errors.email && touched.email && "is-invalid"
                    }`}
                  />
                  {errors.email && touched.email ? (
                    <Error>{errors.email}</Error>
                  ) : null}
                </Formm.Group>

                <Formm.Group className="mb-3" controlId="formBasicPassword">
                  <Formm.Label className="fw-bold">
                    <IconClave /> Clave
                  </Formm.Label>
                  <Field
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    name="password"
                    className={`form-control ${
                      errors.password && touched.password && "is-invalid"
                    }`}
                  />
                  {errors.password && touched.password ? (
                    <Error>{errors.password}</Error>
                  ) : null}
                </Formm.Group>
                <Boton variante="primary" tipo="submit" clase="w-100">
                  <IconLogin /> Ingresar
                </Boton>
              </Form>
            );
          }}
        </Formik>
      </Container>
      <Footer />
    </>
  );
};
export default Login;
