import Button from "react-bootstrap/Button";
import ObjetivosEspecificos from "./ObjetivosEspecificos";
import VentanaModal from "../VentanaModal";
import { useState } from "react";

const RecordProyectos = ({
  dato,
  setProyectoEditar,
  setShowEditar,
  contador,
  user,
}) => {
  const [showObjetivos, setShowObjetives] = useState(false);

  const {
    name,
    generalObjective,
    specificObjectives,
    budget,
    startDate,
    endDate,
    status,
    phase,
    leader,
    _id,
  } = dato;

  const formatearFecha = (fecha) => {
    let fechaNueva = parseInt(fecha);
    const opciones = {
      year: "numeric",
      month: "long",
      day: "2-digit",
    }; 
    return new Date(fechaNueva).toLocaleString("es-ES", opciones);
  };
  //funcion para añadir ; al final de cada objetivo especifico
  const separarStringCaracter = (objetivos) => {
    let cadena = objetivos.toString();
    let cadenaNueva = "";
    //evaluamos si la cadena tiene comas
    for (let i = 0; i < cadena.length; i++) {
      let caracter = cadena.charAt(i);
      if (caracter === ",") {
        caracter = ";";
      }
      cadenaNueva += caracter;
    }
    setProyectoEditar((dato) => {
      const nuevoDato = { ...dato };
      nuevoDato.specificObjectives = cadenaNueva;
      return nuevoDato;
    });
    return cadenaNueva;
  };
  //funcion para pasar info al modal de editar
  const editarProyecto = (id) => {
    if (id === dato._id) {
      setProyectoEditar(dato);
      separarStringCaracter(specificObjectives);
    }
    setShowEditar(true);
  };

  if (
    user.userSesion.role === "admin" ||
    (user.userSesion.role === "leader" && user.userSesion._id === leader._id) ||
    user.userSesion.role === "student"
  ) {
    return (
      <>
        <tr>
          <td>{contador}</td>
          <td>{name}</td>
          <td>{generalObjective}</td>
          <td>
            <Button variant="primary" onClick={() => setShowObjetives(true)}>
              Ver
            </Button>
          </td>
          <td>{budget}</td>
          <td>{formatearFecha(startDate)}</td>
          <td>{formatearFecha(endDate)}</td>
          <td>{leader.name}</td>
          <td>{status}</td>
          <td>{phase}</td>
          {user.userSesion.role==='admin' || user.userSesion.role==='leader' ? (
            <td>
              <Button variant='warning' onClick={()=>editarProyecto(_id)}>Editar</Button>
            </td>
          ):null}   
        </tr>
        <VentanaModal
          titulo="Objetivos especificos"
          setShow={setShowObjetives}
          show={showObjetivos}
        >
          <ObjetivosEspecificos specificObjectives={specificObjectives} />
        </VentanaModal>
      </>
    );
  } else if (
    user.userSesion._id !== leader._id &&
    user.userSesion.role === "leader"
  ) {
    return null;
  }
};
export default RecordProyectos;
