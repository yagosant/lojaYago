import Produto from "./Produto";

function Catalogo(props){

    var produtos = [];

    //varre os arrays e add de acordo com indice
    for (let index = 0; index < props.produtos.length; index++) {
       produtos.push( <Produto produto = {props.produtos[index]}/>);
    }
    return(
        <div className="catalogo">
           {produtos}
        </div>
        
    );
}

export default Catalogo;