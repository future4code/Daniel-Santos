import React from 'react';
import axios from 'axios';

export default class Cadastro extends React.Component {
    state = {
        nome:"",
        email:"",
    }

    hadleNome = (event) => {
        this.setState({nome: event.target.value})
    }

    handleEmail = () => {
        this.setState({email: event.target.value})
    }

    efetuarCadastro = () => {
        const url ='https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
        const body = {
            name: this.state.nome,
            email: this.state.email
        } 

        axios.post(url, body, {
            headers: {
                Authorization:"Daniel-Santos"
            }
        })
        .then((res) => {
            console.log()
        })
        .catch((err) => {
            console.log()
        })
    }

    render()
    {
        return(
            <div>
                <button onClick={this.props.irLista}>Ir para lista de usuários</button>
                <h2>Cadastro</h2>
                <input 
                    placeholder={"nome"}
                    value={this.state.nome}
                    onChange={this.hadleNome()}
                />
                <input 
                    placeholder={"e-mail"}
                    value={this.state.email}
                    onChange={this.handleEmail()}
                />
                <button onClick={this.efetuarCadastro}/>
            </div>
        )
    }
}