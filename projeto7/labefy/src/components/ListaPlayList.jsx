import React from "react";
import axios from "axios";
import styled from 'styled-components';


const BackColor = '#292828'


const ContainerApp = styled.div`
 display:flex;
 flex-direction:column;
 height: 100vh;
 background-color:${BackColor};
    
`

const PlayListAtual = styled.div`

 border: 1px solid limegreen;
 background-color:#fff;
 box-shadow: 0px 0px 10px 0px limegreen;
 border-radius: 10px;
 text-align: center;
 padding:10px;

`

const ContainerPlay = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 height:100vh;
 padding:75px;
 overflow-y: auto;
`

const BtnLista = styled.button`
 width:131px;
 height:15px;
 background: #67ff02;
 border-radius: 5px;
 border:none;
 margin:10px;
 font-size: 16px;
 line-height: 14px;
 color: #FEFEFE;

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
 position:sticky;
 top: 0;
 display: flex;
 align-items: center;
 justify-content: space-between;
 height: 100px;
 background-color: #67ff02;
 padding: 0 2rem;
 z-index: 1;

`



const BtnVoltarHome = styled.button`
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

const TituloSeleção = styled.h2`
 color:#67ff02;
 position: static;

`


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

        const listaPlay = this.state.list.map((list) => {
            return <PlayListAtual key={list.id}>
            {list.name}
            <BtnLista onClick={() => this.deletaLista(list.id)}>Delete</BtnLista>
            </PlayListAtual>
            
        })
        return(
            <ContainerApp>
                <Header>
                    <h2>Labefy</h2>
                    <BtnVoltarHome onClick={this.props.irTelaHome}>Home</BtnVoltarHome>
                </Header>  
                <ContainerPlay>
                <TituloSeleção>
                        Sua Seleção de PlayLists
                </TituloSeleção>
                    {listaPlay}
                </ContainerPlay>
                    <Footer>
                    </Footer>
            </ContainerApp>
        )
    }
}