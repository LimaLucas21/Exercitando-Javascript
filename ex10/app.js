var contador = 0
function clicar(){
    contador++
    document.getElementById('painel').innerText = contador
}

function subtrair(){
    contador --
    document.getElementById('painel').innerText = contador  
}