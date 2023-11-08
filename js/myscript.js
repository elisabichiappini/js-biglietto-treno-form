/********************************************************************
FILE JAVASCRIPT
********************************************************************/
//codice rigido di Javascript
    'use strict';

/* MILESTONE 1:
    Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente 
    due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. 
    La risposta finale (o output) sarà anch’essa da scrivere in console. */
/* MILESTONE 2:
    Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form
    in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo,
    come da screenshot allegato. Il recap dei dati e l’output del prezzo finale, andranno quindi 
    stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, 
    per indicare i centesimi sul prezzo). */


    // 1) dichiaro e assegno valore campo input che manipolerò, dove saranno inseriti i dati numerici km:
    const elementKmUtente = document.getElementById('km');
    
    // 2) dichiaro e assegno valore del campo input che manipolerò, dove saranno inseriti i dati numerici età:
    const elementEtaUtente = document.getElementById('eta');

    // 3) dichiaro e assegno valore del botton per generare calcolo degli input per il costo del biglietto:
    const elementGeneraButton = document.getElementById('btn-submit');

    // 7) dichiaro e assegno valore campo input che manipolerò, dove saranno inseriti i dati testo nome e cognome utente:
    const elementIdUtente = document.getElementById('utente-id');

    // controllo: stampa quali sono gli elementi da manipolare;
    // console.log(elementKmUtente, elementEtaUtente, elementGeneraButton, elementIdUtente);

    // 8) dichiaro e assegno valore al modulo biglietto virtuale che comparità qunado genererò il prezzo biglietto:
    const elementModuloBigliettoVirtuale = document.getElementById('modulo-biglietto-virtuale');
    // dichiaro gli altri elementi del biglietto virtuale che dovrò far comparire nel dom:
    const elementVirtualeIdUtente = document.querySelector('.value-id-utente');
    const elementVirtualeOffert = document.querySelector('.value-type-offert');
    const elementVirtualeSector = document.querySelector('.op-sector');
    const elementVirtualeCode = document.querySelector('.op-code');
    const elementVirtualePrezzoFinale = document.querySelector('.price-to-pay');

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
        // 9) dichiaro e assegno alla variabile la tipologia di biglietto per op-offert:
        let typeOffert = 'Prezzo standard';
        // 6) condizione per calcolo e scorporo sconto:
        if (elementEtaUtente.value === 'minorenne') {
            // cacolo biglietto prezzo minorenne:
            prezzoBiglietto -= (prezzoBiglietto * percentualeMinorenni) / 100;
            // 9)riassegno alla variabile nuovo valore scontato minori:
            typeOffert = 'Prezzo Scontato Minorenni';
        } else if (elementEtaUtente.value === 'senior65') {
            // cacolo biglietto prezzo minorenne:
            prezzoBiglietto -= (prezzoBiglietto * percentualeSenior65) / 100;
            // 9)riassegno alla variabile nuovo valore scontato senior65:
            typeOffert = 'Prezzo Scontato Senior 65';
        }
        // controllo: stampo nome e cognome in console sulla base degli input dell'utente:
        console.log(elementIdUtente.value);
        // controllo: stampo il prezzo biglietto in console sulla base degli input dell'utente e valori arrotondati a due decimali:
        console.log(prezzoBiglietto.toFixed(2));
        // controllo: stampo in console la tipologia di biglietto attribuito alla scelta di fascia età:
        console.log(typeOffert);

        // ASSEGNO VALORI DOM
        // 10) assegno valore nome utente in Dom
        elementVirtualeIdUtente.innerHTML = elementIdUtente.value;
        // 10) assegno valore tariffa in Dom
        elementVirtualeOffert.innerHTML = typeOffert;
        // 10) assegno valore prezzofinale in Dom
        elementVirtualePrezzoFinale.innerHTML = `${prezzoBiglietto.toFixed(2)} €`;

        // 11) all'evento genera tolgo la classe hidden nel dom per mostrare il biglietto generato:
        elementModuloBigliettoVirtuale.classList.remove('hidden');
    });

    

    // 5) evento: reset bottone che annulla l'inserimento dei valori, riassegnando il valore null a 'eta' e 'vuoto' a 'km' e stampa in console la conferma che sia stata resettato l'input di 'km' e 'eta'
    elementAnnullaButton.addEventListener('click',
        function() {
            elementIdUtente.value = '';
            elementKmUtente.value = '';
            elementEtaUtente.value = null;
            console.log('annullo i bottoni');

        // 12) all'evento annulla aggiungo la classe hidden nel dom per mostrare il biglietto generato:
        elementModuloBigliettoVirtuale.classList.add('hidden');
    });