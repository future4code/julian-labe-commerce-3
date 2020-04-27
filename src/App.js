import React from 'react';
import styled from 'styled-components'
import Filtro from './components/Filtro/Filtro'
import Produto from './components/Home/Produto'
import CaixaBusca from './components/Filtro/CaixaBusca'
import IconeFlutuante from './components/IconeFlutuante'
import Carrinho from './components/Carrinho/Carrinho'

const AppContainer = styled.main`
  margin: 0;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template: 1fr / 1fr 4fr;
`
const NavFiltro = styled.nav`
  border: 1px solid grey;
  color: indigo;
  background-color: azure;
`
const SecaoProdutos = styled.section`
  width: 100%;
  border: 1px solid grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image:url(https://us.123rf.com/450wm/natalia0103/natalia01031508/natalia0103150800030/44239332-deep-outer-space-background-with-stars-.jpg?ver=6);
`
const HeaderProdutos = styled.header`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #171763;
`

const PrateleiraProdutos = styled.div`
  height: 100%;
  width: 90%;
  display: grid;
  grid-template: repeat(4, 1fr) / repeat(4, 1fr);
  column-gap: 15px;
  row-gap: 15px;
  padding: 20px;
`
const SecaoCarrinho = styled.section`
  border: 1px solid grey;
`

class App extends React.Component {

  //COMPONENTES DE CLASSE

  state = {
    listaDeProdutos: [],

    listaDoCarrinho: [],
    adicionouAoCarrinho: false,

    listaDoBuscarNome: [],
    listaDoSelect: [],

    valorInputMax: 0,
    valorInputMin: 0,
    filtroTexto: '',
    valorInputSelect: '',
  }

  componentDidMount() {
    const listaDeObjetos = [
      { id: 'p1', url: 'https://cdn.spacetelescope.org/archives/images/screen/heic1107a.jpg', nome: 'Galáxia muito doida', preco: 10 },
      { id: 'p2', url: 'https://s3.portalt5.com.br/imagens/Nasa-Marte.png?mtime=20171129125914', nome: 'Excursão para aplaudir o pôr do sol em Marte', preco: 20 },
      { id: 'p3', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/The_Sombrero_Galaxy.jpg/791px-The_Sombrero_Galaxy.jpg', nome: 'Galáxia Sombreiro', preco: 25 },
      { id: 'p4', url: 'https://cosmophotography.files.wordpress.com/2013/11/a_comb_levels_curves.jpg', nome: 'Galáxia Andrômeda', preco: 50 },
      { id: 'p5', url: 'https://www.nasa.gov/sites/default/files/thumbnails/image/orion-nebula-xlarge_web.jpg', nome: 'Nebulosa de Órion', preco: 55 },
      { id: 'p6', url: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/V838_Mon_HST.jpg', nome: 'Estrela vermelha gigante', preco: 69 },
      { id: 'p7', url: 'https://lh3.googleusercontent.com/proxy/5KI2PNu8uf5xLiE0KVkaFJKlOeCsD3r6-ofxyBqVOKKMsOZ7ZaZpCj-LoRXQ4eU2eBec2lwIP5y7W3zVWGIopDhu7-4tygMhjKVcYpSgf2if0OevbfPWn1Q4L3w4TvNZhwspxEoKPkqmLcRtXwEF1isU_qY', nome: 'Viagem só de ida para Sirius', preco: 78 },
      { id: 'p8', url: 'https://cdn.spacetelescope.org/archives/images/screen/heic0709b.jpg', nome: 'Tour até o aglomerado Abell 370', preco: 100 },
      { id: 'p9', url: 'https://img.estadao.com.br/fotos/crop/1200x1200/resources/jpg/4/5/1478372629454.jpg', nome: 'Venha para o planeta Marte!', preco: 46 },
      { id: 'p10', url: 'https://www.ccvalg.pt/astronomia/sistema_solar/lua/buzz_aldrin.jpg', nome: 'Venha pisar na Lua!', preco: 33 },
      { id: 'p11', url: 'https://i0.wp.com/www.dicasecuriosidades.net/wp-content/uploads/2018/01/Astronaut-landing-on-jupiter-370x297.jpg?fit=370%2C297&ssl=1', nome: 'Conheça o planeta Júpiter!', preco: 88 },
      { id: 'p12', url: 'https://ssl.c.photoshelter.com/img-get/I0000JwrrezW5Vxw/s/860/860/Neptune-seen-from-Triton-polar-region.jpg', nome: 'Conheça Tritão, a Lua de Netuno', preco: 99 },
    ];

    localStorage.setItem('listaProdutos', JSON.stringify(listaDeObjetos))

    this.setState({ listaDeProdutos: listaDeObjetos })

    localStorage.setItem('listaCarrinho', JSON.stringify([]))

  }

  componentDidUpdate() {
    
  }

  componentWillUnmount(){
    
  }

  //FUNÇÕES//

  enivarListaCarrinho = ()=>{
    if(this.state.listaDoCarrinho !== undefined){
      return this.state.listaDoCarrinho
    }
  }

  receberDadosCarrinho = (Dados) =>{
     this.setState({adicionouAoCarrinho: Dados})
  }

  adicionarAoCarrinho = (event) => {
    
    let idSelecionado = event.target.id;
    let listaProdutos = this.state.listaDeProdutos;

    let produtoSelecionado = listaProdutos.filter(produto => {
      return produto.id === idSelecionado
    })

    this.state.listaDoCarrinho.push(produtoSelecionado[0])
    this.setState({ adicionouAoCarrinho: !this.state.adicionouAoCarrinho })

    this.enivarListaCarrinho()
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

  onChangeValorTexto = e => {
    this.setState({
      filtroTexto: e.target.value
    })
  }

  onClickBuscar = () => {
    let estadoValorNome = this.state.filtroTexto
    let listaDeProdutos = this.state.listaDeProdutos
    let produtosFiltradosNome = listaDeProdutos.filter((produto) => {
      return produto.nome.includes(this.state.filtroTexto)
    });
    produtosFiltradosNome.forEach((produto) => {
      this.state.listaDoBuscarNome.push(produto)
    })
  }

  onChangeSelectPrecos = (e) => {
    const listaDeProdutos = this.state.listaDeProdutos

    if (e.target.value === 'Preço: crescente') {
      const novaListaOrdenada = listaDeProdutos.sort((a, b) => {
        return (a.preco - b.preco)
      });
      this.setState({ listaDeProdutos: novaListaOrdenada })


    } else if (e.target.value === 'Preço: decrescente') {
      const novaListaOrdenada = listaDeProdutos.sort((a, b) => {
        return (b.preco - a.preco)
      });
      this.setState({ listaDeProdutos: novaListaOrdenada })

    }
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

            onChangeSelectPrecos={this.onChangeSelectPrecos}
            opcoes={{
              opcao1: 'Preço: crescente',
              opcao2: 'Preço: decrescente'
            }}
          />

        </NavFiltro>

        <SecaoProdutos>

          <HeaderProdutos>
            <h1>Negócios Espaciais</h1>
            <CaixaBusca
              filtroTexto={this.state.filtroTexto}
              onChangeValorTexto={this.onChangeValorTexto}
              onClickBuscar={this.onClickBuscar}
            />
          </HeaderProdutos>

          <PrateleiraProdutos>
            {produtosNaPrateleira}
          </PrateleiraProdutos>

          <IconeFlutuante />
        
        </SecaoProdutos>

        <SecaoCarrinho>

          <Carrinho
          
          carrinhoCallback = {this.receberDadosCarrinho}
          receberCarrinho = {this.enivarListaCarrinho}
          />

        </SecaoCarrinho>

      </AppContainer>

    )
  }
}

export default App;