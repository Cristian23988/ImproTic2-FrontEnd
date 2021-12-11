const RecordProyectos=()=>{
    return(
        <tr>
            <td>1</td>
            <td>Seguridad en redes sociales</td>
            <td>Fomentar la correcta utilización de las diferentes redes sociales.</td>
            <td className="overflow-scroll">
                Concientizar de la información 
                expuesta en las redes sociales, 
                Analizar la red de contactos en su red social.
            </td>
            <td>20000000</td>
            <td>20/12/2021</td>
            <td>20/02/2022</td>
            <td>Alejo</td>
            <td>Activo</td>
            <td className="d-flex justify-content-center">
                <button className="btn btn-primary me-2" >
                    Editar
                </button>
                <button className="btn btn-danger" >
                    Eliminar
                </button>
            </td>
        </tr>
    )
}
export default RecordProyectos;