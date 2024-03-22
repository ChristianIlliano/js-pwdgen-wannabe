// Chiedi all’utente tramite prompt il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21


// RACCOLTA DATI
// Con un prompt chiediamo all'utente il suo nome
let userName = prompt ("Ciao utente! Come ti chiami?"); //String
console.log(userName, typeof userName);
// Con un prompt chiediamo all'utente il suo cognome
let userSurName = prompt ("E il tuo cognome?"); //String
console.log(userSurName, typeof userSurName);
// Con un prompt chiediamo all'utente il suo colore preferito
let userFavColor = prompt ("E il tuo colore preferito?"); //String
console.log(userFavColor, typeof userFavColor);
// Con un prompt creiamo un numero casuale da 0 a 99
let randomNumber =
Math.floor(Math.random() * 100); //number
console.log(randomNumber, typeof randomNumber);
// Converto il numero random in una stringa
const randomNumberString = randomNumber.toString() //String
console.log(randomNumberString, typeof randomNumberString);

// PARTE LOGICA
// Eseguo l'operzione di addizione delle variabili
const password = userName + userSurName + userFavColor + randomNumberString; //String

// STAMPA DELOUTPUT
const Result = `Ho creato la tua password: ${password}`
console.log(Result, typeof Result);

document.getElementById("Password").innerHTML = Result; //String