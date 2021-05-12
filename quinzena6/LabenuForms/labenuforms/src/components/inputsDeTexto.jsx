import React from "react"

export default class InputsDeTexto extends React.Component {
   

    render () {

        return (
            <div>
                <div>
                <p>{this.props.texto}</p>
                <input type="text" >
                 </input>
                </div>
            </div>
        )

    }
}