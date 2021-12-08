import IconLogin from '../images/Icons/IconLogin';
import IconRegistrer from '../images/Icons/IconRegistrer';
import { Navbar,Nav, Container } from 'react-bootstrap'; 
import Logo from '../images/Logo.PNG'

const MenuPrincipal = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home"> 
                    <img src={Logo} alt="logo improtic" className="figure-img img-fluid rounded  me-3" style={{width:'10%'}}/> 
                    Menu Principal
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="d-flex justify-content-end">
                    <Nav>
                        <Nav.Link href="#features">
                            <IconLogin/>{' '}
                            Perfil
                        </Nav.Link>
                        <Nav.Link href="#pricing">
                            <IconRegistrer/>{' '}
                            Gestion
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MenuPrincipal;