import { Table } from "react-bootstrap";

const ObjetivosEspecificos=({specificObjectives})=>{
    if(typeof(specificObjectives)==='string'){
        specificObjectives=specificObjectives.split(';');
    }
    return(
        <Table  striped bordered hover size="sm">
             <thead>
              <tr>
                <th>Objetivos especificos</th>             
              </tr>
            </thead>
            <tbody>
                {specificObjectives.map((specificObjetive, index)=>(
                    <tr key={index}>
                        <td>{specificObjetive}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}
export default  ObjetivosEspecificos;