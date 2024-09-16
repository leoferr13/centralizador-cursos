import './ListaSuspensa.css'

//cria a constante, importa uma função anonima e faz o export (padrão)

const ListaSuspensa = (props) => {
    console.log(props.itens)
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select 
            onChange={evento => props.aoAlterado(evento.target.value)} //pegando o valor que esta na caixa e passando pra evento
            required={props.obrigatorio} 
            value={props.valor}>
                <option value="" /* indica que iniciará vazio*/ />  
                {props.itens.map(item => <option key={item}>{item}</option>)} 
            </select>
        </div>
    )
    

}

export default ListaSuspensa



/* 
{props.itens.map(item => <option>{item}</option>)} = Para cada item , retornamos um option
*/