const RecordUsuario = ({ dato, setShow, setEstadoEditar,contador, user}) => {
  const { email, name, lastName, fullName, role, status, password, _id } = dato;
  //funcion para pasar info al modal de editar
  const editarEstado=id=>{
    if(id===dato._id){
      setEstadoEditar(dato)
    }   
    setShow(true)
  }
  return (
    <>
      <tr>
        <td>{contador}</td>
        <td>{email}</td>
        <td>{name}</td>
        <td>{lastName}</td>
        <td>{fullName}</td>
        <td>{role}</td>
        <td>{status}</td>
        <td>{password}</td>
        {user.userSesion.role==='admin' ? (
          <td>
            <button className="btn btn-warning me-3" onClick={()=>editarEstado(_id)}>
              Editar
            </button>
          </td>
        ):null}      
      </tr>
    </>
  );
};

export default RecordUsuario;