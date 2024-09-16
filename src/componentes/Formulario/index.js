import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'


const Formulario = (props) => {


    const [nome, setNome] = useState('') //a useSate prepara 2 objetos, um para ler e o outro para escrever/alterar
    const [area, setArea] = useState('')
    const [imagem, setImagem] = useState('')
    const [plataforma, setPlataforma] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault() //previni o comportamento padrão, faz com que a página não carregue em sequência mantendo assim o conteúdo abaixo
        props.aoCursoCadastrado({
            nome,
            area,
            imagem,
            plataforma
        })
        setNome('')
        setArea('')
        setImagem('/imagens/nome_imagem.png')
        setPlataforma('')

    }
        
    
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do curso</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o nome do curso" 
                    valor={nome} // valor é o que eu escrevo dentro do formulário
                    aoAlterado={valor => setNome(valor)} //Caso precise alterar o valor
                    />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Área" 
                    placeholder="Digite qual a área do curso" 
                    valor={area} 
                    aoAlterado={valor => setArea(valor)}
                    />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite /imagens/sua_imagem.png"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)} 
                    />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Plataformas" 
                    itens={props.nomeDasPlataformas}
                    valor={plataforma}
                    aoAlterado={valor => setPlataforma(valor)}
                    />
                <Botao>Criar Card</Botao>
                
            </form>
        </section>
    )
}

/*
onSubmit= quando alguém submeter, faça a função
*/

export default Formulario