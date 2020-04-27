import React from 'react'
import styled from 'styled-components'

const BoxIcone = styled.div`
    position: fixed;
    top: 82%;
    right: 1%;
    padding: 10px;
`

const Icone = styled.img`
    width: 70px;
    height: 70px;
`

class IconeFlutuante extends React.Component {
    state = {

    }

    render() {
        return (
            <BoxIcone>
                <Icone src='https://lh3.googleusercontent.com/proxy/ae8y9IwnmgLXBnBBIwHq0on4XqWitouvmOEgRhFPpeIHfmsVEJGuPTCoOr63M0OmL4B8MtKlfjSUtqZhhR--1KGp64zBCIebThx5D6alz3GQQflUcNNavNM9uidArV93gxeWhlO4vT3WCvqF' />
            </BoxIcone>
        );
    }
}


export default IconeFlutuante;