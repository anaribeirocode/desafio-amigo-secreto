let amigos = []

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value;

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    amigos.push(nome);
    input.value = "";
    atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        item.classList.add("amigo-item");
        item.title = "Clique para remover";

        item.onclick = function () {
            amigos.splice(i, 1);
            atualizarLista();
        };

        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("No mínimo 2 nomes para realizar o sorteio!");
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos[indice];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo secreto é: <li>${nomeSorteado}</li>`;

    document.querySelector(".button-draw").disabled = true;
    document.querySelector(".button-add").disabled = true;

    document.querySelector(".section-title").textContent = "Sorteio concluído!😄";
}

function reiniciar() {
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("amigo").value = "";

    document.querySelector(".button-draw").disabled = false;
    document.querySelector(".button-add").disabled = false;

    document.querySelector(".section-title").textContent = "Digite o nome dos seus amigos";
}

const input = document.getElementById("amigo");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        adicionarAmigo();
    }
});
