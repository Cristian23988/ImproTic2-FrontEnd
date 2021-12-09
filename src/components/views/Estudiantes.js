import Menu from "../MenuPrincipal"
import ContenidoMenu  from '../ContenidoMenu';
import Footer from '../Footer';

const Estudiantes=()=>{
    return(
        <>
            <Menu/>
            <ContenidoMenu>
                <h1 className="fst-italic">Gestionar estudiantes</h1>
            </ContenidoMenu>  
            <div className="position-absolute bottom-0 w-100 h-auto">
                <Footer/>
            </div>         
        </>
    )
}
export default Estudiantes;