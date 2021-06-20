import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function CardPerfilUsuario (props) {

    const [perfil, setPerfil] = useState([])

    

    const chamarPerfil = () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person"
        axios
        .get (url)
        .then((response => {
            console.log(response.data.profile);
            setPerfil(response.data.profile)
        })
        .catch (err => {
            console.log(err.response, "er!!!")
        })
        )
    }


    const escolherPerfil = (id, choice) => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person"
        axios.post(url, {id, choice})
        .then(chamarPerfil())
        .catch(err => {
            console.log( err, "erro!!!")
        })
        
    }

    const limpar = () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear"
        axios.get (url)
        .then(chamarPerfil())
        .catch(err => {
            console.log(err,"err!!!")
        })
    }


    useEffect(() => {
        chamaPerfil();
      }, [])


    const infoBio = ( ) => {

        return (
            <div className="CardFoto">
                <img className="photo" src={perfil.photo}></img>
                <div className="name">{perfil.name}, {perfil.age} anos</div>
                <div className="Bio">{perfil.bio}</div>
            </div>
        )
        
    }

    

    return (
        <div>
            {infoBio()}
            <div className="botões">
                <button onClick={limpar()}></button>
            </div>
        </div>
    )
}