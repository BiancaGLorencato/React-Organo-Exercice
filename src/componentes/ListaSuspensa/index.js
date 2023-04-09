import { useState } from 'react'
import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

    const [valor , setValor] = useState('')

    const aoEscolher = (evento) =>{
        props.Alterado(evento.target.value)
    }

    return(
        <div  className='lista-suspensa'>
            <label>{props.label}</label>
            <select required={props.Obrigatorio} onChange={aoEscolher}>
                <option value="">Selecione</option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa