import React from 'react';
import styled from 'styled-components'
import Filtro from './components/Filtro/Filtro'
import Produto from './components/Home/Produto'
import CaixaBusca from './components/Filtro/CaixaBusca'

const AppContainer = styled.main`
  margin: 0;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template: 1fr / 1fr 3fr 1fr;
 
`
const NavFiltro = styled.nav`
  border: 1px solid black;
`
const SecaoProdutos = styled.section`
  width: 100%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`
const HeaderProdutos = styled.header`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  
`
const PrateleiraProdutos = styled.div`
  height: 100%;
  width: 80%;
  display: grid;
  grid-template: repeat(4, 1fr) / repeat(4, 1fr) ;
  column-gap: 10px;
  
  
`
const SecaoCarrinho = styled.section`
  border: 1px solid black;
`

class App extends React.Component {

  //COMPONENTES DE CLASSE

  state = {
    listaDeProdutos: [],
    listaDoCarrinho: [],
    listaDoBuscarNome: [],
    valorNomeBusca: '',

    valorInputMax: 0,
    valorInputMin: 0,
    valorInputSelect: '',
    listaMaxMin: []
  }

  componentDidMount() {
    const listaDeObjetos = [
      { id: 'p1', url: 'https://i.picsum.photos/id/570/200/200.jpg', nome: 'Produto1', preco: 10 },
      { id: 'p2', url: 'https://i.picsum.photos/id/571/200/200.jpg', nome: 'Produto2', preco: 20 },
      { id: 'p3', url: 'https://i.picsum.photos/id/572/200/200.jpg', nome: 'Produto3', preco: 50 },
      { id: 'p4', url: 'https://i.picsum.photos/id/573/200/200.jpg', nome: 'Produto4', preco: 100 }
    ];

    localStorage.setItem('listaProdutos', JSON.stringify(listaDeObjetos))

    this.setState({ listaDeProdutos: listaDeObjetos })

  }

  componentDidUpdate() {

  }

  //FUNÇÕES//

  //Busca o item clicado pelo id e insere ele no estado listaDoCarrinho
  adicionarAoCarrinho = (event) => {

    let idSelecionado = event.target.id;
    let listaProdutos = this.state.listaDeProdutos;

    let produtoSelecionado = listaProdutos.filter(produto => {
      return produto.id === idSelecionado
    })
    this.state.listaDoCarrinho.push(produtoSelecionado[0])
  }

  filtroBuscarPeloNome = e => {
    this.setState({
      valorNomeBusca: e.target.value
    });
  }

  onChangeValorMin = e => {
    this.setState({
      valorInputMin: Number(e.target.value)
    });
  }

  onChangeValorMax = e => {
    this.setState({
      valorInputMax: Number(e.target.value)
    });
  }

  onClickFiltrar = () => {
    let estadoValorMax = this.state.valorInputMax
    let estadoValorMin = this.state.valorInputMin
    let listaDeProdutos = this.state.listaDeProdutos

    let listaFiltrada = listaDeProdutos.filter((produto) => {
      return produto.preco <= estadoValorMax && produto.preco >= estadoValorMin
    })
  }

  render() {
    const produtosNaPrateleira = this.state.listaDeProdutos.map(produto => {
      return (
        <Produto

          ImagemProduto={produto.url}
          NomeProduto={produto.nome}
          PrecoProduto={`R$ ${produto.preco}`}
          Id={produto.id}
          AdicionarAoCarrinho={this.adicionarAoCarrinho}
        />
      )
    });


    return (

      <AppContainer>

        <NavFiltro>
          <Filtro
            valorInputMin={this.state.valorInputMin}
            filtroValorMin={this.onChangeValorMin}
            valorInputMax={this.state.valorInputMax}
            filtroValorMax={this.onChangeValorMax}
            onClickFiltrar={this.onClickFiltrar}
          />

        </NavFiltro>

        <SecaoProdutos>

          <HeaderProdutos>
            <p>header dos produtos</p>
            <CaixaBusca
              filtroBuscarPeloNome={this.filtroBuscarPeloNome}
              produtoBusca={this.state.valorNomeBusca}
            />
          </HeaderProdutos>

          <PrateleiraProdutos>

            {produtosNaPrateleira}

          </PrateleiraProdutos>

        </SecaoProdutos>

        <SecaoCarrinho>
          <p>carrinho aqui</p>
        </SecaoCarrinho>

      </AppContainer>

    )
  }
}

export default App;
