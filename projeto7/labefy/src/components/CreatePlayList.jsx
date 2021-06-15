import React from 'react';
import axios from 'axios';
import styled from 'styled-components';



const BackColor = '#292828'


const ContainerApp = styled.div`
    display:flex;
    flex-direction:column;
    height: 100vh;
    background-color:${BackColor};
    
`



const ContainerHome = styled.div`
 display:flex;
 height:100%;
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
 background-color: #67ff02;
 padding: 0 2rem;
 z-index: 1;

`

const Footer = styled.footer`
 position: sticky;
 top: 0;
 display: flex;
 align-items: center;
 justify-content: space-between;
 height: 100px;
 background-color: #67ff02;
 padding: 0 2rem;
 z-index: 1;

`





const CardNovaPlayList = styled.div`
  width:600px;
  border: 1px solid limegreen;
  background-color:#fff;
  box-shadow: 0px 0px 10px 0px limegreen;
  border-radius: 10px;
  text-align: center;
  padding:10px;
    

`

const Btn = styled.button`
 width:131px;
 height:30px;
 background: #67ff02;
 border-radius: 5px;
 border:none;
 margin:10px;
 font-size: 16px;
 line-height: 24px;
 color: #FEFEFE;
 font-weight: bold;
`

const BtnIrSeleção = styled.button`
 width:131px;
 height:30px;
 background: #FEFEFE;
 border-radius: 5px;
 border:none;
 margin:10px;
 font-size: 16px;
 line-height: 24px;
 color:black;
 font-weight: bold;
 
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
                    <h2>Labefy</h2>
                    <BtnIrSeleção onClick={this.props.irTelaPlaylist}>Ver PlayLists</BtnIrSeleção>
                </Header>
                <ContainerHome>
                    <CardNovaPlayList>
                        <h2>Inserir Nova PlayList</h2>
                        <input 
                        value={this.state.nomeNovaLista}
                        placeholder={"Nova Playlist"}
                        onChange={this.handleNovaPlaylist}
                        />
                        <Btn onClick={this.inserirNovaPlaylist}>Enviar</Btn>
                    </CardNovaPlayList>
                </ContainerHome>
                  <Footer>
                  </Footer>
            </ContainerApp>
        )
    }
}