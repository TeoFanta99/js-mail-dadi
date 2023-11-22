// seleziono il riferimento in html dove verrà stampato l'esitio
const result = document.getElementById("mio_id");

// chiedi all'utente la sua email
const text = prompt("Inserisci il tuo indirizzo email")
console.log(text); 



// creare la lista di controllo
const list = ["mariorossi@gmail.com", "giuseppeverdi@gmail.com", "pincopallino@gmail.com", "lucabianchi@gmail.com"];

// verifica se la mail utente è presente dentro all'array
if (list.includes(text)) {

    // stampa esito positivo
    document.getElementById("mio_id").innerHTML = "ESITO POSITIVO"
} 

else {
    
    // stampa esito negativo
    document.getElementById("mio_id").innerHTML = "ESITO NEGATIVO"
}
