import { Button, Form } from "react-bootstrap";

const ActualizarUsuario=({setShow})=>{
    const handleClose = () => setShow(false);
    return(
        <Form>
            <Form.Group className="m-2">
            <Form.Label className="fw-bold">Email</Form.Label>
            <Form.Control type="email" name="email" />
            </Form.Group>
            <Form.Group className="m-2">
                <Form.Label className="fw-bold">Identificacion</Form.Label>
                <Form.Control type="email" name="email" />
            </Form.Group>
            <Form.Group className="m-2">
                <Form.Label className="fw-bold">Nombre</Form.Label>
                <Form.Control type="email" name="email" />
            </Form.Group>
            <Form.Group className="m-2">
                <Form.Label className="fw-bold">Apellido</Form.Label>
                <Form.Control type="email" name="email" />
            </Form.Group>
            <Form.Group className="m-2">
                <Form.Label className="fw-bold">Nombre completo</Form.Label>
                <Form.Control type="email" name="email" />
            </Form.Group>{" "}
            <Form.Group className="m-2">
                <Form.Label className="fw-bold">clave</Form.Label>
                <Form.Control type="email" name="email" />
            </Form.Group>
            <Button variant="primary">
                Actualizar
            </Button>
            <Button variant="secondary" onClick={handleClose}>
                Cerrar
            </Button>
        </Form>
    )
}
export default ActualizarUsuario;