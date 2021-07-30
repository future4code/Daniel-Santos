import React, {useState} from 'react';
import CardPerfilUsuario from './components/CardUsuário/CardUsuario';
import DeuMatch from './components/TelaDeMatches/Matches';
import Head from './components/Header';
import { MainBody,SecBody } from './components/styled';




export default function App() {

  const [tela, setTela] = useState("Swipe")



  // const irTelaSwipe = () => {
  //   setTela("Swipe")
  // }

  // const irTelaMatch = () => {
  //   setTela("Match")
  // }

  const trocarTela = () => {

    switch (tela) {
      case "Swipe":
        return <CardPerfilUsuario/>
      case "Match":
        return <DeuMatch/>
      default:
        return <CardPerfilUsuario/>
    }

}


const TrocatelaRenderizada = () =>{
  if(tela ==="Swipe"){
    setTela("Match")
  }else if(tela === "Match"){
    setTela("Swipe")
  }
}

  return (
    <MainBody>
      <Head flip={TrocatelaRenderizada}/>
      <SecBody>
       {trocarTela()}
      </SecBody>
    </MainBody>
  );
}


