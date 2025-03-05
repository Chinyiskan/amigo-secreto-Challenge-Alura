// Array para almacenar los nombres de los amigos
let friends = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
  const input = document.getElementById('amigo');
  const friendName = input.value.trim();
  if (friendName === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }
  friends.push(friendName);
  input.value = ""; // Limpiar el campo de texto
  actualizarLista();
}

// Función para actualizar la lista de amigos en el DOM
function actualizarLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = "";
  friends.forEach(friend => {
    const li = document.createElement('li');
    li.textContent = friend;
    lista.appendChild(li);
  });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
  if (friends.length === 0) {
    alert("La lista está vacía. Agrega al menos un nombre.");
    return;
  }
  const randomIndex = Math.floor(Math.random() * friends.length);
  const drawnFriend = friends[randomIndex];
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `<li>El amigo secreto es: ${drawnFriend}</li>`;
}
