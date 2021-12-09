import Footer from './components/Footer';
import Login from './components/Login';
import MenuPrincipal from './components/MenuPrincipal';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import RegistroUsuarios from "./components/RegistroUsuarios"
function App() {
  return (
   <>
      <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route exact path="menu" element={<MenuPrincipal/>}/>
            <Route exact path="Registro" element={<RegistroUsuarios/>}/>
          </Routes>
        <Footer/> 
      </BrowserRouter>
      
   </>
  );
}

export default App;
