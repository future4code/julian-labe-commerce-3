import React from 'react'
import styled from 'styled-components'

const ValorMin = styled.input`
    margin: 5px;
    border-radius: 10px;
    padding: 5px;
`

const ValorMax = styled.input`
    margin: 5px;
    border-radius: 10px;
    padding: 5px;
`
const BotaoFiltrar = styled.button`
    margin: 10px;
    background-color: indigo;
    font-weight: bolder;
    padding: 10px 30px;
    border-radius: 30px;
    border-color: grey;
    cursor: pointer;
`

const OrdenaProdutos = styled.select`
    margin: 20%;
    border-radius: 30px;
    cursor: pointer;
`

const BoxFiltro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: flex-start;
    margin-top: 20%;
`

class Filtro extends React.Component {
    state = {

    }


    render() {
        let opcoes = this.props.opcoes

        return (
            <BoxFiltro>
                <h3>Filtros</h3>
                <labelValorMin>Valor mínimo: </labelValorMin>
                <ValorMin type={'number'} value={this.props.valorInputMin} onChange={this.props.filtroValorMin} />

                <labelValorMax>Valor máximo: </labelValorMax>
                <ValorMax type={'number'} value={this.props.valorInputMax} onChange={this.props.filtroValorMax} />

                <BotaoFiltrar onClick={this.props.onClickFiltrar}>Filtrar</BotaoFiltrar>

                <OrdenaProdutos onChange={this.props.onChangeSelectPrecos}>
                    <option value={opcoes.opcao1}> {opcoes.opcao1} </option>
                    <option value={opcoes.opcao2}> {opcoes.opcao2} </option>
                </OrdenaProdutos>

            </BoxFiltro>
        );
    }
}

export default Filtro;