// generare un numero random per l'utente
var humanNumber = (Math.floor(Math.random() * 6) + 1);
console.log(humanNumber);
document.getElementById("numero-umano").innerHTML = humanNumber;


// generare un numero random per il computer
var computerNumber = (Math.floor(Math.random() * 6) + 1);
console.log(computerNumber);
document.getElementById("numero-computer").innerHTML = computerNumber;

var result = document.getElementById("esito");


// stabilire le condizioni di vittoria, sconfitta e pareggio
if (humanNumber > computerNumber) {
    console.log("hai vinto");
    document.getElementById("esito").innerHTML = "HAI VINTO";
    result.classList.add("win");
} else if (computerNumber > humanNumber) {
    console.log("hai perso");
    document.getElementById("esito").innerHTML = "HAI PERSO";
    result.classList.add("lose");
} else {
    console.log("avete pareggiato");
    document.getElementById("esito").innerHTML = "AVETE PAREGGIATO";
    result.classList.add("draw");
}
