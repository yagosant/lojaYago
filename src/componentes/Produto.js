function Produto(props){
    return(
        <div className="produto">
            <img src={props.produto.foto}></img>
            <p>{props.produto.nome}</p>
            <p>Preço: R$ {props.produto.preco}</p>
            <p>{props.produto.descricao}</p>
            <button className="button"> Comprar</button>
        </div>
    );
}

export default Produto