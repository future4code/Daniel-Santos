import React,{useState} from 'react';
import axios from 'axios';

export default function CardPerfilUsuario (props) {

    const [perfilSwipe, setPerfilSwipe] = useState([])

    const galeriaDePerfil = () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person"
        axios
        .get (url)
        .then(response =>{
            setPerfilSwipe(
                response.data.profile)
                console.log(response)
            })
        .catch(err => console.log(err))

    }

    

    return (
        <div>
            {galeriaDePerfil}
        </div>
    )
}