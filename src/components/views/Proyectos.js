import Menu from "../MenuPrincipal";
import ContenidoMenu from "../ContenidoMenu";
import { Table } from "react-bootstrap";
import RecordProyectos from "../Tables/RecordProyectos";

const Proyectos = () => {
  return (
    <>
      <Menu />
      <ContenidoMenu>
        <h1 className="fst-italic">Gestionar proyectos </h1>
        <div className="d-flex justify-content-start flex-row gap-5 flex-wrap w-100 p-5 overflow-scroll shadow">
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Objetivo general</th>
                <th>Objetivos especificos</th>
                <th>Presupuesto</th>
                <th>Fecha inicio</th>
                <th>Fecha fin</th>
                <th>Lider</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
                <RecordProyectos/>
                <RecordProyectos/>
                <RecordProyectos/>
            </tbody>
          </Table>
        </div>        
      </ContenidoMenu>
    </>
  );
};
export default Proyectos;
