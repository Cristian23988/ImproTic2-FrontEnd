import Button from "react-bootstrap/Button";
const RecordProyectos = ({ dato }) => {
  const {
    name,
    generalObjective,
    specificObjectives,
    budget,
    startDate,
    endDate,
    leader_id,
    status,
    id,
  } = dato;
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{generalObjective}</td>
      <td className="overflow-scroll">{specificObjectives}</td>
      <td>{budget}</td>
      <td>{startDate}</td>
      <td>{endDate}</td>
      <td>{leader_id}</td>
      <td>{status}</td>
      <td>
        <Button variant="primary">A</Button>
        <Button variant="secondary">D</Button>
      </td>
    </tr>
  );
};
export default RecordProyectos;
