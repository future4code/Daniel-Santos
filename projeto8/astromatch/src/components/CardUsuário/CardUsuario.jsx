import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function CardPerfilUsuario (props) {

    const [perfil, setPerfil] = useState([])

    const pegaPerfil = () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person"
        axios
        .get (url)
        .then((response => {
        console.log(response.data);
        setPerfil(response.data)
        })
        )
    }

    useEffect(() => {
        pegaPerfil();
      }, [])

    

    return (
        <div>
            {perfil.name}
        </div>
    )
}