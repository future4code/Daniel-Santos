import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default class NovaPlayList extends React.Component {

    state = {
        nomeNovaLista:""
    }

    handleNovaPlaylist = (event) => {
        this.setState({nomeNovaLista: event.target.value})
    }

    inserirNovaPlaylist = () => {
        const url ="https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.nomeNovaLista
        }
        axios.post(url, body, {
            headers: {
            Authorization: "Daniel-Santos-munoz"
            }
        })
        .then((res) => {
            alert("Nova Playlist adicionada à lista")
            this.setState({nomeNovaLista:""})

        })
        .catch((err) => {
            alert("Ocorreu um erro! Tente novamente!")
            
        })

    }

    render () {

        return (
            
            <div>
                <header>
                    <div>Labefy</div>
                    <button onClick={this.props.irTelaPlaylist}>Ver PlayLists</button>
                </header>
                <div>
                    <h2>Criar PlayList</h2>
                    {/* <label>Nome Da PlayList</label> */}
                    <input 
                    value={this.state.nomeNovaLista}
                    placeholder={"Nova Playlist"}
                    onChange={this.handleNovaPlaylist}
                    />
                    <button onClick={this.inserirNovaPlaylist}>Enviar</button>
                </div>
            </div>
        )
    }
}