import React from 'react'
import styled from 'styled-components'

const InputBusca = styled.input`
    
`

const BoxBusca = styled.div`
    display: flex;
    flex-direction: row;
    justify-items: center;
`

class CaixaBusca extends React.Component {
    state = {
        inputNomeProduto: ''
    }


          render() {
            return (
                <BoxBusca>
                    <InputBusca type={'text'} value={this.props.produtoBusca} onChange={this.props.filtroBuscarPeloNome}/>
                </BoxBusca>
            );
        }
}

export default CaixaBusca;