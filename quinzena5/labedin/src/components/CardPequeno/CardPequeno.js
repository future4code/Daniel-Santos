import React from 'react';

function CardPequeno (props) {
    return (
        <div>
            <div>
                <img src={props.icone} alt="rede social" />
                <p>{props.endereço}</p>
            </div>
       </div>
    )

}



export default CardPequeno;
