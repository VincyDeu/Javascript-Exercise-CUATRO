/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

// let x;

// function area(l1, l2) {
//     x = l1 * l2;
//     return x;
// }

// console.log(area(2,3));

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

// function crazySum (x, y) {
//     let z = x + y;
//         if (x === y) {
//          z = z * 3; 
//     }
//     return z;
// }

// console.log(crazySum(7, 8));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

// function crazyDiff(x, y) {
//     let z = x / y;
//     if (z > 19) {
//         z = z * 3;
//     }
//     return z;
// }

// console.log(crazyDiff(500, 19));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

// function boundary(x) {
//     if ((x >=20) && (x <=100) || (x == 400)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(boundary(50));

/* ESERCIZIO 5
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

// function codify(parola) {
//     let contenitore = "";
//     for (let i = 0; i < 4; i++) {
//     contenitore = contenitore.concat(parola[i]);
//     }
//     if (contenitore !== "code") {
//         parola = "code".concat(parola);
//         return parola;
//     } else {
//         return parola;
//     }
// }

// console.log(codify("codeciao"));

/* ESERCIZIO 6
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

// function check3and7(num) {
//     if (num%3 == 0 || num%7) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(check3and7(8));

/* ESERCIZIO 7
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

// function reverseString(string) {
//     let x = "";
//     for (let i = string.lenght; i > 0; i--) {
//         x = x.concat(string[i-1]);
//     }
//     return x;
// }

// console.log(reverseString("ciaoBella"));

/* ESERCIZIO 8
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

// const upperFirstPhrase = function (str) { 
//     //phrase as param 
//     let words = str.split(' '); //dividi stringa in array 
//     let finalString = [];

//     for (let i = 0; i < words.length; i++) {  
//         let firstChar = words[i].charAt(0); //prendi la prima lettera
//         console.log(firstChar); //print primo carattere

//         let uppercaseChar = firstChar.toUpperCase(); //rendi il carattere maiuscolo 
//         let cutString = words[i].slice(1); //crea copia della porzione selezionata 
//         let finalWord = uppercaseChar + cutString; //unisci il primo carattere in maiuscola al resto 

//         finalString.push(finalWord);
//     } 
//         console.log(finalString.join('')); //crea stringa da array 
        
//     }
// upperFirstPhrase('Hello Bello');


/* ESERCIZIO 9
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

// function cutString (string) {
//     let stock = "";
//     for (let i = 0; i < string.lenght; i++) {
//         if (i !== 0 && i !== string.lenght - 1) {
//             stock = stock.concat(string[i]);
//         }
//     }
//     return stock;
// }
// console.log(cutString("Ciao"));

/* ESERCIZIO 10
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

// function giveMeRandom(num) {
//     let z = [];
//     let randomNumber;

//     for (let i = 0; i < num; i++) {
//         randomNumber = Math.floor(Math.random() * 10);
//         z.push(randomNumber);
//     }
//     return z;
// }

// console.log(giveMeRandom(30));