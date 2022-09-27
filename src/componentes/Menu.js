import Search from "./Search";

function Menu(props){
    return (
        <nav className="menu">
        <ul>
            <a href="#"><img src='https://cdn-icons-png.flaticon.com/512/3/3761.png' className="icone"></img></a>
            <li><Search clickCategoria ={props.clickCategoria} limpaPesquisa = {props.limpaPesquisa}></Search></li>
            <li><button id="btnBusca" onClick={props.limpaPesquisa}>Limpar</button></li>
        </ul>
    </nav>
    )
}

export default Menu;