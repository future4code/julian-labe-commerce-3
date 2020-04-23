import React from 'react'
import styled from 'styled-components'

const BoxProduto = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
 
`
const ImagemProduto = styled.img`
    margin: 0;
    
`
const InfoProduto = styled.p`
    margin: 0;
`
const BotaoProduto = styled.button`
    margin: 0;
`

class Produto extends React.Component{
    state = {

    }

    render(){
        return(
            <BoxProduto id={this.props.Id}>
                <ImagemProduto src={this.props.ImagemProduto}/>
                <InfoProduto>{this.props.NomeProduto}</InfoProduto>
                <InfoProduto>{this.props.PrecoProduto}</InfoProduto>
                <BotaoProduto id={this.props.Id} onClick={this.props.AdicionarAoCarrinho}>Adicionar ao carrinho</BotaoProduto>
            </BoxProduto>
        )
    }

}
export default Produto