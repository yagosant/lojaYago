
import Produto from "./Produto";

function Catalogo(props){
    return(
        //fragment  </> os elementos react n podem ficar sem pai, ele é um pai generico
        <>
        <div className="catalogoCom3">
           {props.produtos.map((produto, index) =>{
            return <div className="catalogo">
                <Produto produto = {produto}/>
            </div>
           })}
       </div>
       </> 
    );
}

export default Catalogo;