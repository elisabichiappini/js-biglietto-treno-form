/********************************************************************
FILE JAVASCRIPT
********************************************************************/
//codice rigido di Javascript
    'use strict';

    // const prezzoKm = 0.21;
    // const scontoSenior = 40;
    // const scontoMinorenni = 20;

// 1) Input per utente (numero) di chilometri da percorrere;
// const kmInput = Number(prompt('Quanti km vuoi percorrere?'));
// console.log(kmInput);

// 2) Input per utente (numero) dell'età del passeggero;
// const etaInput = Number(prompt ('Quanti hanni hai?'));
// console.log(etaInput);

// 3)  (condizione: è un numero?) SE SI:
//      Il prezzo del biglietto è definito in base ai km (0.21 € al km):
//     if (!isNaN(kmInput) && !isNaN(etaInput)) {
//     let prezzoBiglietto = kmInput * prezzoKm;
//     let scontoBiglietto = 0;
//     //5)(condizione) SE minorenne va applicato uno sconto del 20% per i minorenni:
//     if (etaInput < 18) {
//         scontoBiglietto = (prezzoBiglietto * 100) / scontoMinorenni;
//     //5)(condizione) SE senior va applicato uno sconto del 40% per gli over 65:
//     } else if (etaInput >= 65) {
//         scontoBiglietto = (prezzoBiglietto * 100) / scontoSenior;
//     }

//     5) Stampare in console il prezzoBiglietto finale in console:
//     prezzoBiglietto -= scontoBiglietto;
//     console.log('Il prezzo del biglietto è: ', prezzoBiglietto.toFixed(2));

// 3)  (condizione: è un numero?) SE NO:
// } else {
//     console.log('Errore hai digidato dei NotANumber!');
// }

/* 6) MILESTONE 1:
    Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente 
    due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. 
    La risposta finale (o output) sarà anch’essa da scrivere in console. */

    //dichiarazione e assegnazione variabile prezzo € per km da percorrere
    const prezzoKm = 0.21;
    //dichiarazione e assegnazione variabile valore percentuale sconto senior
    const scontoSenior = 40;
    //dichiarazione e assegnazione variabile valore percentuale sconto minorenni
    const scontoMinorenni = 20;

    // dichiarazione variabile km da chiedere all'utente all'utente i km da percorrere
    const kmInputElement = document.getElementById('km');
    // chiedi all'utente l'età 
    const etaInputElement = document.getElementById('eta');
    
    // bottone per inviare i dati dell'utente 
    const generatedButton = document.getElementById('btn-submit');
    generatedButton.addEventListener('click',
        function (event) { 
            console.log(kmInputElement.value);
            console.log(etaInputElement.value);
            event.preventDefault();
        } 
    );

/* 7) MILESTONE 2:
    Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form
    in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo,
    come da screenshot allegato. Il recap dei dati e l’output del prezzo finale, andranno quindi 
    stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, 
    per indicare i centesimi sul prezzo). */
