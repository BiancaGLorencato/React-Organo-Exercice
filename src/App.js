import { useState } from 'react';
import Banner from './componentes/Banner'
import CampoTexto from './componentes/CampoTexto';
import Formulario from './componentes/Formulario';

function App() {
  const [colaboradores, setColaboradores] = useState([])

  const novoColaborador = ( colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  }
 

  return (
    <div className="App">
         <Banner></Banner>
         <Formulario colaboradorCadastrado = { colaborador => novoColaborador(colaborador)} ></Formulario>
    </div>
  );
}

export default App;
