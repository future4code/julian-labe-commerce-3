import React from 'react'
import styled from 'styled-components'

export default function SelectPreco(props) {
    return (
        <div>
            <select>
                {props.opcoes.map(opcao => (
                    <option value={opcao}> {opcao} </option>
                ))}
            </select>
        </div>
    );
}