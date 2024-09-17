import './Banner.css'

export const Banner = () => {
    return (
        
        //usamos className para não ter conflito com o HTML
        <header className='banner'> 
        <img src="/imagens/Banner_v2.0.png" alt="O banner principal da pagina Centralizador de Cursos"/>
        </header>
    )

}

/*Existem diversas formas de se exportar o classe criada
  No exemplo acima criamos a classe Banner como uma constante e estamos exportando ela no index.js do pacote para utilizarmos no código
*/
