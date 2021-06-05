import React from 'react';

export default class Lista extends React.Component {
    render(){
        return(
            <div>
                <butto onClick={this.props.irCadastro}>Ir para Cadastro</butto>
                <h2>
                    Lista de usuários
                </h2>
            </div>
        )
    }
}