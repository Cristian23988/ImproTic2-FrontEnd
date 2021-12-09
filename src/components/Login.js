import { Container } from "react-bootstrap";
import Boton from "./Buttons";
import IconEmail from "../images/Icons/IconEmail";
import IconClave from "../images/Icons/IconClave";
import Header from "./Header";
import Formm from "react-bootstrap/Form";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { string } from "yup";
import Error from "./Error";
const Login = () => {
  const handleSubmit = (values) => {
    console.log("Arreglo" + values);
  };
  const inicioSesion = Yup.object().shape({
    email: Yup.string().email("Email no valiod").required("Ingresa tu email !"),
    clave: Yup.string().required("Ingresa tu clave !"),
  });
  return (
    <>
      <Header />
      <Container className="d-flex justify-content-center align-items-center">
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
              <Form className="w-25 mt-5 border p-5 bg-light shadow">
                <Formm.Group className="mb-3" controlId="formBasicEmail">
                  <Formm.Label className="fw-bold">
                    <IconEmail /> Email usuario
                  </Formm.Label>
                  <Field
                    type="email"
                    placeholder="Ingresa tu email"
                    name="email"
                    className="form-control"
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
                    name="clave"
                    className="form-control"
                  />
                  {errors.clave && touched.clave ? (
                    <Error>{errors.clave}</Error>
                  ) : null}
                </Formm.Group>
                <Boton
                  variante="primary"
                  tipo="submit"
                  clase="w-100"
                  valor="Ingresar"
                />
              </Form>
            );
          }}
        </Formik>
      </Container>
    </>
  );
};
export default Login;
