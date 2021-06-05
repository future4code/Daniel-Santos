import React from 'react';
import axios from 'axios';

export default class Lista extends React.Component {

    componentDidMount() {
        this.pegaUsuario()
    }

    pegaUsuario = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
        axios.get(url, {
            header:{
                Authorization:"Daniel-Santos"

            }
        })
        .then((resp)  => {
            console.log(resp)
        })
        .catch((err) => {
            console.log(err)
        })

    }

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