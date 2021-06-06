import React from "react";
import axios from "axios";
// import styled from 'styled-components';

export default class PlayLists extends React.Component {

    state = {
        list: []
    }

    componentDidMount() {
        this.pegarPlayList()
    }

    pegarPlayList = () => {
        const url="https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.get(url, {
            headers: {
                Authorization: "Daniel-Santos-munoz"
            }
        })
        .then((res) => {
            
            this.setState({list: res.data})
            

        })
        .catch((err) => {
           console.log(err)
        })
    }


 

    render () {
        // console.log(this.state.list)
        const listaPlay = this.state.list.map((playlist) => {
            return <div>{playlist.name}</div>
        })
        return (
            <div>
                <header>
                    <button onClick={this.props.irTelaHome}>Voltar para Home</button>
                </header>
                <div>
                    <span>Playlists</span>
                    {listaPlay}
                </div>
                <footer>Footer</footer>
            </div>
        )
    }
}