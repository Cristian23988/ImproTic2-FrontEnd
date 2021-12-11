import { Table } from "react-bootstrap";

const ObjetivosEspecificos=({specificObjectives})=>{
    return(
        <Table  striped bordered hover size="sm">
             <thead>
              <tr>
                <th>Objetivos especificos</th>             
              </tr>
            </thead>
            <tbody>
                {specificObjectives.map(specificObjetive=>(
                    <tr>
                        <td>{specificObjetive}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}
export default  ObjetivosEspecificos;