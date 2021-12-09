import Boton from './Buttons';
import IconPersona from '../images/Icons/IconPersona';
import IconConfig from '../images/Icons/IconConfig';
import IconLogOut from '../images/Icons/IconLogOut';

const BarraPerfil = () => {
    const dimensionBarra={
        width: '85%',
        height: '8%'
    }
    const dimensionPerfil={
        width: '40%',
        height: '100%',
        backgroundColor: '#D6D8D8'
    }
    const elemento={
        width: '35%',
    }
    return(
        <>
            <div className="bg-light  position-absolute end-0 top-0 d-flex justify-content-between align-items-center  shadow-lg " style={dimensionBarra}>
                <div className="d-flex align-items-center justify-content-start" style={dimensionPerfil}>
                    <div className="w-25 h-100 bg-dark text-white d-flex justify-content-center align-items-center">
                        <IconPersona/>
                    </div>
                    <span className="fw-bold text-dark mx-5">Administrador: Diego Alejandro Diaz Bonilla</span>
                    <Boton
                        variante="secondary"
                        tipo="button"
                        clase="shadow w-auto"
                    >
                        <IconConfig/>
                    </Boton>
                </div>
                <div  style={elemento}>

                </div>
                <div className="w-25 d-flex justify-content-end me-5">
                    <Boton
                        variante="danger"
                        tipo="button"
                        clase="shadow w-auto"
                    >
                       <IconLogOut/>{' '} Salir
                    </Boton>
                </div>
                
            </div>
        </>
    )

}

export default BarraPerfil;