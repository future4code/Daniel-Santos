import React, {useState,useEffect} from 'react';
import axios from 'axios';

export default function DeuMatch () {

    const [deuMatch, setDeuMatch] = useState ([])


    const chamarMatch = () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches"
        axios
        .get (url)
        .then ((response) => {
            setDeuMatch(response.data.matches)
        } )

    }

    useEffect (() => {
        chamarMatch();
    },[])

    const marcouMatch = () => {
        
       return deuMatch.map((profile) => {
            
            return (
                <div key={profile.id}>
                    <ul>
                        <li><img  src={profile.photo}></img></li>
                        <li><div>{profile.name}</div></li>
                    </ul>
                </div>
            )
        } )
    }


    return (
        <div>
            <div className="Head">
               
            </div>
            <div>
                {marcouMatch()}
            </div>
        </div>
    )

}