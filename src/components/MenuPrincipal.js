import IconLogin from '../images/Icons/IconLogin';
import IconRegistrer from '../images/Icons/IconRegistrer';
import {Nav} from 'react-bootstrap'; 
import IconMenu  from '../images/Icons/IconMenu';
import IconHome  from '../images/Icons/IconHome';
import IconUsuarios  from '../images/Icons/IconUsuarios';
import IconEstudiantes from '../images/Icons/IconEstudiantes';

const MenuPrincipal = () => {
    const encabezado={
        height:'10%',
        width:'15%'
    }
    const menu={
        height:'90%',
        width:'15%'
    }
    return (
        <>
            <div  className="nav-item text-white bg-primary position-absolute p-5 top-0 start-0 d-flex justify-content-center align-items-center" style={encabezado}>
                <Nav.Link href="/" className="text-white">
                    <IconMenu/> {' '}
                    Menu Principal
                </Nav.Link>
            </div>
            <Nav defaultActiveKey="/menu" className=" nav nav-pills flex-column bg-dark  p-3 position-absolute  bottom-0 start-0" style={menu}>
                <Nav.Link href="/menu" className="text-white text-center ">
                    <IconHome/>{' '}
                    Home
                </Nav.Link>
                <Nav.Link eventKey="link-1" className="text-white text-center"> 
                    <IconUsuarios/>{' '}
                    Usuarios
                </Nav.Link>
                <Nav.Link eventKey="link-2" className="text-white text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-briefcase-fill" viewBox="0 0 16 16">
                        <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"/>
                        <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"/>
                    </svg>{' '}
                    Proyectos
                </Nav.Link>
                <Nav.Link eventKey="link-3" className="text-white text-center">
                    <IconEstudiantes/>{' '}
                    Estudiantes
                </Nav.Link>
                {/* <Nav.Link eventKey="disabled"  disabled>
                    Disabled
                </Nav.Link> */}
            </Nav>
        </>
    );
};

export default MenuPrincipal;