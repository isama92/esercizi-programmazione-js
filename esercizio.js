"use strict";


/*
    *********************** ESERCIZI JAVASCRIPT ***********************
    Per svolgere questi esercizi scrivere il programma richiesto dentro l'appostita funzione.
    Il numero inserito nel campo presente in index.html con LABEL Numero nella vostra funzione
    sarà la variabile n.
    Una volta ottenuto il risultato effettuarne il return (vedi la funzione di esempio).
    Ritornare un numero nel caso il risultato è un numero o un array nel caso il risultato
    siano più numeri.
*/



function esempio(n) {
    // Questo esercizio di esempio scrive i numeri da 1 a N.
    // Difficoltà: Nulla
    var arr = new Array;
    for (let i = 0; i < n; i++)
        arr[i] = i + 1;
    return arr;
}

function dispari(n) {
    // Visualizza i numeri dispari presenti tra 1 e N.
    // Difficoltà: Facile

}

function multipli8(n) {
    // Visualizza i multipli di 8 presenti tra 1 e N.
    // Difficoltà: Facile

}

function fibonacci(n) {
    // Visualizza i primi N numeri pari della serie di Fibonacci.
    // Difficoltà: Media

}

function fattoriale(n) {
    // Fai il fattoriale di N.
    // Difficoltà: Facile

}

function casuali(n) {
    // Riempi un array di N numeri casuali con un ciclo (consiglio, googla math.rand e math.floor),
    // poi fai un altro ciclo dove sommi tutti i numeri dispari del suddetto array.
    // Ti consiglio di scrivere l'array con console.log() per vedere se la somma è corretta.
    // Difficoltà: Facile-Media

}

function media(n) {
    // Riempi un array di N numeri casuali con un ciclo, poi fa un altro
    // ciclo dove fai la media di tutti gli elementi del suddetto array.
    // Difficoltà: Media

}

function primi(n) {
    // Visualizza i primi N numeri primi.
    // Difficoltà: Difficile

}

function ordinamento(n) {
    // Generare un array di N numeri e poi ordinarlo senza usare i metodi delle funzioni [arr.sort()].
    // Difficoltà: Difficile

}