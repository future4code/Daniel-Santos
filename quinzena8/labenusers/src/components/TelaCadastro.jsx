import React from 'react';

export default class Cadastro extends React.Component {
    render()
    {
        return(
            <div>
                <button onClick={this.props.irLista}>Ir para lista de usuários</button>
                <h2>Cadastro</h2>
            </div>
        )
    }
}