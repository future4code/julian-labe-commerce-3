import React from 'react'
import styled from 'styled-components'

const InputBusca = styled.input`
    margin: 0;
    border-top: none;
    border-left: none;
    border-right: none;
    background-color: #171763;
    border-color: black;
`

const BoxBusca = styled.div`
    margin: 0;
    display: flex;
    height: 30px;
    padding: 10px;
`

const BotaoBusca = styled.button`
    margin: 0;
    display: flex;
    background-color: indigo;
    font-weight: bolder;
    padding: 5px 20px;
    border-radius: 30px;
    border-color: grey;
    cursor: pointer;
`

class CaixaBusca extends React.Component {
    state = {
        inputNomeProduto: ''
    }

          render() {
            return (
                <BoxBusca>
                    <InputBusca type={'text'} placeholder={'Digite seu destino'} value={this.props.filtroTexto} onChange={this.props.onChangeValorTexto}/>
                    <BotaoBusca onClick={this.props.onClickBuscar}>Buscar</BotaoBusca>
                </BoxBusca>
            );
        }
}

export default CaixaBusca;