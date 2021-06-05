import React from 'react';
import axios from 'axios';

export default class Lista extends React.Component {
    state = {
        usuario:[]
    }

    componentDidMount() {
        this.pegaUsuario()
    }

    pegaUsuario = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
        axios.get(url, {
            headers:{
                Authorization:"Daniel-Santos-munoz"

            }
        })
        .then((resp)  => {
            console.log(resp)
            this.setState({usuario: resp.data})
        })
        .catch((err) => {
            console.log(err)
        })

    }

    deletaUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers:{
                Authorization:"Daniel-Santos-munoz"
            }
        })
        .then((res) => {
            console.log(res)
            this.pegaUsuario()
        })
        .catch((err) => {
            console.log(err.response.data)
        })
    }


    render(){
        const listaDeUsuarios = this.state.usuario.map((user) => {
            return <div key={user.id}>{user.name}
            <button onClick={() => this.deletaUsuario(user.id)}>X</button>
            </div>
            
        })
        return(
            <div>
                <button onClick={this.props.irCadastro}>Ir para Cadastro</button>
                <h2>
                    Lista de usuários
                </h2>
                {listaDeUsuarios}
            </div>
        )
    }
}