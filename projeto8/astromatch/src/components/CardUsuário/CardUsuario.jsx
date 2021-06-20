import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function CardPerfilUsuario () {

    const [perfil, setPerfil] = useState([])


    const chamarPerfil = () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/person"
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
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/choose-person"
        axios.post(url, {id, choice})
        .then(chamarPerfil())
        .catch(err => {
            console.log( err, "erro!!!")
        })
        
    }

    const limpar = async () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/clear"
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
                <img className="photo" src={perfil.photo}/>
                <div className="name">{perfil.name}, {perfil.age} anos</div>
                <div className="Bio">{perfil.bio}</div>
            </div>
        )
        
    }


    return (
        <div>
            {infoBio()}
            <div className="botões">
                <button onClick={() => escolherPerfil(perfil.id, !perfil.choice)}>X</button>
                <button onClick={limpar}>limpar</button>
                <button onClick={() => escolherPerfil(perfil.id, perfil.choice)}>Y</button>
            </div>
        </div>
    )
}