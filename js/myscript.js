/********************************************************************
FILE JAVASCRIPT
********************************************************************/
//codice rigido di Javascript
    'use strict';

/* MILESTONE 1:
    Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente 
    due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. 
    La risposta finale (o output) sarà anch’essa da scrivere in console. */
    // 1) dichiaro e assegno valore del campo input che manipolerà dove saranno inseriti i dadti numerici km;
    const elementKmUtente = document.getElementById('km');
    
    // 2) dichiaro e assegno valore del campo input che manipolerà dove saranno inseriti i dati numerici età;
    const elementEtaUtente = document.getElementById('eta');

    // 3) creo un botton per calcolare il costo del biglietto;
    const elementGeneraButton = document.getElementById('btn-submit');

    // 3) creo un botton per generare il calcolo del costo del biglietto;
    const elementAnnullaButton = document.getElementById('btn-annull');

    // 4) controllo: stampa quali sono gli elementi da manipolare;
    console.log(elementEtaUtente, elementKmUtente, elementGeneraButton);
    // 7) calcolo biglietto
        // dichiaro e assegno alla variabile il costo per Km
    const prezzoAlKm = 0.21;
   
    // 5) evento click bottone genera che stamperà i valori inseriti in 'km' e 'eta' del DOM
    elementGeneraButton.addEventListener('click',
    function() {
        // 7) calcolo biglietto pieno
        const prezzoBiglietto = Number(elementKmUtente.value) * prezzoAlKm;
        console.log(prezzoBiglietto);
        // evento click bottone
        console.log('ho cliccato il bottone');
        console.log(elementEtaUtente.value);
        console.log(elementKmUtente.value);
    });

    // 6) evento reset bottone che annulla l'inserimento dei valori, riassegnando il valore null a 'eta' e 'vuoto' a 'km' e stampa in console la conferma che sia stata resettato l'input di 'km' e 'eta'
    elementAnnullaButton.addEventListener('click',
    function() {
        elementKmUtente.value = '';
        elementEtaUtente.value = null;
        console.log('annullo i bottoni');
    });

/* MILESTONE 2:
    Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form
    in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo,
    come da screenshot allegato. Il recap dei dati e l’output del prezzo finale, andranno quindi 
    stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, 
    per indicare i centesimi sul prezzo). */
