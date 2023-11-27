// selezionare il bottone per il lancio
const roll = document.getElementById("bottone-lancia");


// selezionare il container nascosto
const hiddenContainer = document.getElementById("hidden-container");


// generare un numero random per l'utente
let humanNumber = (Math.floor(Math.random() * 6) + 1);
console.log(humanNumber);
document.getElementById("numero-umano").innerHTML = humanNumber;


// generare un numero random per il computer
let computerNumber = (Math.floor(Math.random() * 6) + 1);
console.log(computerNumber);
document.getElementById("numero-computer").innerHTML = computerNumber;

let result = document.getElementById("esito");

roll.addEventListener("click",

    function () {

    // far comparire il container
        hiddenContainer.classList.add("not-hidden")

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
        
    }

);

function refreshPage(){
    window.location.reload();
} 