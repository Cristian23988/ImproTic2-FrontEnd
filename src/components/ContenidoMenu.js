const ContenidoMenu=({children})=>{
    const dimensiones={
        width: '85%',
        height: '90%'
    }
    return(
        <div className="d-flex justify-content-center align-items-center flex-column position-absolute bottom-0  end-0 bg-white" style={dimensiones}>
            {children}
        </div>
    )
}
export default ContenidoMenu;