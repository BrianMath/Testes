function criarUsuario() {
    let nome = document.getElementById("nomeCad")
    let senha = document.getElementById("senhaCad")
    
    sessionStorage.setItem("nome", nome.value)
    sessionStorage.setItem("senha", senha.value)
}

function verificarDados() {
    let nome = document.getElementById("nome")
    let senha = document.getElementById("senha")

    if ((nome.value === sessionStorage.getItem("nome")) && (senha.value === sessionStorage.getItem("senha"))) {
        window.location.href = "./inicio.html"
    }
}
