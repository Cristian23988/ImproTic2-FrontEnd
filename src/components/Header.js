import IconLogin from '../images/Icons/IconLogin';
import IconRegistrer from '../images/Icons/IconRegistrer';
import { Navbar,Nav, Container } from 'react-bootstrap'; 
import Logo from '../images/Logo.PNG'
import {Link} from 'react-router-dom';


const Header=() =>{
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"> 
                    <img src={Logo} alt="logo improtic" className="figure-img img-fluid rounded  me-3" style={{width:'10%'}}/> 
                    App gestion de proyectos
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="d-flex justify-content-end">
                    <Nav>
                        <Link to="/" className="nav-item nav-link">
                            <IconLogin/>{' '}
                            Login
                        </Link>
                        <Link to="Registro" className="nav-item nav-link">
                            <IconRegistrer/>{' '}
                            Resgistro
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;