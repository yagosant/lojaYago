import logo from './logo.svg';
import './App.css';
import Header from './componentes/Header';
import Menu from './componentes/Menu';
import Catalogo from './componentes/Catalogo';
import Search from './componentes/Search';
import { useEffect, useState } from 'react';
import Paralax from './componentes/Paralax';


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

function geraNumAleatorio() {
  return (Math.random() * 11).toFixed(2);
}

const elesisClasse1 = new Produto("https://gcnewsoffcial.files.wordpress.com/2013/03/15gtn.png","Elesis", geraNumAleatorio(), "Elesis se tornou a primeira garota a entrar para os Cavaleiros Vermelhos de Canaban, onde foi treinada de perto por Gerard, um dos comandantes do grupo que a conhecia desde pequena.", "Classe Cavaleira", "segunda classe");
const elesisClasse2 = new Produto("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b290d20-fdb2-40a9-8fe4-b4efac3c559c/d47gev5-61344062-8e18-4443-a533-55ee1121d60f.png/v1/fill/w_572,h_807,strp/elesis_cavaleira_2_by_vannorlu_d47gev5-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODA3IiwicGF0aCI6IlwvZlwvNWIyOTBkMjAtZmRiMi00MGE5LThmZTQtYjRlZmFjM2M1NTljXC9kNDdnZXY1LTYxMzQ0MDYyLThlMTgtNDQ0My1hNTMzLTU1ZWUxMTIxZDYwZi5wbmciLCJ3aWR0aCI6Ijw9NTcyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.ozXEWege3LwZZtnk8LrJD4qmx3WFRwlg6KplAvmxiYs","Elesis", geraNumAleatorio(), "O título de Cavaleiro é dado aos guerreiros que se especializam na técnica de combate a média distância utilizando a Lança, permitindo que efetuem golpes poderosos a uma distância segura do inimigo.", "Classe Cavaleira", "segunda classe");
const elesisClasse3 = new Produto("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b290d20-fdb2-40a9-8fe4-b4efac3c559c/d6k808h-451c9401-b97a-4933-9b35-6a721fd7bcfc.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzViMjkwZDIwLWZkYjItNDBhOS04ZmU0LWI0ZWZhYzNjNTU5Y1wvZDZrODA4aC00NTFjOTQwMS1iOTdhLTQ5MzMtOWIzNS02YTcyMWZkN2JjZmMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.JAtn2EVWRZGzLhxJB5XGD8HMroRtzrO3KOohJGswrKE","Elesis", geraNumAleatorio(), "O título de Gladiador é concedido pela realeza de Vermécia, a um pequeno número de pessoas, como recompensa por sua bravura em combate, realização de missões ou por grandes feitos em nome do reino.", "Classe Gladiadorea", "terceira classe");
const elesisClasse4 = new Produto("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b290d20-fdb2-40a9-8fe4-b4efac3c559c/d47gev5-61344062-8e18-4443-a533-55ee1121d60f.png/v1/fill/w_572,h_807,strp/elesis_cavaleira_2_by_vannorlu_d47gev5-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODA3IiwicGF0aCI6IlwvZlwvNWIyOTBkMjAtZmRiMi00MGE5LThmZTQtYjRlZmFjM2M1NTljXC9kNDdnZXY1LTYxMzQ0MDYyLThlMTgtNDQ0My1hNTMzLTU1ZWUxMTIxZDYwZi5wbmciLCJ3aWR0aCI6Ijw9NTcyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.ozXEWege3LwZZtnk8LrJD4qmx3WFRwlg6KplAvmxiYs","Elesis", geraNumAleatorio(), "O título de Gladiador é concedido pela realeza de Vermécia, a um pequeno número de pessoas, como recompensa por sua bravura em combate, realização de missões ou por grandes feitos em nome do reino.", "Classe Gladiadorea", "terceira classe");

const lireClasse1 = new Produto("http://3.bp.blogspot.com/-Az9NhQYYT6A/TktG-0V66zI/AAAAAAAAAk4/EtsE9PCk4sw/s320/Colunista%2BLire.png","Lire", geraNumAleatorio(), "a Arqueira Lire recebeu como sua primeira missão se unir aos humanos do continente no grupo da Grand Chase, um grupo especialmente criado para combater Cazeaje e suas forças das trevas.", "Classe Arqueira", "primeira classe");
const lireClasse2 = new Produto("https://i.pinimg.com/originals/0d/3e/74/0d3e7482ff3dcdd5903a326424df3d73.png","Lire", geraNumAleatorio(), "Procurando aprimorar suas habilidades e melhorar sua velocidade e mobilidade, Lire se especializou no uso das Bestas, pequenos “arcos mecânicos” que disparam setas com grande cadência de tiro.", "Classe Caçadora", "segunda classe");
const lireClasse3 = new Produto("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4dc18575-c703-4ddb-80f4-b43919162d83/d4ab9xd-5ae149d4-c365-460c-a611-de4fbc9c22e7.png/v1/fill/w_900,h_767,strp/lire___guardia_by_fanaticosgc_d4ab9xd-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY3IiwicGF0aCI6IlwvZlwvNGRjMTg1NzUtYzcwMy00ZGRiLTgwZjQtYjQzOTE5MTYyZDgzXC9kNGFiOXhkLTVhZTE0OWQ0LWMzNjUtNDYwYy1hNjExLWRlNGZiYzljMjJlNy5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.UZFNJIrHmKIhnJ58za3mpVQQHZ4HnlqbYJ9JYCY8SlA","Lire", geraNumAleatorio(), "Esse seria um arco gigantesco, conhecido como Balista, que normalmente é montado em grandes máquinas de guerra, disparando flechas pesadas.", "Classe Guardiã", "terceira classe");
const lireClasse4 = new Produto("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b290d20-fdb2-40a9-8fe4-b4efac3c559c/d8k9bp9-d2ac2f19-9240-4702-b90d-ea10a6ebcfe2.png/v1/fill/w_1024,h_1233,strp/lire_nova_season_2___promocional_by_vannorlu_d8k9bp9-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIzMyIsInBhdGgiOiJcL2ZcLzViMjkwZDIwLWZkYjItNDBhOS04ZmU0LWI0ZWZhYzNjNTU5Y1wvZDhrOWJwOS1kMmFjMmYxOS05MjQwLTQ3MDItYjkwZC1lYTEwYTZlYmNmZTIucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.W4ZJBXujcJFGfrux5UggwkUDzTTBTuk-XSEPIlEuZpk","Lire", geraNumAleatorio(), " Este projeto levou ao desenvolvimento de uma nova arma, o arco composto, que usa um sistema de polias, cabos e alavancas para minimizar os esforços do arqueiro e maximizar a eficiência de combate.", "Classe Nova", "quarta classe");

const armeClasse1 = new Produto("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/88dce7f0-66ee-491f-ae8e-22ecd17ae6ec/d6jx9gp-0f873f6c-5065-473e-8263-fdaf6188c2b1.png/v1/fit/w_300,h_600,strp/arme_arquimaga_by_iusribeiro_d6jx9gp-300w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjAwIiwicGF0aCI6IlwvZlwvODhkY2U3ZjAtNjZlZS00OTFmLWFlOGUtMjJlY2QxN2FlNmVjXC9kNmp4OWdwLTBmODczZjZjLTUwNjUtNDczZS04MjYzLWZkYWY2MTg4YzJiMS5wbmciLCJ3aWR0aCI6Ijw9Nzc1In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.m9mGYVbZNo9u1iw2JxEYiOsb2AVLkMVyv2jWg26QjmA","Arme", geraNumAleatorio(), "Arme já havia se tornado uma das melhores alunas de magia do reino de Serdin. Armada com seu pequeno Cetro, ela conseguia dominar tanto a magia branca quanto a magia negra..", "Classe Maga", "primeira classe");
const armeClasse2 = new Produto("https://i.pinimg.com/originals/0f/45/1e/0f451e05a08e0b07a860713558d6e0d4.png","Arme", geraNumAleatorio(), "Interessada como sempre, a jovem decidiu procurar mais informações sobre isso, e assim descobriu que existia a possibilidade de transformar a energia mágica em energia explosiva, e de conjurar magias de forma alternativa usando objetos especiais: os Potes Mágicos.", "Classe Alquimista", "segunda classe");
const armeClasse3 = new Produto("http://4.bp.blogspot.com/-VwkTO56CTTQ/UdxYkXXRwFI/AAAAAAAAAHA/Xo58fSqiN_s/s1600/arme+3+classe.png","Arme", geraNumAleatorio(), "Foi então que eles descobriram que era possível converter a própria mana (a energia mágica) em poderosas conjurações de ataque através de Lâmpadas mágicas, se antes fizessem um contrato místico com os Espíritos da Natureza. Contudo, esses espíritos eram muito exigentes a respeito de quem poderia realizar esses contratos", "Classe Feiticeira", "terceira classe");
const armeClasse4 = new Produto("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b290d20-fdb2-40a9-8fe4-b4efac3c559c/d8k9a1g-7aa98413-78e2-4a5f-8cb3-e0c8bbd125d2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzViMjkwZDIwLWZkYjItNDBhOS04ZmU0LWI0ZWZhYzNjNTU5Y1wvZDhrOWExZy03YWE5ODQxMy03OGUyLTRhNWYtOGNiMy1lMGM4YmJkMTI1ZDIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1iGUntRRb2wxypU-NANTSrBQwbQH5k72p1gV7G_wp1I","Arme", geraNumAleatorio(), "Aperfeiçoando suas habilidades ao lado da Grand Chase, Arme finalmente se tornou experiente o suficiente para comandar essa grande quantidade de poder, se transformando na mais nova Arquimaga a serviço de Serdin", "Classe Arquimaga", "quarta classe");

const lassClasse1 = new Produto("https://7c6b06d882.cbaul-cdnwnd.com/03641452b0eef637fd7e5378ceba2253/200000375-e7fabe8f67/Ninja.png","Lass", geraNumAleatorio(), "Determinado a recuperar seu passado, e a vingar-se da Rainha da Escuridão, Lass juntou-se a Grand Chase e jurou lutar contra a escuridão que caía sobre o mundo. Apesar de estar de volta ao lado da luz, seus pesadelos e as visões das atrocidades que cometeu o impedem de ter a mesma alegria e apego à vida de seus companheiros. Empunhando duas Adagas", "Classe Ninja", "primeira classe");
const lassClasse2 = new Produto("http://images.wikia.com/grandchase/pt-br/images/6/69/Assassin.png","Lass", geraNumAleatorio(), "Na sua jornada em busca da redenção, Lass encontrou um Mercenário ancião, pertencente a uma ordem de guerreiros que não temia usar as forças das trevas para realizar o bem, mesmo que isso colocasse em risco seus espíritos.", "Classe Mercenário", "segunda classe");
const lassClasse3 = new Produto("http://4.bp.blogspot.com/-UBP_GG8AqNA/UcBMqy0h2bI/AAAAAAAAAgs/6ahJwJOrpqY/s1600/4.png","Lass", geraNumAleatorio(), "Por muito tempo, Lass lutou contra as trevas em seu interior. Até que ele descobriu antigas técnicas ninjas que ensinavam a abraçar seu lado sombrio ao invés de lutar contra ele.", "Classe Vingagor", "terceira classe");
const lassClasse4 = new Produto("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b290d20-fdb2-40a9-8fe4-b4efac3c559c/d8k9fzu-66a6d4b5-f509-4182-8700-85200ad574c5.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzViMjkwZDIwLWZkYjItNDBhOS04ZmU0LWI0ZWZhYzNjNTU5Y1wvZDhrOWZ6dS02NmE2ZDRiNS1mNTA5LTQxODItODcwMC04NTIwMGFkNTc0YzUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ZYr6pbZP3JfuOzMufV5ICMqKVFmM0aLBwR2jLWjtYNc","Lass", geraNumAleatorio(), "Apesar de ter sido possuído por Cazeaje, Lass enfrentou uma longa jornada em busca da redenção. Finalmente ele foi capaz de dominar totalmente seu lado sombrio, ao aprender que todas as criaturas possuem um lado bom e um lado ruim", "Classe Retalhador", "quarta classe");


const produtos = [elesisClasse1,elesisClasse2, elesisClasse3, elesisClasse4,lireClasse1,lireClasse2, lireClasse3, lireClasse4,armeClasse1,armeClasse2,armeClasse3,armeClasse4,lassClasse1,lassClasse2,lassClasse3,lassClasse4];



/* categoriaFiltro('Classe Cavaleira'); */

function App() {

  const [itemEstado, setItemEstado] = useState(produtos);

  function categoriaFiltro(event) {

    const retornoLoja = produtos.filter((produto)=>{
     return produto.personagem === event.target.value;
             
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
      <Paralax></Paralax>
      <Catalogo produtos = {itemEstado}/>
      <Paralax></Paralax>
      
    </div>
  );
}

export default App;
