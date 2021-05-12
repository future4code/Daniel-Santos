import React from "react"

export default class SelectItems extends React.Component {

    render () {

        return (
            <div>
            <p>{this.props.texto}</p>
            <select>
                <option>Ensino Médio Completo</option>
                <option>Ensino Médio Incompleto</option>
                <option>Ensino Superior Completo</option>
                <option>Ensino Superior incompleto</option>
                <option>{this.props.opnt0}</option>
                <option>{this.props.opnt1}</option>
            </select>
          </div>

        )

        
       
    }


}


// export default class SelectItemsFinal extends React.Component {

//     render () {
//         return (
//             <div>
//             <p>{this.props.texto}</p>
//             <select>
//                 <option>"Nenhum"</option>
//                 <option>"Curso Técnico"</option>
//                 <option>"Curso de Ingles"</option>
//             </select>
//           </div>
//         )
//     }
// }