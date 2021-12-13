import Button from "react-bootstrap/Button";
import ObjetivosEspecificos from "./ObjetivosEspecificos";
import VentanaModal from "../VentanaModal";
import { useState } from "react";

const RecordProyectos = ({ dato, setProyectoEditar, setShowEditar }) => {
  const [showObjetivos, setShowObjetives] = useState(false);

  const {
    name,
    generalObjective,
    specificObjectives,
    budget,
    startDate,
    endDate,
    leader_id,
    status,
    phase,
    id,
  } = dato;
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
    console.log(typeof cadenaNueva);
    return cadenaNueva;
  };
  //funcion para pasar info al modal de editar
  const editarProyecto = (id) => {
    if (id === dato.id) {
      setProyectoEditar(dato);
      separarStringCaracter(specificObjectives);
    }
    setShowEditar(true);
  };

  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{generalObjective}</td>
        <td>
          <Button variant="primary" onClick={() => setShowObjetives(true)}>
            Ver
          </Button>
        </td>
        <td>{budget}</td>
        <td>{startDate}</td>
        <td>{endDate}</td>
        <td>{leader_id}</td>
        <td>{status}</td>
        <td>{phase}</td>
        <td>
          <Button variant="warning" onClick={() => editarProyecto(id)}>
            Editar
          </Button>
        </td>
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
};
export default RecordProyectos;
