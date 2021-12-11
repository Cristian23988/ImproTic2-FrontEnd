import Button from "react-bootstrap/Button";
import IconAvance from "../../images/Icons/IconAvance";
import IconModificar from "../../images/Icons/IconModificar";
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
          <IconAvance />
        </button>
      </td>
    </tr>
  );
};

export default RecorAvance;
