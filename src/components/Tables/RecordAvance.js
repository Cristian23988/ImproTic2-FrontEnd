import Button from "react-bootstrap/Button";
const RecorAvance = ({ dato }) => {
  const { project_id, addDate, description, observations, id } = dato;
  return (
    <tr>
      <td>{id}</td>
      <td>{project_id}</td>
      <td>{addDate}</td>
      <td className="overflow-scroll">{description}</td>
      <td>{observations}</td>
      <td>
        <Button variant="primary">A</Button>
        <Button variant="secondary">D</Button>
      </td>
    </tr>
  );
};

export default RecorAvance;
