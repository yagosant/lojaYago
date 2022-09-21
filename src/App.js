import logo from './logo.svg';
import './App.css';
import Header from './componentes/Header';
import Menu from './componentes/Menu';
import Catalogo from './componentes/Catalogo';

const titulo = "Loja do Yago";
class Produto {
  constructor(foto,nome, preco, descricao){
    this.foto = foto;
    this.nome = nome;
    this.preco = preco;
    this.descricao = descricao;
  }
}

const p1 = new Produto("https://pm1.narvii.com/7141/ded87d1462fe7b8abb341ee701b610411b589e5er1-736-491v2_hq.jpg","Elesis", 14.9, "Classe guerreira");
const p2 = new Produto("https://1.bp.blogspot.com/-YVdWkWTxAZQ/TktKoBGHdBI/AAAAAAAAAlA/ZjXsII14CKk/s1600/Colunista%2BLire%2B2.png","Lire", 9.9, "Classe Artilheira");
const p3 = new Produto("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b290d20-fdb2-40a9-8fe4-b4efac3c559c/d8k9a1g-7aa98413-78e2-4a5f-8cb3-e0c8bbd125d2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzViMjkwZDIwLWZkYjItNDBhOS04ZmU0LWI0ZWZhYzNjNTU5Y1wvZDhrOWExZy03YWE5ODQxMy03OGUyLTRhNWYtOGNiMy1lMGM4YmJkMTI1ZDIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1iGUntRRb2wxypU-NANTSrBQwbQH5k72p1gV7G_wp1I","Arme", 24.9, "Classe Arquimaga");

const produtos = [p1,p2,p3];

function App() {
  return (
    <div className='container'>
      <Header titulo = {titulo}></Header>
      <Menu></Menu>
      <Catalogo produtos = {produtos}/>
    </div>
  );
}

export default App;
