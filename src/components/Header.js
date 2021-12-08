import IconLogin from '../images/Icons/IconLogin';
import IconRegistrer from '../images/Icons/IconRegistrer';
import { Navbar,Nav, Container } from 'react-bootstrap'; 
const Header=() =>{
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">App gestion de proyectos</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="d-flex justify-content-end">
                    <Nav>
                        <Nav.Link href="#features">
                            <IconLogin/>{' '}
                            Login
                        </Nav.Link>
                        <Nav.Link href="#pricing">
                            <IconRegistrer/>{' '}
                            Resgistro
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;