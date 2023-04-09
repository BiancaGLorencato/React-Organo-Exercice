import './CampoTexto.css'
const CampoTexto = (props) => {
    const placeholderModificado = `${props.Placeholder} ...`
    return (
        <div  className="campo-texto">
            <label>{props.Label}</label>
            <input required={props.Obrigatorio} placeholder={placeholderModificado}/>
        </div>
    )
}

export default CampoTexto