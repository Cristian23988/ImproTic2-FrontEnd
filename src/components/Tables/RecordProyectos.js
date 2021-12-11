import Button from "react-bootstrap/Button";
import ObjetivosEspecificos from "./ObjetivosEspecificos"
import VentanaModal from '../VentanaModal';
import {useState} from 'react'

const RecordProyectos = ({ dato }) => {
    const [showObjetivos, setShowObjetives]= useState(false);
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
  return (
      <>
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{generalObjective}</td>
                <td>
                    <Button variant="primary" onClick={()=>setShowObjetives(true)}>Ver</Button>
                </td>
                <td>{budget}</td>
                <td>{startDate}</td>
                <td>{endDate}</td>
                <td>{leader_id}</td>
                <td>{status}</td>
                <td>{phase}</td>
                <td>
                    <Button variant="warning">Editar</Button>
                </td>
            </tr>
            <VentanaModal
                titulo="Objetivos especificos"
                setShow={setShowObjetives}
                show={showObjetivos}
            >
                <ObjetivosEspecificos
                    specificObjectives={specificObjectives}
                />
            </VentanaModal>
      </>
    
  );
};
export default RecordProyectos;
