function adicionarItem() {
    var novoItem = document.getElementById("itemInput").value;
    
    if (novoItem.trim() !== "") {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(novoItem));
        var botaoExcluir = document.createElement("button");
        botaoExcluir.appendChild(document.createTextNode("Excluir"));
        botaoExcluir.onclick = function() {
            li.remove();
        };

        li.appendChild(botaoExcluir);

        document.getElementById("listaItens").appendChild(li);
        document.getElementById("itemInput").value = "";
    }
}