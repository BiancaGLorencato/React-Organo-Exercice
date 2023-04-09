import { useState } from 'react'
import './CampoTexto.css'
const CampoTexto = (props) => {


    const placeholderModificado = `${props.Placeholder} ...`
    
    const [valor, setValor] = useState('');

    const aoDigitado = (evento) => {
        props.Alterado(evento.target.value)
    }

    
    return (
        <div  className="campo-texto">
            <label>{props.Label}</label>
            <input required={props.Obrigatorio} placeholder={placeholderModificado} 
                value={props.valor} onChange={aoDigitado} 
            />
        </div>
    )
}

export default CampoTexto