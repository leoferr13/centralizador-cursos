import Curso from '../Curso'
import './Plataforma.css'

const Plataforma = (props) => {
    const corSecundariaCss = {backgroundColor: props.corSecundaria}
    const corPrimariaCss = {borderColor: props.corPrimaria}
    return(
        (props.meusCursos.length > 0) ? <section className='plataforma' style={corSecundariaCss}>
            <h3 style={corPrimariaCss}>{props.nome}</h3>
            <div className='cursos'>
 {props.meusCursos.map(curso => <Curso key={curso.nome} nomeDoCurso={curso.nome} areaDoCurso={curso.area} imagemDoCurso={curso.imagem} corDeFundo={props.corPrimaria}/>)}
            </div>
           
        </section>

        : ''
    ) 
}

/*
    Estou utilizando a função ternaria (se for verdade ? faça : faça isso)
*/

export default Plataforma