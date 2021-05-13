import React from "react"

export default class InputsDeTexto extends React.Component {
   

    render () {

        return (
            
            <div>
                <h1>ETAPA 1 - DADOS GERAIS</h1>
                <div>
                    <p>1.Qual seu nome?</p>
                    <input type="text" >
                    </input>
                </div>
                <div>
                    <p>2.Qual sua idade?</p>
                    <input type="text" >
                    </input>
                </div>
                <div>
                    <p>3.Qual seu e-mail</p>
                    <input type="text" >
                    </input>
                </div>
                <div>
                    <p>4.Qual sua escolaridade</p>
                    <select>
                        <option>Ensino Médio Completo</option>
                        <option>Ensino Médio Incompleto</option>
                        <option>Ensino Superior Completo</option>
                        <option>Ensino Superior incompleto</option>
                    </select>
                </div>
                <button>PRÓXIMA ETAPA</button>
            </div>
            
        )

    }
}