
const RecordUsuario = ({ dato, setShow, setEstadoEditar}) => {
  const { email, name, lastName, fullName, role, status, password, id } = dato;
  //funcion para pasar info al modal de editar
  const editarEstado=id=>{
    if(id===dato.id){
      setEstadoEditar(dato)
    }   
    setShow(true)
  }
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{email}</td>
        <td>{name}</td>
        <td>{lastName}</td>
        <td className="overflow-scroll">{fullName}</td>
        <td>{role}</td>
        <td>{status}</td>
        <td>{password}</td>
        <td>
          <button className="btn btn-warning me-3" onClick={()=>editarEstado(id)}>
            Editar
          </button>
        </td>
      </tr>
    </>
  );
};

export default RecordUsuario;
