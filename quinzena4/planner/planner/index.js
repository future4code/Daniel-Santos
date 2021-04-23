


function adicionarTarefa( ) {

    let tarefa = document.getElementById("tarefa").value

    let diaSemana = document.getElementById("dias-semana").value

    document.getElementById(diaSemana).innerHTML += "<p> " + tarefa +"</p>"
    document.getElementById("tarefa").value = " "
    document.getElementById("dias-semana").value = " "
    
}






