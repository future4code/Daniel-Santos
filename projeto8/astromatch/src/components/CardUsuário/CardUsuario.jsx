import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function CardPerfilUsuario () {

    const [perfil, setPerfil] = useState([])


    const chamarPerfil = () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person"
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
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person"
        axios.post(url, {id, choice})
        .then(chamarPerfil())
        .catch(err => {
            console.log( err, "erro!!!")
        })
        
    }

    const limpar = async () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear"
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


    const infoBio = ( ) => {

        return (
            <div className="CardFoto">
                <img src={perfil.photo}></img>
                <div >{perfil.name}, {perfil.age} anos</div>
                <div >{perfil.bio}</div>
            </div>
        )
        
    }


    return (
        <div className="CardMaster">
            <div className="Header">
               
            </div>
            <div>
                {infoBio()}
                <div className="botões">
                    <button onClick={() => escolherPerfil(perfil.id, false)}>X</button>
                    <button onClick={limpar}>limpar</button>
                    <button onClick={() => escolherPerfil(perfil.id, true)}>Y</button>
                </div>
            </div>
        </div>
    )
}