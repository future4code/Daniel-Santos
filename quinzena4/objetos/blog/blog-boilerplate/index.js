// ex

let blog = {

    titulo : "",

    autor : "",

    conteudo : ""

}

const blogger = []

function armazenarTextos() {

    

   blog.titulo = document.getElementById("titulo-post").value
   document.getElementById("titulo-post").value = ""

    

    blog.autor = document.getElementById("autor-post").value
    document.getElementById("autor-post").value = ""

    

    blog.conteudo = document.getElementById("conteudo-post").value
    document.getElementById("conteudo-post").value = ""

    blogger.push(blog.titulo,blog.autor,blog.conteudo)

    

}

console.log(blog)

console.log(blogger)

// function armazenarAutor() {
    
//     autor = document.getElementById("autor-post").value

//     document.getElementById("autor-post").valeu = ""
// }

// function armazenarConteudo() {

//     conteudo = document.getElementById("conteudo-post").value

//     document.getElementById("conteudo-post").valeu = ""
    
// }

