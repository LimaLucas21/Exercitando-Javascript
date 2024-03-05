function confirmar(){
    let verificar = document.getElementById('senha')
    
        if(verificar.value.length < 8){
            alert('senha não pode ser menor que 8 digitos')
            return
        }
}