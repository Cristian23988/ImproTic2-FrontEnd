import Button from "react-bootstrap/Button";

const RecorAvance = ({
  dato,
  setShow,
  setavances,
  contador,
  setDesc,
  setdescripcionoEditar,
  user,
}) => {
  const { _id, project_id, addDate, description, observations, project } = dato;
  const editarAvance = (_id) => {
    if (_id === dato._id) {
      setavances(dato);
    }
    setShow(true);
  };
  const editarDescription = (_id) => {
    if (_id === dato._id) {
      setdescripcionoEditar(dato);
    }
    setDesc(true);
  };
  const formatearFecha = (fecha) => {
    let fechaInt = parseInt(fecha);
    const opciones = {
      year: "numeric",
      month: "long",
      day: "2-digit",
    };
    return new Date(fechaInt).toLocaleDateString("es-ES", opciones);
  };
  return (
    <>
      <tr>
        <td>{contador}</td>
        <td>{formatearFecha(addDate)}</td>
        <td>{description}</td>
        <th>{observations}</th>
        <td>{project.name}</td>
        <td>{project.status}</td>
        {user.userSesion.role === "leader" ? (
          <td>
            <Button
              variant="warning text-white"
              onClick={() => editarAvance(_id)}
            >
              D
            </Button>
          </td>
        ) : null}
        {user.userSesion.role === "student" && project.status === "active" ? (
          <td>
            <Button
              variant="warning text-white"
              onClick={() => editarDescription(_id)}
            >
              O
            </Button>
          </td>
        ) : null}
      </tr>
    </>
  );
};

export default RecorAvance;
