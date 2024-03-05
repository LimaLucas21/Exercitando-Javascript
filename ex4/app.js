// function adcionar(){
//     let valor = document.getElementById("recebe")
    
//     if(recebe.trim() !== ''){  
        
//         let li = document.createElement("li")
        
//         li.appendChild(document.createTextNode(recebe))

//         document.getElementById('lista').appendChild(li)

//         document.getElementById('recebe').value = ''
//     }
    
// }


function adicionarItem() {
    var novoItem = document.getElementById("itemInput").value;
    if (novoItem.trim() !== "") {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(novoItem));
        document.getElementById("listaItens").appendChild(li);
        document.getElementById("itemInput").value = "";
    }
}