import React from 'react'
import styled from 'styled-components'

const BoxProduto = styled.div`
    margin: 0;
    border: 2px outset grey;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    transition: 0.8s all ease-out;
    &:hover {
      opacity: 1.0;
    }
`

const ImagemProduto = styled.img`
    margin: 0;
    max-width: 100%;
    border-radius: 100px;
`
const InfoProduto = styled.p`
    max-width: 100%;
    margin: 0;
    font-weight: bold;
    color: aliceblue;
`
const BotaoProduto = styled.button`
    max-width: 100%;
    margin: 0;
    padding: 5px;
    border-radius: 30px;
    background-color: azure;
    font-weight: bold;
    cursor: pointer;
`

class Produto extends React.Component {
    state = {

    }

    render() {
        return (
            <BoxProduto id={this.props.Id}>
                <ImagemProduto src={this.props.ImagemProduto} />
                <InfoProduto>{this.props.NomeProduto}</InfoProduto>
                <InfoProduto>{this.props.PrecoProduto}</InfoProduto>
                <BotaoProduto id={this.props.Id} onClick={this.props.AdicionarAoCarrinho}>Adicionar passaporte</BotaoProduto>
            </BoxProduto>
        )
    }
}
export default Produto;