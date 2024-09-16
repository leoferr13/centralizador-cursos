import './CampoTexto.css'

const CampoTexto = (props) => {

const placeholderModificada = `${props.placeholder}...` // adicionei is 3 pontos no final da frase. Posso modificar da maneira que preferir

// const [valor, setValor] = useState('') // a useSate prepara 2 objetos, um para ler e o outro para escrever/alterar
 
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value) // evento.target.value : faz a alteração do conteudo no input / escreve o que eu digitar      

    }

        return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto

/*
Nesse exemplo criarmos a classe CampoTexto dentro do index e vamos utilizar a partir daqui
Em ambos os exemplos (CampoTexto e Banner) a exportação é utilizada

onChange={aoDigitado} : Todo vez que esse type for alterado(a cada letra), eu quero executar a função aoDigitado

required={props.obrigatorio} esse input é obrigatório ter algo escrito
*/