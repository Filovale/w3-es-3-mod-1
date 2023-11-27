// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio
// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata


// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
function changeId() {
    let myId = document.getElementById("firstId");
    myId.innerText = "Ciao sono il nuovo titolo";
}
//changeId()

// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
function newWallpaper() {
    document.body.style.backgroundColor = "lightblue";
}
//newWallpaper()

//ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio
function changeP () {
    let newP = document.getElementById("indirizzo");
    newP.innerText = "Questo è il nuovo indirizzo";
}
//changeP()

// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
function addClasses() {
    let myTable = document.getElementById("table");
    let myLinks = myTable.getElementsByTagName("a");
  
    for (let i = 0; i < myLinks.length; i++) {
      myLinks[i].classList.add("classeCSS");
    }
}
addClasses()

// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; 
//questa classe deve modificare la visibilità/invisibilità dell'immagine
function modVisibility() {
    let myTable2 = document.getElementById("table");
    let myImages = myTable2.getElementsByTagName("img");
  
    for (let i = 0; i < myImages.length; i++) {
      if (myImages[i].classList.contains("visibilityClass")) {
        myImages[i].classList.remove("visibilityClass");
      } else {
        myImages[i].classList.add("visibilityClass");
      }
    }
}
//modVisibility()

// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata
function changePricesColors() {
    var myTable3 = document.getElementById("table");
    var myRows = myTable3.getElementsByTagName("tr");
    var colors = ["yellow", "blue", "green", "red", "lightblue"];
  
    for (var i = 1; i < myRows.length; i++) {
      let cells = myRows[i].getElementsByTagName("td");
      if (cells.length >= 4) {
        let priceCell = cells[3]; // poichè quarta cella indice 3
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        priceCell.style.color = randomColor;
      }
    }
}
//changePricesColors()




















