// NOME
var nome = prompt ('il tuo nome');
// COGNOME
var cognome = prompt ('il tuo cognome');
// COLORE PREFERITO
var color = prompt ('il tuo colore preferito');
// STAMPA VALORI  SU FILE HTML
document.getElementById('nome').innerHTML += nome;
document.getElementById('cognome').innerHTML += cognome;
document.getElementById('color').innerHTML += color;
// VARIABILE PASSWORD
var password = nome += cognome += color += 40;
// STAMPA PASSWORD SU FILE HTML
document.getElementById('password').innerHTML += password;
