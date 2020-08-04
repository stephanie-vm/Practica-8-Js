const tareas = ['Practica de Javascript', 'Ir al supermercado', 'Pasear al perro', 'Lavar los trastos'];

let lista = document.getElementById('mi-lista');

let creoLista = document.createElement('ul');
lista.appendChild(creoLista);



for (let i = 0; i < tareas.length; i++) {
    let item = document.createElement('li');
    creoLista.appendChild(item);
    let entrada = document.createElement('input');
    item.appendChild(entrada);
    let marcador = "checkbox"
    entrada.setAttribute('type', marcador);
    let tarea ='tarea-[i]';
    entrada.setAttribute('id',tarea);
    let espacio = document.createElement('label');
    item.appendChild(espacio);
    espacio.setAttribute('for',tarea);
    espacio.innerHTML=tareas[i];
}


