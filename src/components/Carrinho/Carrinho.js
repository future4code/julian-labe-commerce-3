import React from 'react'
import styled from 'styled-components'

const BoxCarrinho = styled.div`

`
const ListaCarrinho = styled.ul`
    list-style: none;
    overflow: auto;
    
`
const Produto = styled.li`
    color: black;
    &:hover {
         color: red;
     }
`

const InfoCarrinho = styled.p`
    
`
class Carrinho extends React.Component {

    receberDadosDoPai = () => {
        const listaCarrinhoDoPai = this.props.receberCarrinho();

        return listaCarrinhoDoPai

    }

    state = {
        listaDoCarrinho: this.receberDadosDoPai(),
        listaLocalInicialVazia: true
    }

    componentDidMount() {
        let listaLocal = JSON.parse(localStorage.getItem('listaCarrinho'))
        let listaInicialEstado = this.state.listaDoCarrinho

        if (listaLocal !== null) {
            if (listaInicialEstado.length < listaLocal.length) {

                listaLocal.forEach(produto => {
                    this.state.listaDoCarrinho.push(produto)
                });

                this.setState({ listaLocalInicialVazia: !this.state.listaLocalInicialVazia })

            }
        }
    }

    componentWillUpdate() {
        const listaFinal = this.state.listaDoCarrinho


        if (listaFinal !== undefined && listaFinal.length > 0) {
            localStorage.setItem('listaCarrinho', JSON.stringify(listaFinal))
        }
    }

    componentWillUnmount() {
        localStorage.setItem('listaCarrinho', JSON.stringify(this.state.listaDoCarrinho))
    }

    enviarDadosCarrinho = (Dado) => {

        this.props.carrinhoCallback(Dado)
    }

    render() {

        var listaDoPai = this.state.listaDoCarrinho

        let produtosNoCarrinho

        let removerDoCarrinho = (e) => {
            let idDoProduto

            let r = window.confirm('Deseja remover o item do carrinho?');

            if (r === true) {
                idDoProduto = e.target.id

                let indexProduto = listaDoPai.findIndex(produto => {
                    return produto.id === idDoProduto
                })

                listaDoPai.splice(indexProduto, 1)

                e.target.style.display = 'none'

                this.setState({ listaDoCarrinho: listaDoPai })

                localStorage.setItem('listaCarrinho', JSON.stringify(listaDoPai))

            } else {
                alert('Item não removido.')
            }
        }

        if (listaDoPai !== undefined) {
            produtosNoCarrinho = listaDoPai.map(produto => {
                return (
                    <Produto
                        onDoubleClick={removerDoCarrinho}
                        id={produto.id}
                    >
                        {produto.nome} - R${produto.preco}
                    </Produto>
                )
            });

        } else {
            produtosNoCarrinho = []
        }

        let valorTotal = 0
        let precoProduto = this.state.listaDoCarrinho.forEach(produto => {

            valorTotal += produto.preco

        })

        return (

            <BoxCarrinho>

                <InfoCarrinho>Carrinho</InfoCarrinho>

                <ListaCarrinho>
                    {produtosNoCarrinho}
                </ListaCarrinho>

                <InfoCarrinho>
                    Total <b>R$ {valorTotal}</b>
                </InfoCarrinho>
                
            </BoxCarrinho>

        )
    }
};

export default Carrinho;