import React from "react";
import axios from "axios";
// import styled from 'styled-components';

export default class PlayLists extends React.Component {

    state = {
        list:[]
    }

    componentDidMount() {
        this.pegaLista()
    }

    pegaLista = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
        axios.get(url, {
            headers:{
                Authorization:"Daniel-Santos-munoz"

            }
        })
        .then((resp)  => {
            console.log(resp)
            this.setState({list: resp.data.result.list})
        })
        .catch((err) => {
            console.log(err)
        })

    }

    deletaLista = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        axios.delete(url, {
            headers:{
                Authorization:"Daniel-Santos-munoz"
            }
        })
        .then((resp) => {
            console.log(resp)
            this.pegaLista()
        })
        .catch((err) => {
            console.log(err.response.data)
        })
    }


    render(){
        // console.log(this.state.usuario)
        const listaPlay = this.state.list.map((list) => {
            return <div key={list.id}>{list.name}
                <button onClick={() => this.deletaLista(list.id)}>Delete</button>
            </div>
            
        })
        return(
            <div>
                <button onClick={this.props.irTelaHome}>Voltar para Home</button>
                <h2>
                    Lista de usuários
                </h2>
                {listaPlay}
            </div>
        )
    }
}