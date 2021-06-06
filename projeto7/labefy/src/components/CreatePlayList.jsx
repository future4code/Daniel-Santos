import React from 'react';
import axios from 'axios';
import styled from 'styled-components';



const BackColor = '#292828'


const ContainerApp = styled.div`
    display:flex;
    flex-direction:column;
    height: 100%;
    background-color:${BackColor};
    
`



const ContainerHome = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding: 150px;
`

const Header = styled.header`
 position: sticky;
 top: 0;
 display: flex;
 align-items: center;
 justify-content: space-between;
 height: 100px;
 background-color: #42A1CD;
 padding: 0 2rem;
 z-index: 1;

`

const CardNovaPlayList = styled.div`
  max-width:250px;
  border: 1px solid limegreen;
  background-color:#fff;
  box-shadow: 0px 0px 10px 0px limegreen;
  border-radius: 10px;
  text-align: center;
  padding:10px;
    

`

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

            <ContainerApp>
                <Header>
                    <div>Labefy</div>
                    <button onClick={this.props.irTelaPlaylist}>Ver PlayLists</button>
                </Header>
                <ContainerHome>
                    <CardNovaPlayList>
                        <h2>Criar PlayList</h2>
                        {/* <label>Nome Da PlayList</label> */}
                        <input 
                        value={this.state.nomeNovaLista}
                        placeholder={"Nova Playlist"}
                        onChange={this.handleNovaPlaylist}
                        />
                        <button onClick={this.inserirNovaPlaylist}>Enviar</button>
                    </CardNovaPlayList>
                </ContainerHome>
            </ContainerApp>
        )
    }
}