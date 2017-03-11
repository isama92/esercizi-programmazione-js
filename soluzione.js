"use strict";

function esempio(n){
    // Questa funzione di esempio scrive i numeri da 1 a N.
    // Difficoltà: Nulla
    var arr = new Array;
    for(let i = 0; i < n; i++)
        arr[i] = i+1;
    return arr;
}

function dispari(n){
    // Visualizza i numeri dispari presenti tra 1 e N.
    // Difficoltà: Facile
    var arr = [];
    for(let i = 1; i <= n; i++)
        if(i%2 == 1)
            arr.push(i);
    return arr;
}

function multipli8(n){
    // Visualizza i multipli di 8 presenti tra 1 e N.
    // Difficoltà: Facile
    var arr = [];
    for(let i = 1; i <= n; i++)
        if(i%8 == 0)
            arr.push(i);
    return arr;
}

function fibonacci(n){
    // Visualizza i primi N numeri pari della serie di Fibonacci.
    // Difficoltà: Media
    var i = 0;
    var fib = 1;
    var fibPrec = 0;
    var tmp;
    var arr = [];

    while(i<n){
        if(fib % 2 == 0){
            arr.push(fib);
            i++;
        }
        tmp = fib;
        fib = fib + fibPrec;
        fibPrec = tmp;
    }
    return arr;
}

function fattoriale(n){
    // Fai il fattoriale di N
    // Difficoltà: Facile
    var fattoriale = 1;
    for(let i = 1; i <= n; i++)
        fattoriale = fattoriale * i;
    return fattoriale;
}

function casuali(n){
    // Riempi un array di N numeri casuali con un ciclo (consiglio, googla math.rand e math.floor),
    // poi fai un altro ciclo dove sommi tutti i numeri dispari del suddetto array.
    // Ti consiglio di scrivere l'array con console.log() per vedere se la somma è corretta.
    // Difficoltà: Facile-Media
    var arr = [];
    var somma = 0;
    for(let i = 0; i < n; i++)
        arr.push(Math.floor((Math.random()*100)+1));
    console.log(arr);
    for(let i = 0; i < arr.length; i++)
        if(arr[i] % 2 == 1)
            somma = somma + arr[i];
    console.log(arr);
    return somma;
}

function media(n){
    // Riempi un array di N numeri casuali con un ciclo, poi fa un altro
    // ciclo dove fai la media di tutti gli elementi del suddetto array.
    // Difficoltà: Media
    var arr = [];
    var somma = 0;
    for(let i = 0; i < n; i++)
        arr.push(Math.floor(Math.random()*100)+1);
    console.log(arr);
    for(let i = 0; i < arr.length; i++)
        somma = somma + arr[i];
    console.log(arr);
    return (somma/arr.length);
}

function primi(n){
    // Visualizza i primi N numeri primi.
    // Difficoltà: Difficile
    var arr = [];
    var nonPrimo;
    for(let i = 2; arr.length < n; i++){
        nonPrimo = false;
        for(let j = 2; j < i && !nonPrimo; j++)
            if(i % j == 0)
                nonPrimo = true;
        if(!nonPrimo)
            arr.push(i);
    }
    return arr;
}

function ordinamento(n){
    // Generare un array di N numeri e poi ordinarlo senza usare i metodi delle funzioni [arr.sort()].
    // Difficoltà: Difficile
    var arr = [];
    var tmp;
    for(let i = 0; i < n; i++)
        arr.push(Math.floor(Math.random()*100)+1);
    console.log(arr);
    for(let i = 0; i < arr.length-1; i++)
        for(let j = i+1; j < arr.length; j++)
            if(arr[i] > arr[j]){
                tmp = arr[j];
                arr[j] = arr[i];
                arr[i] = tmp;
            }
    return arr;
}