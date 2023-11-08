/********************************************************************
FILE JAVASCRIPT
********************************************************************/
//codice rigido di Javascript
    'use strict';

/* MILESTONE 1:
    Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente 
    due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. 
    La risposta finale (o output) sarà anch’essa da scrivere in console. */
    // 1) dichiaro e assegno valore campo input che manipolerò, dove saranno inseriti i dati numerici km;
    const elementKmUtente = document.getElementById('km');
    
    // 2) dichiaro e assegno valore del campo input che manipolerò, dove saranno inseriti i dati numerici età;
    const elementEtaUtente = document.getElementById('eta');

    // 3) dichiaro e assegno valore del botton per generare calcolo degli input per il costo del biglietto;
    const elementGeneraButton = document.getElementById('btn-submit');

    //controllo: stampa quali sono gli elementi da manipolare;
    console.log(elementKmUtente, elementEtaUtente, elementGeneraButton);

    // 5) dichiaro e assegno valore del botton per annullare gli input per generare il costo del biglietto;
    const elementAnnullaButton = document.getElementById('btn-annull');

    // 6) dati per calcolo biglietto
    const prezzoAlKm = 0.21;
    const percentualeMinorenni = 20;
    const percentualeSenior65 = 40;
   
    // 4) evento: click bottone genera che stamperà i valori inseriti in 'km' e 'eta' del DOM
    elementGeneraButton.addEventListener('click',
    function() {
        // controllo: assegnazione bottone e stampo i dati inseriti dall'utente; 
        // console.log('ho cliccato il bottone');
        // console.log(elementEtaUtente.value);
        // console.log(elementKmUtente.value);

        // 6) calcolo biglietto e salvo in variabile il valore sulla base dei dati dichiarati in variabili.
        // cacolo biglietto prezzo intero:
        let prezzoBiglietto = prezzoAlKm * Number(elementKmUtente.value);
        // condizione per cavolo e scorporo sconto:
        if (elementEtaUtente.value === 'minorenne') {
            // cacolo biglietto prezzo minorenne:
            prezzoBiglietto -= (prezzoBiglietto * percentualeMinorenni) / 100;
        } else if (elementEtaUtente.value === 'senior65') {
            // cacolo biglietto prezzo minorenne:
            prezzoBiglietto -= (prezzoBiglietto * percentualeSenior65) / 100;
        }
        // controllo: stampo il prezzo biglietto in console sulla base degli input dell'utente e valori arrotondati a due decimali:
        console.log(prezzoBiglietto.toFixed(2));
    });

    // 5) evento: reset bottone che annulla l'inserimento dei valori, riassegnando il valore null a 'eta' e 'vuoto' a 'km' e stampa in console la conferma che sia stata resettato l'input di 'km' e 'eta'
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
