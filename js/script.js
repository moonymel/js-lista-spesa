// CREO ARRAY PER LA SPESA

let list = ['uova', 'farina', 'zucchero', 'yogurt', 'burro', 'nutella'];

// CREO VARIABILE PER L'ID DELLA LISTA IN DOM

let grocery_list = document.getElementById('grocery-list');

// INIZIALIZZO VARIABILE I

let i = 0;

// CREO CICLO WHILE

while(i<list.length) {
    let li = document.createElement('li');
    li.innerText = list[i];

    grocery_list.appendChild(li);

    i++;
}