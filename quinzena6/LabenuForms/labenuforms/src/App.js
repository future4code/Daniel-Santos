
import InputsdeTexto from "./components/inputsDeTexto"
import SelectItems from "./components/selectItem"
import React from 'react';

export default class App extends React.Component {

  state={
    etapa: 1,
}



renderizaEtapa = () => {

    
    
}

  render(){

  
  return (
    <div>
      <InputsdeTexto 
      texto={"1.Qual seu nome?"}
      value={this.state.nome}
      />
       <InputsdeTexto 
      texto={"2.Qual sua idade?"}
      valeu={this.state.idade}
      />
       <InputsdeTexto 
      texto={"3.Qual seu e-mail?"}
      value={this.state.email}
      />
      <SelectItems
      texto={"4.Qual sua Escolaridade?"}
      />
    </div>
  );
}

}

