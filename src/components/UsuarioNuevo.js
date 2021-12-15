import Formm from "react-bootstrap/Form";
import IconEmail from "../images/Icons/IconEmail";
import IconEstudiantes from "../images/Icons/IconEstudiantes";
import IconRol from "../images/Icons/IconRol";
import IconClave from "../images/Icons/IconClave";
import IconNombre from "../images/Icons/IconNombre";
import IconIdentificacion from "../images/Icons/IconIdentificacion";
import Boton from "./Buttons";
import { useMutation, useQuery, gql } from '@apollo/client';

import Error from "./Error";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import IconRegistrer from "../images/Icons/IconRegistrer";
import Alertify from "alertify.js";


const REGISTERUSER = gql`
  mutation RegisterUser($input: RegisterInputUs!) {
    registerUser(input: $input) {
      _id
    }
  }
`;

const ROLES = gql `
  query Query {
    roles {
      code
      value
    }
  }
`;
 //const valores iniciales
 const initialValues = {
  email: "",
  documentId:"",
  name: "",
  lastName: "",
  role: "",
  password: "",
};
//Funcion para validar el formulario
const RegistroUsuario = Yup.object().shape({
  email: Yup.string()
    .email("Email no valido")
    .required("El email es obligatorio!"),
  documentId: Yup.number().required("La identificacion es obligatoria"),
  name: Yup.string().required("El nombre es obligatorio"),
  lastName: Yup.string().required("El apellido es obligatorio"),
  role: Yup.string().required("El rol es obligatorio"),
  password: Yup.string().required("La clave es obligatoria"),
});
const UsuarioNuevo = () => {

  const [registerUser] = useMutation(REGISTERUSER);
  const { data, loading: loadingRoles } = useQuery(ROLES);

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          registerUser({
            variables:{
              input:{
                ...values
              }
            }
          }).then(() => {
            Alertify.success("Usuario Registrado Con Exito!");
            resetForm();
          }).catch(() => {
            Alertify.error("Hubo un error!");
          })
        }}
        validationSchema={RegistroUsuario} //validando el form
      >
        {({ errors, touched }) => {
          return (
            <Form className="mt-3 border p-3 pt-4 bg-light shadow  w-50 mt-2">
              <Formm.Group className="m-2">
                <Formm.Label className="fw-bold">
                  <IconEmail /> Email
                </Formm.Label>
                <Field
                  className={`form-control ${
                    errors.email && touched.email && "is-invalid"
                  } `}
                  type="email"
                  name="email"
                  placeholder="Ingresa tu email"
                />
                {errors.email && touched.email && "is-invalid" ? (
                  <Error>{errors.email}</Error>
                ) : null}
              </Formm.Group>

              <Formm.Group className="m-2">
                <Formm.Label className="fw-bold">
                  <IconIdentificacion /> Identificacion
                </Formm.Label>
                <Field
                  className={`form-control ${
                    errors.documentId && touched.documentId && "is-invalid"
                  } `}
                  type="number"
                  name="documentId"
                  placeholder="Ingresa tu identificacion"
                />
                {errors.documentId && touched.documentId ? (
                  <Error>{errors.documentId}</Error>
                ) : null}
              </Formm.Group>

              <Formm.Group className="m-2">
                <Formm.Label className="fw-bold">
                  <IconNombre /> Nombre
                </Formm.Label>
                <Field
                  className={`form-control ${
                    errors.name && touched.name && "is-invalid"
                  } `}
                  type="text"
                  name="name"
                  placeholder="Ingresa tu nombre"
                />
                {errors.name && touched.name ? (
                  <Error>{errors.name}</Error>
                ) : null}
              </Formm.Group>

              <Formm.Group className="m-2">
                <Formm.Label className="fw-bold">
                  <IconEstudiantes /> Apellido
                </Formm.Label>
                <Field
                  className={`form-control ${
                    errors.lastName && touched.lastName && "is-invalid"
                  } `}
                  type="text"
                  name="lastName"
                  placeholder="Ingresa tu apellido"
                />
                {errors.lastName && touched.lastName ? (
                  <Error>{errors.lastName}</Error>
                ) : null}
              </Formm.Group>
              <Formm.Group className="m-2">
                <Formm.Label className="fw-bold">
                  <IconRol /> Rol
                </Formm.Label>
                <Field
                  as="select"
                  name="role"
                  className={`form-control ${
                    errors.role && touched.role && "is-invalid"
                  } `}
                >
                  <option value="">--Selecciona un rol--</option>
                  {!loadingRoles && data.roles.map(({ code, value}, index) => <option key={index} value={code}>{value}</option>)}
                </Field>
                {errors.role && touched.role ? (
                  <Error>{errors.role}</Error>
                ) : null}
              </Formm.Group>

              <Formm.Group className="m-3">
                <Formm.Label className="fw-bold">
                  <IconClave /> Clave
                </Formm.Label>
                <Field
                  className={`form-control ${
                    errors.password && touched.password && "is-invalid"
                  } `}
                  type="password"
                  name="password"
                  placeholder="Ingresa tu nombre clave"
                />
                {errors.password && touched.password ? (
                  <Error>{errors.password}</Error>
                ) : null}
              </Formm.Group>
              <Formm.Group className="m-3">
                <Boton variante="primary" tipo="submit" clase="w-100">
                  <IconRegistrer /> Registrarse
                </Boton>
              </Formm.Group>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default UsuarioNuevo;
