let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }
    
    amigos.push(nombre);
    input.value = "";
    actualizarLista();
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista de amigos está vacía. Agregue al menos un nombre antes de sortear.");
        return;
    }
    
    const indiceGanador = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceGanador];
    
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong> 🎉</li>`;
}

function nuevoJuego() {
    amigos = [];
    actualizarLista();
    document.getElementById("resultado").innerHTML = "";
}
