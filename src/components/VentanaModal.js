import Modal from "react-bootstrap/Modal";

const VentanaModal=({titulo, setShow, children, show})=>{
    const handleClose = () => setShow(false);
    return(
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
            <Modal.Title>{titulo}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
        </Modal>
    )
}
export default VentanaModal;