const RecordIncripciones = ({ dato, setShow, setEstadoEditar }) => {
  const {
    _id,
    project_id,
    user_id,
    status,
    enrollmentDate,
    egressDate,
    project,
    student,
  } = dato;
  const editarEstado = (id) => {
    if (id === dato._id) {
      setEstadoEditar(dato);
    }
    setShow(true);
  };

  return (
    <>
      <tr>
        <td>{_id} </td>
        <td>{project_id}</td>
        <td>{user_id}</td>
        <td>{status}</td>
        <td>{enrollmentDate}</td>
        <td>{egressDate}</td>
        <td>{project.name}</td>
        <td>{student.fullName}</td>
        <td>
          <button
            className="btn btn-warning me-3"
            onClick={() => editarEstado(_id)}
          >
            Editar
          </button>
        </td>
      </tr>
    </>
  );
};

export default RecordIncripciones;
