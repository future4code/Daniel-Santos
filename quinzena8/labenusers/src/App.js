import React from 'react';
import Cadastro from './components/TelaCadastro';
import Lista from './components/TelasLista';


export default class App extends React.Component {

  state={
    telaAtual:"Cadastro"
  }

  mudaTela = () => {
    switch (this.state.telaAtual){
      case "Cadastro":
        return <Cadastro irLista={this.irLista}>Cadastro</Cadastro>
      case "Lista":
        return <Lista irCadastro={this.irCadastro}>Lista</Lista>
      default:
        return <Cadastro>Cadastro</Cadastro> 
    }
  }

  irCadastro = () => {
    this.setState ({telaAtual: "Cadastro"})
  }

  irLista = () => {
    this.setState ({telaAtual: "Lista"})
  }

  render () {
    return (
      <div >
        {this.mudaTela()}
      </div>
    );
  }
  
}