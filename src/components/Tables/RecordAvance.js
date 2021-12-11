import Button from "react-bootstrap/Button";
const RecorAvance = ({ dato, setShow }) => {
  const { project_id, addDate, description, observations, id } = dato;
  return (
    <tr>
      <td>{id}</td>
      <td>{project_id}</td>
      <td>{addDate}</td>
      <td className="overflow-scroll">{description}</td>
      <td>{observations}</td>
      <td>
        <button className="btn btn-primary " onClick={setShow}>
          E
        </button>
      </td>
    </tr>
  );
};

export default RecorAvance;
