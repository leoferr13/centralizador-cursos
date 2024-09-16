import './Curso.css'

const Curso = ({nomeDoCurso, areaDoCurso, imagemDoCurso, corDeFundo}) => { //outra maneira de usar as propriedades
    return(
        <div className='curso'>
            <div className='cabecalho' style={{ backgroundColor : corDeFundo}}>
                <img src={imagemDoCurso} alt={nomeDoCurso}/>
            </div>
            <div className='rodape'>
                <h4>{nomeDoCurso}</h4>
                <h5>{areaDoCurso}</h5>
                </div>
        </div>
    )
}

export default Curso