import './Botao.css'

const Botao = (props) => {
    return (
    <button className='botao'>{props.children}</button>)
}

/*
    Colocando o children, eu posso alterar o componente botão livremente, inclusive colocar alguma imagem
*/
export default Botao