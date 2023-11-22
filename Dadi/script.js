// selezioniamo gli elementi del DOM
const result = document.getElementById("esito");
const humanNumber = document.getElementById("numero-umano");
const computerNumber = document.getElementById("numero-computer");


// generare un numero random per l'utente
document.getElementById("numero-umano").innerHTML = (Math.floor(Math.random() * 6) + 1);


// generare un numero random per il computer
document.getElementById("numero-computer").innerHTML = (Math.floor(Math.random() * 6) + 1);



if (humanNumber > computerNumber) {
    console.log("hai vinto");
} else if (computerNumber > humanNumber) {
    console.log("hai perso");
} else {
    console.log("avete pareggiato");
}

    