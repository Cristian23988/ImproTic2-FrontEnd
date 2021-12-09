import Logo from "../../images/Logo2.PNG";
import Menu from "../MenuPrincipal"
import ContenidoMenu  from '../ContenidoMenu';
import Footer from '../Footer';

const Home=()=>{
    return(
        <>
            <Menu/>
            <ContenidoMenu>
                <h1 className="fst-italic">Bienvenido al Sistema de Gestion de Proyectos</h1>
                <img
                    src={Logo}
                    alt="logo improtic"
                    className="figure-img img-fluid rounded  me-3"
                />
            </ContenidoMenu>  
            <div className="position-absolute bottom-0 w-100 h-auto">
                <Footer/>
            </div>         
        </>
    )
}
export default Home;