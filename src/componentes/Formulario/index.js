import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Desing', 
        'Mobile',
        'Inovação e Gestão'
    ]

    const aoSalvar = (evento) =>{
        evento.preventDefault()
        props.colaboradorCadastrado([
            nome,
            cargo,
            imagem,
            time
        ])
    }

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
 

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    Obrigatorio={true} 
                    Label="Nome"  
                    Placeholder='Digite seu nome'
                    valor={nome}
                    Alterado = {valor =>setNome(valor)}
                />
                <CampoTexto 
                    Obrigatorio={true} Label="Cargo"  
                    Placeholder='Digite seu cargo'
                    valor={cargo} 
                    Alterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                    Label="Imagem"  
                    Placeholder='Informe o endereço da Imagem'
                    valor={imagem} 
                    Alterado={valor => setImagem(valor)}
                />
                <ListaSuspensa  
                    label="Time" 
                    Obrigatorio={true} 
                    itens={times}
                    valor={time}
                    Alterado={valor => setTime(valor)}></ListaSuspensa>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario