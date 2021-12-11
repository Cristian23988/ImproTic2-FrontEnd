import Button from "react-bootstrap/Button";
import ObjetivosEspecificos from "./ObjetivosEspecificos"
import VentanaModal from '../VentanaModal';
import {useState} from 'react'
import ActualizarProyecto from '../Formularios/ActualizarProyecto';

const RecordProyectos = ({ dato }) => {
    const [showObjetivos, setShowObjetives]= useState(false);
    const [showEditar, setShowEditar]= useState(false);
    //hook para pasar la info del proyecto al modal de editar
    const [proyectoEditar, setProyectoEditar]= useState({});
    
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

    //funcion para pasar info al modal de editar
    const editarProyecto=id=>{
        if(id===dato.id){
            setProyectoEditar(dato)
        }   
        setShowEditar(true)
    }
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
                    <Button variant="warning" onClick={()=>editarProyecto(id)}>Editar</Button>
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
            <VentanaModal
                titulo="Editar proyecto"
                setShow={setShowEditar}
                show={showEditar}
            >
                <ActualizarProyecto
                    setShowEditar={setShowEditar}
                    proyectoEditar={proyectoEditar}
                />
            </VentanaModal>
      </>
    
  );
};
export default RecordProyectos;
