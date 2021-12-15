import Boton from "./Buttons";
import IconPersona from "../images/Icons/IconPersona";
import IconConfig from "../images/Icons/IconConfig";
import IconLogOut from "../images/Icons/IconLogOut";
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode'; 


const BarraPerfil = ({ setShow }) => {  
  const navigate = useNavigate();
  const user = jwt_decode(sessionStorage.getItem('token')); // decode your token here
  const cerrarSesion=()=>{
    sessionStorage.removeItem('token');
    navigate('/');
  }
  // if(user.exp ===0){

  // }
  const dimensionBarra = {
    width: "85%",
    height: "8%",
  };
  const dimensionPerfil = {
    width: "40%",
    height: "100%",
    backgroundColor: "#D6D8D8",
  };
  const elemento = {
    width: "35%",
  };
  // console.log(user)
  return (
    <>
      <div
        className="bg-light  position-absolute end-0 top-0 d-flex justify-content-between align-items-center  shadow-lg "
        style={dimensionBarra}
      >
        <div
          className="d-flex align-items-center justify-content-start"
          style={dimensionPerfil}
        >
          <div className="w-25 h-100 bg-dark text-white d-flex justify-content-center align-items-center">
            <IconPersona />
          </div>
          <span className="fw-bold text-dark mx-5">
            {user.userSesion.role+': '+user.userSesion.fullName}
          </span>
          <button className="btn btn-secondary" onClick={setShow}>
            <IconConfig /> Editar
          </button>
        </div>
        <div style={elemento}></div>
        <div className="w-25 d-flex justify-content-end me-5">
          <Boton variante="danger" tipo="button" clase="shadow w-auto" handleClick={cerrarSesion}>
            <IconLogOut /> Salir
          </Boton>
        </div>
      </div>
    </>
  );
};

export default BarraPerfil;
