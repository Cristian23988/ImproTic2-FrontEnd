import { Container, Form } from 'react-bootstrap'; 
import Boton from './Buttons';
import IconEmail from '../images/Icons/IconEmail'
import IconClave from '../images/Icons/IconClave'

const Login=()=>{
    return(
        <Container className="d-flex justify-content-center align-items-center">
            <Form className="w-25 mt-5 border p-5 bg-light shadow">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="fw-bold">
                        <IconEmail/>{' '}
                        Email usuario
                    </Form.Label>
                    <Form.Control type="email" placeholder="Ingresa tu email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="fw-bold">
                        <IconClave/>{' '}
                        Contraseña
                    </Form.Label>
                    <Form.Control type="password" placeholder="Ingresa tu contraseña" />
                </Form.Group>
                <Boton
                    variante="primary"
                    tipo="submit"
                    clase="w-100"
                    valor="Ingresar"
                />
                
            </Form>
        </Container>
    );
}
export default Login;