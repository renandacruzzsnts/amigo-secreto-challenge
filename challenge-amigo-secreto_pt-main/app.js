let listaDeAmigos = [];

function adicionarAmigo() {
  let input = document.getElementById("amigo");
  let nome = input.value;
  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }
  listaDeAmigos.push(nome);
  let lista = document.getElementById("listaAmigos");
  let item = document.createElement("li");
  item.innerText = nome;
  lista.appendChild(item);
  input.value = "";
}

function sortearAmigo() {
  if (listaDeAmigos.length === 0) {
    alert("A lista de amigos está vazia. Adicione nomes antes de sortear.");
    return;
  }
  let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
  let amigoSorteado = listaDeAmigos[indiceAleatorio];
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "Amigo sorteado: " + amigoSorteado;
}
