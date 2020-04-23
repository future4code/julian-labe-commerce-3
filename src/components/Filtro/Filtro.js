import React from 'react'
import styled from 'styled-components'

class Filtro extends React.Component() {
    state = {
        inputValorMin = '',
        inputValorMax = '',
        inputBuscarPeloNome = '',
        ordemProdutos = '',
        listaFiltrada = []
    }

    filtroValorMin = e => {
        this.setState({
            inputValorMin: e.target.value;
        });
    }

    filtroValorMax = e => {
        this.setState({
            inputValorMax: e.target.value;
        });
    }

    filtroBuscarPeloNome = e => {
        this.setState({
            inputBuscarPeloNome: e.target.value;
        });
    }

    // filtrandoPeloNome(nome) {
    //     let produtos = this.state.listaDeProdutos;
    //     if (nome) {
    //         produtos = produtos.filter(item => {
    //             const buscaNome = item.nome.toLowerCase();

    //             return buscaNome === this.state.inputBuscarPeloNome
    //         });
    //     }
    // }

    ordenaProdutosDaLista = (a, b) => {
        if(this.state.ordemProdutos === 'Preço: crescente') {
            return a.preco - b.preco
        } else if(this.state.ordemProdutos === 'Preço: decrescente') {
            return b.preco - a.preco
        }
    }

    filtroListaDeProdutos = () => {
        return 
    }



    return(
        <NavFiltro>
            <h3>Filtros</h3>
            <label>Valor mínimo: </label>
            <input type="number" value={this.state.inputValorMin} onChange={this.filtroValorMin} />

            <label>Valor máximo: </label>
            <input type="number" value={this.state.inputValorMax} onChange={this.filtroValorMax} />

            <label>Buscar produto: </label>
            <input type="text" value={this.state.inputBuscarPeloNome} onChange={this.filtroBuscarPeloNome} />
           

            <label>Buscar produto: </label>
            <input type="text" value={this.state.inputBuscarPeloNome} onChange={this.filtroBuscarPeloNome} />

        </NavFiltro>
    );
}

export default Filtro;