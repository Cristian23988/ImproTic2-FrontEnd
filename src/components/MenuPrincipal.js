// import IconRegistrer from '../images/Icons/IconRegistrer';
import {Nav} from 'react-bootstrap'; 
import IconMenu  from '../images/Icons/IconMenu';
import IconHome  from '../images/Icons/IconHome';
import IconUsuarios  from '../images/Icons/IconUsuarios';
import IconEstudiantes from '../images/Icons/IconEstudiantes';
import IconProyectos from '../images/Icons/IconProyectos';
import BarraPerfil from './BarraPerfil';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';

const MenuPrincipal = () => {
    const encabezado={
        height:'10%',
        width:'15%'
    }
    const menu={
        height:'90%',
        width:'15%'
    }
    //states de los  links activo
    const [linkHome, setLinkHome]=useState('');
    const [linkUsuarios, setLinkUsuarios]=useState('');
    const [linkProyectos, setLinkProyectos]=useState('');
    const [linkEstudiantes, setLinkEstudiantes]=useState('');
    
    var URLactual = window.location.href;

    useEffect(() =>{
        if(URLactual==='http://localhost:3000/menu/usuarios'){
            setLinkUsuarios('active')
            setLinkProyectos('')
            setLinkEstudiantes('')
            setLinkHome('')
        }else if(URLactual==='http://localhost:3000/menu/proyectos'){
            setLinkUsuarios('')
            setLinkProyectos('active')
            setLinkEstudiantes('')
            setLinkHome('')
        }else if(URLactual==='http://localhost:3000/menu/estudiantes'){
            setLinkUsuarios('')
            setLinkProyectos('')
            setLinkEstudiantes('active')
            setLinkHome('')
        }else{
            setLinkUsuarios('')
            setLinkProyectos('')
            setLinkEstudiantes('')
            setLinkHome('active')
        }         
    },[]);

    return (
        <>
            <BarraPerfil/>
            <div  className="nav-item text-white bg-primary position-absolute p-5 top-0 start-0 d-flex justify-content-center align-items-center" style={encabezado}>
                <Nav.Link href="/" className="text-white">
                    <IconMenu/> {' '}
                    Menu Principal
                </Nav.Link>
            </div>
            <Nav  className=" nav nav-pills flex-column bg-dark  p-3 position-absolute  bottom-0 start-0" style={menu}>
                <Link to="/menu/home" className={`${linkHome} nav-link text-white text-center`}
                onClick={()=>{
                    setLinkHome('active');
                    setLinkUsuarios('')
                    setLinkProyectos('')
                    setLinkEstudiantes('')
                }}>
                    <IconHome/>{' '}
                    Home
                </Link>
                <Link  to="/menu/usuarios"  className={`${linkUsuarios} nav-link text-white text-center`} 
                onClick={()=>{
                    setLinkUsuarios('active')
                    setLinkHome('')
                    setLinkProyectos('')
                    setLinkEstudiantes('')
                }}> 
                    <IconUsuarios/>{' '}
                    Usuarios
                </Link>
                <Link  to="/menu/proyectos" className={`${linkProyectos} nav-link text-white text-center`} 
                onClick={()=>{
                    setLinkUsuarios('')
                    setLinkHome('')
                    setLinkProyectos('active')
                    setLinkEstudiantes('')
                }}>
                    <IconProyectos/>{' '}
                    Proyectos
                </Link>
                <Link  to="/menu/estudiantes"  className={`${linkEstudiantes} nav-link text-white text-center`} 
                onClick={()=>{
                    setLinkUsuarios('')
                    setLinkHome('')
                    setLinkProyectos('')
                    setLinkEstudiantes('active')
                }}>
                    <IconEstudiantes/>{' '}
                    Estudiantes
                </Link>
                {/* <Nav.Link eventKey="disabled"  disabled>
                    Disabled
                </Nav.Link> */}
            </Nav>
        </>
    );
};

export default MenuPrincipal;