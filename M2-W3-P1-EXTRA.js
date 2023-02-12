// Esercizi aggiuntivi

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray", che riceve come parametro un array di numeri random (creati con giveMeRandom)
 e stampa in console, per ogni oggetto, true/false a seconda che il numero sia più grande di 5 o no.
 La funzione deve infine tornare la somma di solamente i numeri che sono risultati maggiori di 5.
*/
// function giveMeRandom (n) {

//     let randomArray = [];

//     for (let i = 0; i < n; i++) {

//       let  randomVal = Math.round(Math.random() * n);

//         if (randomArray.includes(randomVal)) {
        
//             i = i -1;
//             continue;
            
//         }


//     randomArray.push(randomVal);

//     }

//     return randomArray;
// }

// let randomN = giveMeRandom(7);

// console.log(randomN);



// function checkArray (){

// if (n > 5) {

//     let trueConcat = i + true

//     console.log(trueConcat )
// }

// else {

// }

/* EXTRA 2
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio.
*/

console.log("----------------------- Esercizio Extra 2 -----------------------");


let shoppingCart = [

    {id: 01, nome: "shampoo", prezzo: 7, quantita: 2},
    {id: 02, nome: "ciccolati", prezzo: 2, quantita: 4},
    {id: 03, nome: "cuffie bluetooth", prezzo: 20, quantita: 1},

]

function shoppingCartTotal () {

    let totale = 0;

    for (let i = 0; i < shoppingCart.length; i++) {

        totale += (shoppingCart[i].prezzo * shoppingCart[i].quantita);

    }

    return totale

}

let totalPrice = shoppingCartTotal();
console.log(totalPrice);





/* EXTRA 3
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto, lo aggiunge allo shoppingCart e ritorna il numero totale degli oggetti in esso contenuti.
*/

console.log("----------------------- Esercizio Extra 3 -----------------------");

let shoppingCart3 = [

    {id: 01, nome: "shampoo", prezzo: 7, quantita: 2},
    {id: 02, nome: "cioccolati", prezzo: 2, quantita: 4},
    {id: 03, nome: "cuffie bluetooth", prezzo: 20, quantita: 1},

];


//nuovoOggetto

let oggettoCart = {id: 03, nome: "cuffie bluetooth", prezzo: 20, quantita: 1};

//Add 

function addToShoppingCart(ogg){

    return shoppingCart3.push(ogg);
     
}
  
let nuovoArray = addToShoppingCart(oggettoCart);
console.log(nuovoArray);





/* EXTRA 4
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array shoppingCart e ritorna l'oggetto più costoso in esso contenuto.
*/
console.log("----------------------- Esercizio Extra 4 -----------------------");


//creare funzione
//creare loop for per iterare il prezzo di ogni oggetto dell'array
//


let shoppingCart4 = [

    {id: 01, nome: "shampoo", prezzo: 7, quantita: 2},
    {id: 02, nome: "cioccolati", prezzo: 2, quantita: 4},
    {id: 03, nome: "cuffie bluetooth", prezzo: 20, quantita: 1},
];


function maxShoppingCart(x) {

        let oggettoPiuCosto = x[0];

    for (let i = 0; i < x.length; i++) {

        if (x[i].prezzo > oggettoPiuCosto.prezzo) {
            oggettoPiuCosto = x[i];
        }

        return oggettoPiuCosto;
    }
}

console.log(maxShoppingCart(shoppingCart4));



/* EXTRA 5
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array shoppingCart e ritorna l'ultimo oggetto in esso contenuto.
*/
console.log("----------------------- Esercizio Extra 5 -----------------------");


let shoppingCart5 = [

    {id: 01, nome: "shampoo", prezzo: 7, quantita: 2},
    {id: 02, nome: "cioccolati", prezzo: 2, quantita: 4},
    {id: 03, nome: "cuffie bluetooth", prezzo: 50, quantita: 1},
];


function latestShoppingCart() {

    let shoppincardUltimo = shoppingCart5[shoppingCart5.length-1];
    return shoppincardUltimo;

}

console.log(latestShoppingCart(shoppingCart5));



/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve come parametro un intero "x" compreso tra 0 e 9.
 La funzione mostra in console un numero casuale tra 0 e 9 finchè il numero estratto è maggiore di x per 3 volte di fila.
*/
console.log("----------------------- Esercizio Extra 6 -----------------------");

function loopUntil(x) {

    let cont = 0;

    while (cont !==3) {

        let random = Math.floor(Math.random()*(9-0));
        
        if (random > x) {
            cont++    
        }

        else {
            cont = 0

        }

    }

    return cont;
}

console.log(loopUntil(2));





/* EXTRA 7
 Crea una funzione chiamata "average" che riceve un array come parametro e ritorna la media aritmetica dei numeri in esso contenuti.
 La funzione salta automaticamente qualsiasi valore non numerico all'interno dell'array.
*/
console.log("----------------------- Esercizio Extra 7 -----------------------");


let arrayAv = [1, 2, 3, 4, 5];

function average (numbers) {

    let sumNumbers = 0
    
    for (let num of numbers ) {

        sumNumbers += num;
        // console.log(sumNumbers);
    }
    let avNumbers = sumNumbers/numbers.length;

    return avNumbers
}

console.log(average(arrayAv));



/* EXTRA 8
 Scrivi una funzione chiamata "longest" che ricerca la stringa più lunga all'interno del parametro ricevuto (un array di stringhe).
*/
console.log("----------------------- Esercizio Extra 8 -----------------------");

let arrayStr = ["Laura", "Paolo", "Francesco", "Viviana"];


function longest (array) {

let longestWord = 0; 


    for (let i = 0; i < array.length; i++) {

       if (array[i].length > longestWord) {
        
            longestWord = array[i].length; 
            
       }


    }
    return longestWord 
}

console.log(longest(arrayStr))

/* EXTRA 9
 Scrivi una funzione per creare un filtro anti spam molto semplice per una casella email. La funzione riceve una stringa come parametro, "emailContent", e ritorna un boolean.
 La funzione deve tornare true se emailContent NON contiene le parole "SPAM" o "SCAM".
*/
console.log("----------------------- Esercizio Extra 9 -----------------------");


let strEmail = "content SPAM"

function filtro (emailContent) {

    if (emailContent.includes("SPAM") || emailContent.includes("SCAM") ) {
     return true;
    }

    else {
        return "ok";
    }

}


console.log(filtro(strEmail));


/* EXTRA 10
 Scrivi una funzione che riceve come parametro una data e ritorna il numero di giorni passati ad oggi.
*/

console.log("----------------------- Esercizio Extra 10 -----------------------");

let data = new Date("2023-02-01").getDate();

function days (d) {

    let oggi = new Date().getDate(); 

    let giorni = oggi - d
 
    return giorni
}

console.log(days(data));


/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due interi, "x" e "y".
 La funzione deve tornare una matrice di x volte y, e ogni valore deve rappresentare l'indice dell'elemento.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/
console.log("----------------------- Esercizio Extra 11 -----------------------");

function matrixGenerator (x , y) {

    let matrice = [];

    for ( let i = 1; i <= (x*y); i++) {
        i += 0;
        matrice.push(i)
    }

    return matrice

}

console.log(matrixGenerator(3 , 2));