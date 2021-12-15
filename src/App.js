import Login from "./components/Login";
import Home from "./components/views/Home";
import Usuarios from "./components/views/Usuarios";
import Proyectos from "./components/views/Proyectos";
import Avances from "./components/views/Avances";
import Inscripciones from "./components/views/Inscripciones";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistroUsuarios from "./components/RegistroUsuarios";
import NoAccess from "./components/NoAccess";
import jwt_decode from "jwt-decode";

function App() {
  const token=sessionStorage.getItem("token"); 
  const user = token ? jwt_decode(token):'';
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index path="/" element={<Login />} />
            <Route exact path="registro" element={<RegistroUsuarios />} />
            <Route exact path="no-access" element={<NoAccess />} />
          </Route>
          <Route>
            <Route index path="menu/home" element={<Home />} />
            {user.userSesion.role==='student' ? (<Route exact path="no-access" element={<NoAccess />} />):(
              <Route exact path="menu/usuarios" element={<Usuarios />} />
            )}
            <Route exact path="menu/proyectos" element={<Proyectos />} />
            <Route exact path="menu/avances" element={<Avances />} />
            <Route exact path="menu/inscripciones" element={<Inscripciones/>} />          
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
