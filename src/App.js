import Login from "./components/Login";
import Home from "./components/views/Home";
import Usuarios from "./components/views/Usuarios";
import Proyectos from "./components/views/Proyectos";
import Estudiantes from "./components/views/Estudiantes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistroUsuarios from "./components/RegistroUsuarios";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index path="/" element={<Login />} />
            <Route exact path="registro" element={<RegistroUsuarios />} />
          </Route>

          <Route>
            <Route index path="menu/home" element={<Home />} />
            <Route exact path="menu/usuarios" element={<Usuarios />} />
            <Route exact path="menu/proyectos" element={<Proyectos />} />
            <Route exact path="menu/estudiantes" element={<Estudiantes />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
