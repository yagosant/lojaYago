import logo from './logo.svg';
import './App.css';
import Header from './componentes/Header';
import Menu from './componentes/Menu';
import Catalogo from './componentes/Catalogo';
import Search from './componentes/Search';
import { useEffect, useState } from 'react';

const titulo = "Loja do Yago";
class Produto {
  constructor(foto,personagem, preco, descricao, categoria,filtro){
    this.foto = foto;
    this.personagem = personagem;
    this.preco = preco;
    this.descricao = descricao;
    this.categoria = categoria;
    this.filtro = filtro;
  }
}
const elesisClasse1 = new Produto("https://gcnewsoffcial.files.wordpress.com/2013/03/15gtn.png","Elesis", 14.9, "Elesis se tornou a primeira garota a entrar para os Cavaleiros Vermelhos de Canaban, onde foi treinada de perto por Gerard, um dos comandantes do grupo que a conhecia desde pequena.", "Classe Cavaleira", "segunda classe");
const elesisClasse2 = new Produto("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b290d20-fdb2-40a9-8fe4-b4efac3c559c/d47gev5-61344062-8e18-4443-a533-55ee1121d60f.png/v1/fill/w_572,h_807,strp/elesis_cavaleira_2_by_vannorlu_d47gev5-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODA3IiwicGF0aCI6IlwvZlwvNWIyOTBkMjAtZmRiMi00MGE5LThmZTQtYjRlZmFjM2M1NTljXC9kNDdnZXY1LTYxMzQ0MDYyLThlMTgtNDQ0My1hNTMzLTU1ZWUxMTIxZDYwZi5wbmciLCJ3aWR0aCI6Ijw9NTcyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.ozXEWege3LwZZtnk8LrJD4qmx3WFRwlg6KplAvmxiYs","Elesis", 14.9, "O título de Cavaleiro é dado aos guerreiros que se especializam na técnica de combate a média distância utilizando a Lança, permitindo que efetuem golpes poderosos a uma distância segura do inimigo.", "Classe Cavaleira", "segunda classe");
const elesisClasse3 = new Produto("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b290d20-fdb2-40a9-8fe4-b4efac3c559c/d6k808h-451c9401-b97a-4933-9b35-6a721fd7bcfc.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzViMjkwZDIwLWZkYjItNDBhOS04ZmU0LWI0ZWZhYzNjNTU5Y1wvZDZrODA4aC00NTFjOTQwMS1iOTdhLTQ5MzMtOWIzNS02YTcyMWZkN2JjZmMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.JAtn2EVWRZGzLhxJB5XGD8HMroRtzrO3KOohJGswrKE","Elesis", 14.9, "O título de Gladiador é concedido pela realeza de Vermécia, a um pequeno número de pessoas, como recompensa por sua bravura em combate, realização de missões ou por grandes feitos em nome do reino.", "Classe Gladiadorea", "terceira classe");
const elesisClasse4 = new Produto("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b290d20-fdb2-40a9-8fe4-b4efac3c559c/d47gev5-61344062-8e18-4443-a533-55ee1121d60f.png/v1/fill/w_572,h_807,strp/elesis_cavaleira_2_by_vannorlu_d47gev5-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODA3IiwicGF0aCI6IlwvZlwvNWIyOTBkMjAtZmRiMi00MGE5LThmZTQtYjRlZmFjM2M1NTljXC9kNDdnZXY1LTYxMzQ0MDYyLThlMTgtNDQ0My1hNTMzLTU1ZWUxMTIxZDYwZi5wbmciLCJ3aWR0aCI6Ijw9NTcyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.ozXEWege3LwZZtnk8LrJD4qmx3WFRwlg6KplAvmxiYs","Elesis", 14.9, "O título de Gladiador é concedido pela realeza de Vermécia, a um pequeno número de pessoas, como recompensa por sua bravura em combate, realização de missões ou por grandes feitos em nome do reino.", "Classe Gladiadorea", "terceira classe");
const elesisClasse5 = new Produto("https://gcnewsoffcial.files.wordpress.com/2013/03/15gtn.png","Elesis", 14.9, "Elesis se tornou a primeira garota a entrar para os Cavaleiros Vermelhos de Canaban, onde foi treinada de perto por Gerard, um dos comandantes do grupo que a conhecia desde pequena.", "Classe Cavaleira", "segunda classe");
const elesisClasse6 = new Produto("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b290d20-fdb2-40a9-8fe4-b4efac3c559c/d47gev5-61344062-8e18-4443-a533-55ee1121d60f.png/v1/fill/w_572,h_807,strp/elesis_cavaleira_2_by_vannorlu_d47gev5-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODA3IiwicGF0aCI6IlwvZlwvNWIyOTBkMjAtZmRiMi00MGE5LThmZTQtYjRlZmFjM2M1NTljXC9kNDdnZXY1LTYxMzQ0MDYyLThlMTgtNDQ0My1hNTMzLTU1ZWUxMTIxZDYwZi5wbmciLCJ3aWR0aCI6Ijw9NTcyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.ozXEWege3LwZZtnk8LrJD4qmx3WFRwlg6KplAvmxiYs","Elesis", 14.9, "O título de Cavaleiro é dado aos guerreiros que se especializam na técnica de combate a média distância utilizando a Lança, permitindo que efetuem golpes poderosos a uma distância segura do inimigo.", "Classe Cavaleira", "segunda classe");
const elesisClasse7 = new Produto("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b290d20-fdb2-40a9-8fe4-b4efac3c559c/d6k808h-451c9401-b97a-4933-9b35-6a721fd7bcfc.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzViMjkwZDIwLWZkYjItNDBhOS04ZmU0LWI0ZWZhYzNjNTU5Y1wvZDZrODA4aC00NTFjOTQwMS1iOTdhLTQ5MzMtOWIzNS02YTcyMWZkN2JjZmMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.JAtn2EVWRZGzLhxJB5XGD8HMroRtzrO3KOohJGswrKE","Elesis", 14.9, "O título de Gladiador é concedido pela realeza de Vermécia, a um pequeno número de pessoas, como recompensa por sua bravura em combate, realização de missões ou por grandes feitos em nome do reino.", "Classe Gladiadorea", "terceira classe");
const elesisClasse8 = new Produto("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b290d20-fdb2-40a9-8fe4-b4efac3c559c/d47gev5-61344062-8e18-4443-a533-55ee1121d60f.png/v1/fill/w_572,h_807,strp/elesis_cavaleira_2_by_vannorlu_d47gev5-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODA3IiwicGF0aCI6IlwvZlwvNWIyOTBkMjAtZmRiMi00MGE5LThmZTQtYjRlZmFjM2M1NTljXC9kNDdnZXY1LTYxMzQ0MDYyLThlMTgtNDQ0My1hNTMzLTU1ZWUxMTIxZDYwZi5wbmciLCJ3aWR0aCI6Ijw9NTcyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.ozXEWege3LwZZtnk8LrJD4qmx3WFRwlg6KplAvmxiYs","Elesis", 14.9, "O título de Gladiador é concedido pela realeza de Vermécia, a um pequeno número de pessoas, como recompensa por sua bravura em combate, realização de missões ou por grandes feitos em nome do reino.", "Classe Gladiadorea", "terceira classe");
const elesisClasse9 = new Produto("https://gcnewsoffcial.files.wordpress.com/2013/03/15gtn.png","Elesis", 14.9, "Elesis se tornou a primeira garota a entrar para os Cavaleiros Vermelhos de Canaban, onde foi treinada de perto por Gerard, um dos comandantes do grupo que a conhecia desde pequena.", "Classe Cavaleira", "segunda classe");
const elesisClasse10 = new Produto("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b290d20-fdb2-40a9-8fe4-b4efac3c559c/d47gev5-61344062-8e18-4443-a533-55ee1121d60f.png/v1/fill/w_572,h_807,strp/elesis_cavaleira_2_by_vannorlu_d47gev5-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODA3IiwicGF0aCI6IlwvZlwvNWIyOTBkMjAtZmRiMi00MGE5LThmZTQtYjRlZmFjM2M1NTljXC9kNDdnZXY1LTYxMzQ0MDYyLThlMTgtNDQ0My1hNTMzLTU1ZWUxMTIxZDYwZi5wbmciLCJ3aWR0aCI6Ijw9NTcyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.ozXEWege3LwZZtnk8LrJD4qmx3WFRwlg6KplAvmxiYs","Elesis", 14.9, "O título de Cavaleiro é dado aos guerreiros que se especializam na técnica de combate a média distância utilizando a Lança, permitindo que efetuem golpes poderosos a uma distância segura do inimigo.", "Classe Cavaleira", "segunda classe");
const elesisClasse11 = new Produto("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b290d20-fdb2-40a9-8fe4-b4efac3c559c/d6k808h-451c9401-b97a-4933-9b35-6a721fd7bcfc.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzViMjkwZDIwLWZkYjItNDBhOS04ZmU0LWI0ZWZhYzNjNTU5Y1wvZDZrODA4aC00NTFjOTQwMS1iOTdhLTQ5MzMtOWIzNS02YTcyMWZkN2JjZmMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.JAtn2EVWRZGzLhxJB5XGD8HMroRtzrO3KOohJGswrKE","Elesis", 14.9, "O título de Gladiador é concedido pela realeza de Vermécia, a um pequeno número de pessoas, como recompensa por sua bravura em combate, realização de missões ou por grandes feitos em nome do reino.", "Classe Gladiadorea", "terceira classe");
const elesisClasse12 = new Produto("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b290d20-fdb2-40a9-8fe4-b4efac3c559c/d47gev5-61344062-8e18-4443-a533-55ee1121d60f.png/v1/fill/w_572,h_807,strp/elesis_cavaleira_2_by_vannorlu_d47gev5-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODA3IiwicGF0aCI6IlwvZlwvNWIyOTBkMjAtZmRiMi00MGE5LThmZTQtYjRlZmFjM2M1NTljXC9kNDdnZXY1LTYxMzQ0MDYyLThlMTgtNDQ0My1hNTMzLTU1ZWUxMTIxZDYwZi5wbmciLCJ3aWR0aCI6Ijw9NTcyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.ozXEWege3LwZZtnk8LrJD4qmx3WFRwlg6KplAvmxiYs","Elesis", 14.9, "O título de Gladiador é concedido pela realeza de Vermécia, a um pequeno número de pessoas, como recompensa por sua bravura em combate, realização de missões ou por grandes feitos em nome do reino.", "Classe Gladiadorea", "terceira classe");


const produtos = [elesisClasse1,elesisClasse2, elesisClasse3, elesisClasse4,elesisClasse1,elesisClasse2, elesisClasse3, elesisClasse4,elesisClasse1,elesisClasse2, elesisClasse3, elesisClasse4,];



/* categoriaFiltro('Classe Cavaleira'); */

function App() {

  const [itemEstado, setItemEstado] = useState(produtos);

  function categoriaFiltro(event) {

    const retornoLoja = produtos.filter((produto)=>{
     return produto.categoria === event.target.value;
             
    });

    console.log(retornoLoja);
   setItemEstado(retornoLoja);
  
  }

  function limpaPesquisa(){
    setItemEstado(produtos); 
  }
  
  return (
    <div className='container'>
      <Menu clickCategoria = {categoriaFiltro} limpaPesquisa = {limpaPesquisa}></Menu>
      <Catalogo produtos = {itemEstado}/>
    </div>
  );
}

export default App;
