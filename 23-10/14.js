// 14.1.- Escriu un programa que, donat un número llegit amb prompt, escrigui el missatge “el número llegit és negatiu” si el número és més petit que zero i escrigui el missatge “elnúmero llegit és positiu” en cas contrari. 

let numero = parseInt(prompt("Introdeix un número: "));
if (numero <0) {
    console.log ("El número llegit és negatiu");
} else {
    console.log ("El número llegit és positiu");
} 
