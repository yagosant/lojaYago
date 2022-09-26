import { useState } from 'react';
function Search(props){

  //criando um estado para controlar o componente
  const [buscaEstado, setBuscaEstado] = useState();

    return(
        <div id="divBusca">
        <input type="text" id="txtBusca" placeholder="Buscar..." onChange ={props.clickCategoria}/>
        <button id="btnBusca" onClick={props.limpaPesquisa}>Buscar</button>
      </div>
    );
}

export default Search;