import React from 'react'
import styled from 'styled-components'

const InputBusca = styled.input`
    margin: 0;
    border-top: none;
    border-left: none;
    border-right: none;
`

const BoxBusca = styled.div`
    margin: 0;
    display: flex;
    height: 30px
`

const BotaoBusca = styled.div`
    margin: 0;
    display: flex;
    background-color: salmon;
`

class CaixaBusca extends React.Component {
    state = {
        inputNomeProduto: ''
    }


          render() {
            return (
                <BoxBusca>
                    <InputBusca type={'text'} placeholder={'Pesquisa por nome'} value={this.props.produtoBusca} onChange={this.props.filtroBuscarPeloNome}/>
                    <BotaoBusca onClick={''}>Buscar</BotaoBusca>
                </BoxBusca>
            );
        }
}

export default CaixaBusca;