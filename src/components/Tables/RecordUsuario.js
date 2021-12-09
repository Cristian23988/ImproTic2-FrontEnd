import {Card, Button} from 'react-bootstrap'; 

const RecordUsuario = () =>{

    return(
        <Card>
            <Card.Header className="bg-dark text-white">Elkin Armando Benavides </Card.Header>
            <Card.Body>
                <Card.Title>Datos</Card.Title>
                <div className="row align-items-start p-2">
                    <div className="col">
                        <b>Nombres:</b> Elkin Armando
                    </div>
                    <div className="col">
                        <b>Apellidos:</b> Benavides Martines
                    </div>
                </div>
                <div className="row align-items-start p-2">
                    <div className="col">
                        <b>Email:</b> elkin@gmail.com
                    </div>
                    <div className="col">
                        <b>Rol:</b> Adminstrador
                    </div>
                </div>
                <div className="row align-items-start p-2">
                    <div className="col">
                        <b>Estado:</b> Activo
                    </div>
                    <div className="col">
                        <b>Contraseña:</b> 123456
                    </div>
                </div>
                <div className="row align-items-start p-2">
                    <div className="col">
                        <Button variant="warning">Editar</Button>
                    </div>
                    <div className="col">
                        <Button variant="danger">Eliminar</Button>
                    </div>
                </div>                   
            </Card.Body>
        </Card>           
        
    )
};
           
export default RecordUsuario;