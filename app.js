// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Esta es mi variable lista que contiene los amigos que se van a agregar
let lista = [];

// Función que utilizo para asignar texto a los campos del arhivo .HTML
function asignarTextoElemento(idElemento, texto) {
    let elementoHTML = document.getElementById(idElemento);
    elementoHTML.innerHTML = texto;
    return;
}

//Función para agregar al amigo que está escrito en el input a la lista de amigos
function agregarAmigo() {
  let amigo = (document.getElementById('amigo').value);
  if (amigo === '') {
    alert('Debes ingresar un nombre válido');
  } else if (lista.includes(amigo)) {
    alert('Este amigo ya fue ingresado');
  } else{
    lista.push(amigo);
    //este código de abajo lo investigué para poder visualizar a los amigos agregados en un formato de lista, ya que lo quise hacer con mi función 
    //asignarTextoElemento pero no me gustó que se mostraran todos los amigos en un solo párrafo separados por coma.
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    lista.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
        });
    }
    document.getElementById('amigo').value = '';

}

//Función para realizar la selección de un amigo secreto de la lista de amigos de manera aleatoria.
//Se pedirá que el tamaño de la lista sea mayor a 1 amigo.
function sortearAmigo() {
    if (lista.length < 2) {
    alert('Debes ingresar al menos dos amigos');
  } else {
    let amigoSecreto = Math.floor(Math.random() * lista.length);
    asignarTextoElemento('resultado', `¡Tu amigo secreto será ${lista[amigoSecreto]}!`);
  }
}