const RecordIncripciones = ({ dato }) => {
  const { project_id, user_id, enrollmentDate, status, id } = dato;
  return (
    <>
      <tr>
        <td>{project_id}</td>
        <td>{user_id}</td>
        <td>{enrollmentDate}</td>
        <td>{status}</td>
        <td>lol</td>
      </tr>
    </>
  );
};

export default RecordIncripciones;
