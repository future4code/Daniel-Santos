import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { useState } from 'react';

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
        
        deuMatch.map((select) => {
            
            return (
                <div key={select.id}>
                    <img className="photo" src={select.photo}/>
                    <div className="Name">{select.name}</div>
                </div>
            )
        } )
    }


    return (
        <div>
            {marcouMatch()}
        </div>
    )

}