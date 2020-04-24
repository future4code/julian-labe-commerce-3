import React from 'react'
import styled from 'styled-components'

const ValorMin = styled.input`
    margin: 0;
`

const ValorMax = styled.input`
    margin: 0;
`
const BotaoFiltrar = styled.button`
    margin: 0;
    background-color: grey;
`

const OrdenaProdutos = styled.select`
    margin: 0;
`

const BoxFiltro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: flex-start;
`

class Filtro extends React.Component {
    state = {
        
    }
      

    render() {
        return (
            <BoxFiltro>
                <h3>Filtros</h3>
                <labelValorMin>Valor mínimo: </labelValorMin>
                <ValorMin type={'number'} value={this.props.valorInputMin} onChange={this.props.filtroValorMin} />

                <labelValorMax>Valor máximo: </labelValorMax>
                <ValorMax type={'number'} value={this.props.valorInputMax} onChange={this.props.filtroValorMax} />

                <BotaoFiltrar onClick={this.props.onClickFiltrar}>Filtrar</BotaoFiltrar>

                <br />

                <OrdenaProdutos>
                    <option value={'crescente'}>Preço: Crescente</option>
                    <option value={'decrescente'}>Preço: Decrescente</option>
                </OrdenaProdutos>

            </BoxFiltro>
        );
    }
}

export default Filtro;