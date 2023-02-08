/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

console.log("----------------------- Esercizio 1 -----------------------");


function area(l1, l2) {

    return l1 * l2;
};

let calcArea = area(43, 22);

console.log(calcArea);



/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

console.log("----------------------- Esercizio 2 -----------------------");

function crazySum (numA , numB) {

    if(numA === numB){
        return (numA + numB) * 3;
    }

    else {

        return numA + numB;

    }
}

let crazySumUguale = crazySum(5,5);
let crazySumDiverso = crazySum(18,22);

console.log(crazySumUguale, crazySumDiverso);





/* ESERCIZIO 3
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

console.log("----------------------- Esercizio 3 -----------------------");


function crazyDiff (numC , numD=19){

    let diff = (numC - numD);


    if (diff > numD ) {

        return diff * 3;
    }

    else {
        return diff;
    }
}

let crazyDiffMagg = crazyDiff(100);
let crazyDiffMin = crazyDiff(30);

console.log(crazyDiffMagg, crazyDiffMin);




/* ESERCIZIO 4
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

console.log("----------------------- Esercizio 4 -----------------------");

function boundary (nInt) {

    if ((nInt >= 20 && nInt<= 100) || (nInt === 400)) {

        return true;
    }

    else {
        return false;
    }

}

let esQuattroA = boundary(50);
let esQuattroB = boundary(19);
let esQuattroC = boundary(400);
let esQuattroD = boundary(200);


console.log(esQuattroA, esQuattroB, esQuattroC, esQuattroD);


/* ESERCIZIO 5
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

console.log("----------------------- Esercizio 5 -----------------------");


function codify (str) {

    if (str.startsWith("code")) {
        return str;
    }

    else 
    return "code "+str;
}


let strCodeA = codify("run");
let strCodeB = codify("code for fun");

console.log(strCodeA);
console.log(strCodeB);



/* ESERCIZIO 6
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

console.log("----------------------- Esercizio 6 -----------------------");


function check3and7 (numE) {

    if (numE >= 0 && (numE % 3 == 0 || numE % 7 == 0)) {

        return true;
    }

    else {
        return false;
    }
}


let checkA = check3and7 (9);
let checkB = check3and7 (10);
let checkC = check3and7 (-7);

console.log(checkA);
console.log(checkB);
console.log(checkC);


/* ESERCIZIO 7
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

console.log("----------------------- Esercizio 7 -----------------------");


function reverseString (strR) {



    let splitString = strR.split("");
    let reverseString = splitString.reverse();
    let joinString = reverseString.join(" ");

    return joinString;

    //return strR.split("").reverse().join(" ");

}

let revStr = reverseString("Laura")

console.log(revStr);



/* ESERCIZIO 8
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

console.log("----------------------- Esercizio 8 -----------------------");

function upperFirst (strUpp) {


    let arrString = strUpp.split(" ");

    for (let i = 0; i < arrString.length; i++) {

        arrString[i] = arrString[i].charAt(0).toUpperCase() + arrString[i].slice(1);
    }


    let firstUpp = arrString.join(" ");
    
    return firstUpp;
}


let uppStr = upperFirst ("laura quintero agudelo")

console.log(uppStr);

/* ESERCIZIO 9
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

console.log("----------------------- Esercizio 9 -----------------------");

// function cutString (strCut) {

//     let cutStr = strCut.split(" ");

//     // for (let i = 0; i < cutStr.length; i++) {

//     //     cutStr[i] = cutStr; 
//     }

//     let cut = cutStr.join(" ");

//     return cut;

// }

// let cutStringA = cutString ("Epicode Laura");
// // console.log(cutStringA);




/* ESERCIZIO 10
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/
console.log("----------------------- Esercizio 10 -----------------------");

function giveMeRandom (n) {

    let randomArray = [];

    for (let i = 0; i <= n; i++) {

        randomArray += Math.round(Math.random() * n);

        if (randomArray.includes(randomArray[i]) === true) {
            
            continue;
            i = -1;

            
        }

    }

    return randomArray;
}

let randomN = giveMeRandom(5);

console.log(randomN);