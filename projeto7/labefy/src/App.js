import React from 'react';
import NovaPlayList from './components/CreatePlayList';
import PlayLists from './components/ListaPlayList'

export default class App extends React.Component {

  state = {
    telaAtual:"home"
}



mudarTela = () => {
  switch (this.state.telaAtual){
    case "home":
    return <NovaPlayList irTelaPlaylist={this.irPlaylist}/>
    case "lista":
    return <PlayLists irTelaHome={this.irHome}/>
    default:
    return <NovaPlayList/>
   }
}

irPlaylist = () => {
  this.setState({telaAtual:"lista"})
}

irHome = () => {
  this.setState({telaAtual:"home"})
}
  render () {
  return (
  <div >
    {this.mudarTela()}
  </div>
  );
  }
}


