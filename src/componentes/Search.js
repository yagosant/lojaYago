import { useState } from 'react';
function Search(props){

  //criando um estado para controlar o componente
  const [buscaEstado, setBuscaEstado] = useState();

    return(
        <div id="divBusca">
        <input type="text" id="txtBusca" placeholder="Informe o personagem" onChange ={props.clickCategoria}/>
      </div>
    );
}

export default Search;