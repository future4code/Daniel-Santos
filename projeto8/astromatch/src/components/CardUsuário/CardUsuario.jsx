import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { CardImg,Name,Img,Bio, MainConatiner, CardInfo } from '../styled';




export default function CardPerfilUsuario () {

    const [perfil, setPerfil] = useState([])

    const Aluno = ":aluno"

    const chamarPerfil = () => {
        const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${Aluno}/person`
        axios
        .get (url)
        .then((response) => {
            console.log(response.data.profile);
            setPerfil(response.data.profile)
        })
        .catch ((err) => {
            console.log(err.response, "er!!!")
        })
        
    }


    const escolherPerfil = (id, choice) => {
        const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${Aluno}/choose-person`
        axios.post(url, {id, choice})
        .then(chamarPerfil())
        .catch(err => {
            console.log( err, "erro!!!")
        })
        
    }

    const limpar = async () => {
        const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${Aluno}/clear`
        try {
          await axios.put(url)
         chamarPerfil()
        } catch (err) {
            console.log(err, "Rodou!!!")
        }
        
    }

    useEffect(() => {
        chamarPerfil();
      }, [])


    // const infoBio = ( ) => {

    //     return (
            
    //     )
        
    // }


    return (
        <MainConatiner>
                <CardImg>
                    <CardInfo>
                        <Img src={perfil.photo}/>
                        <Name >{perfil.name}, {perfil.age} anos</Name>
                        <Bio>{perfil.bio}</Bio>
                    </CardInfo>
                </CardImg>
                <div className="botões">
                    <button onClick={() => escolherPerfil(perfil.id, false)}>X</button>
                    <button onClick={limpar}>limpar</button>
                    <button onClick={() => escolherPerfil(perfil.id, true)}>Y</button>
                 </div>
        </MainConatiner>
    )
}