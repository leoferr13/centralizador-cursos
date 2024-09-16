import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Plataforma from './componentes/Plataforma';
import Rodape from './componentes/Rodape';


function App() {

  const plataformas = [
    {
      nome: 'Alura',
      corPrimaria: '#000080',
      corSecundaria: '#F0F8FF'
    },

    {
      nome: 'Udemy',
      corPrimaria: '#696969',
      corSecundaria: '#E8E8E8'
    },

    {
      nome: 'Conquer',
      corPrimaria: '#FFFF00',
      corSecundaria: '#FFF68F'
    },
    {
      nome: 'Rockeseat',
      corPrimaria: '#CD69C9',
      corSecundaria: '#FFE4C4'
    },

    {
      nome: 'Youtube',
      corPrimaria: '#CD0000',
      corSecundaria: '#FFA07A'
    }
  ]

  const [cursos, setCursos] = useState([]) // useStates de uma array

  const aoNovoCursoAdicionado = (curso) => {
    setCursos([...cursos, curso]) //adicionando os cursos novos na lista de cursos

  }

  return (
    <div className="App">
      
      <Banner />
      <Formulario nomeDasPlataformas={plataformas.map(plataforma => plataforma.nome)} 
                  aoCursoCadastrado={curso => aoNovoCursoAdicionado(curso)}
                  />
      
      
      {plataformas.map(plataforma => <Plataforma 
        key={plataforma.nome} 
        nome={plataforma.nome} 
        corPrimaria={plataforma.corPrimaria} 
        corSecundaria={plataforma.corSecundaria}
        meusCursos={cursos.filter(curso => curso.plataforma === plataforma.nome)}/>)} 
      <Rodape/>
    </div> 
    
  )
  
}

/*
 {plataformas.map(plataforma => <Plataforma nome={plataforma.nome}/>)} : Para cada plataforma, crie um componente plataforma como o nome passado.
key={plataforma.nome} : usado pra controle quando precisar redenrizar determinada plataforma
meusCursos={cursos.filter(curso => curso.plataforma === plataforma.nome)}/>)} : estou mapeando todos os cursos e verificando qual o nome da plataforma preenchida no formulario para colocar no grupo certo
 */
export default App;
