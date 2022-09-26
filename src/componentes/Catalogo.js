import Produto from "./Produto";

function Catalogo(props){
/* 
    var produtos = []; */

    //varre os arrays e add de acordo com indice
  /*   for (let index = 0; index < props.produtos.length; index++) {
       produtos.push( <Produto produto = {props.produtos[index]}/>);
    } */
    return(
        //fragment  </> os elementos react n podem ficar sem pai, ele é um pai generico
        <>
           {props.produtos.map((produto, index) =>{
            return <div className="catalogo">
                <Produto produto = {produto}/>
            </div>
           })}
       
       </> 
    );
}

export default Catalogo;