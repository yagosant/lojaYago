function Produto(props){
    return(
        <div className="produto">
            <img src={props.produto.foto}></img>
            <p>{props.produto.personagem}</p>
            <p>Preço: R$ {props.produto.preco}</p>
            <p>{props.produto.descricao}</p>
            <p>{props.produto.categoria}</p>
            <p>{props.produto.filtro}</p>
            <button className="button"> Comprar</button>
        </div>
    );
}

export default Produto