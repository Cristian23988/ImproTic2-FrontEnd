import Footer from './components/Footer';
import Login from './components/Login';
import MenuPrincipal from './components/MenuPrincipal';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
   <>
      <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route exact path="menu" element={<MenuPrincipal/>}/>
          </Routes>
        <Footer/> 
      </BrowserRouter>
      
   </>
  );
}

export default App;
