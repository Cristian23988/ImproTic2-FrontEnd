const RecordIncripciones = ({
  dato,
  setestado,
  setEstadoEditar,
  user,
  contador,
}) => {
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
    setestado(true);
  };
  return (
    <>
      <tr>
        <td>{contador} </td>
        <td>{project.name}</td>
        <td>{student.fullName}</td>
        <td>{status}</td>
        <td>{enrollmentDate}</td>
        <td>{egressDate}</td>
        {user.userSesion.role === "leader" ? (
          <td>
            <button
              className="btn btn-warning me-3"
              onClick={() => editarEstado(_id)}
            >
              Editar
            </button>
          </td>
        ) : null}
      </tr>
    </>
  );
};

export default RecordIncripciones;
