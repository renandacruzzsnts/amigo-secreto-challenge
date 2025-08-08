let listaDeAmigos  = [];

function adicionarAmigo(){
    let entrada = document.getElementById("amigo");
    let nome = entrada.value;

    if(nome == ""){
        alert("Por favor, digite um nome.");
        return;
    }

    listaDeAmigos.push(nome);
    
    let lista = document.getElementById("listaDeAmigos");
    let item = document.createElement("li");
    item.innerText = nome;
    lista.appendChild(item)


    entrada.value = "";
}

