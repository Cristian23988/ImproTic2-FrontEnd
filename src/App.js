import Login from "./components/Login";
import Home from "./components/views/Home";
import Usuarios from "./components/views/Usuarios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistroUsuarios from "./components/RegistroUsuarios";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="menu/home" element={<Home />} />
          <Route exact path="menu/usuarios" element={<Usuarios />} />
          <Route exact path="registro" element={<RegistroUsuarios />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
