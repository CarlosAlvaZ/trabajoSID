function Articulo(props){
    return (
        <div className="articuloSeccion">
            <h4>{props.titulo}</h4>
            <p>{props.contenido}</p>
        </div>
    )
}

export default Articulo