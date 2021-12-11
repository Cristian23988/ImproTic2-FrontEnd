import Button from "react-bootstrap/Button";

const EliminarUsuario=({setShow})=>{
    const handleClose = () => setShow(false);
    return(
        <>
            <h4>¿Estas seguro de eliminar este usuario?</h4>

            <Button variant="danger" >
                Eliminar
            </Button>
            <Button variant="secondary" onClick={handleClose}>
                Cancelar
            </Button>
        </>
    )
}
export default EliminarUsuario;