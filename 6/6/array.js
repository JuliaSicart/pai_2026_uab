//21.1.- Fes un programa que faci el següent:
//● Defineix una variable de tipus taula, buida.
//● Afegeixi el valor “Hola” a la posició 0.
//● Afegeixi el valor “Adeu” a la posició 1.
//● Escrigui a la consola el contingut de la taula.

//let taula = [];
//taulabroad = [];
//taula[0] = "Hola";
//taula[1] = "Adeu";
//console.log(taula);

//21.2.- Al programa anterior, afegeix les instruccions necessàries (després del console.log())
//per a fer el següent:
//● Afegeixi el valor “Nom” a la posició 2 de la taula.
//● Escrigui a la consola el contingut de la taula.
//● Modifiqui el valor emmagatzemat a la posició 1 de la taula, guardant el valor “, “
//● Escrigui a la consola el contingut de la taula.

//let taula = [];
//taula[0] = "Hola";
//taula[1] = "Adeu";
//console.log(taula);

//taula[2] = "Nom";
//console.log(taula);
//taula[1] = ", ";
//console.log(taula);

//21.3.- Fes un programa que faci el següent:
//● Defineixi una variable de tipus taula, amb aquests elements [23,45,98,73].
//● Escrigui a la consola la suma dels elements situats a les posicions 0 i 2 de la taula.
//● Guardi a la posició 6 de la taula la suma dels elements
//● Escrigui a la consola el contingut de la taula. Què passa a la posició 5?

//let taula = [23, 45, 98, 73];
//console.log(taula[0] + taula[2]);
//taula [6] = taula[0] + taula[2];
//console.log(taula);

//21.4.- Fes un programa que, donat un número (que demanarem per pantalla fent servir
//prompt()) emmagatzemi a una taula el doble i el triple d’aquest número. Un cop fet, escriu la
//taula a la consola.

//let numero = Number(prompt("Introdueix un número:"));
//let taula = [numero * 2, numero * 3];
//console.log(taula);

//21.5.- Fes un programa que, donat dos números, que demanarem per pantalla i emmagatzemarem a dues variables, guardi a una taula els resultats de la suma, la resta, la multiplicació i la divisió dels dos valors introduïts.

//let num1 = Number(prompt("Introdueix el primer número:"));
//let num2 = Number(prompt("Introdueix el segon número:"));
//let resultats = [num1 + num2, num1 - num2, num1 * num2, num1/num2];
//console.log(resultats);

// 21.6.- Donada aquesta taula:
//let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
//Fes un programa que escrigui a la consola els valors situats a la primera i la darrera posició
//de la taula.
//*****
//Donada la definició d’aquesta taula:

//let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
//console.log(taula[0]);    
//console.log(taula[taula.length - 1]);

//21.7.- Fes un programa que escrigui a la consola tots els valors emmagatzemats a la taula, un a un.

//let taula = [23, 45, 63, 78, 23, 68, 3, 78, 32, 53, 93, 21, 53, 5, 62, 78];
//for (let i = 0; i < taula.length; i++) {
//    console.log(taula[i]);
//}   

//21.8.- Fes un programa que escrigui a la consola la suma tots els valors emmagatzemats a la taula.

//let taula = [23, 45, 63, 78, 23, 68, 3, 78, 32, 53, 93, 21, 53, 5, 62, 78];
//let suma = 0;
//for (let i = 0; i < taula.length; i++) {
//    suma += taula[i];
//}
//console.log(suma);  

//21.9.- Fes un programa que crei una segona taula i emmagatzemi a ella tots els valors de la taula, tot sumant-los 25 (així les tres primeres posicions de la nova taula emmagatzemarien [48, 70, 88] Un cop fet haurà d’escriure la nova taula a la consola.

//let taula = [23, 45, 63, 78, 23, 68, 3, 78, 32, 53, 93, 21, 53, 5, 62, 78];
//let novaTaula = [];
//for (let i = 0; i < taula.length; i++) {
//    novaTaula[i] = taula[i] + 25;
//}
//console.log(novaTaula); 

// 21.10.- Fes un programa que calculi la mitjana dels valors emmagatzemats a la taula i l’escrigui a la consola (la mitjana es calcula sumant tots els valors i dividint pel nombre de valors).

//let taula = [23, 45, 63, 78, 23, 68, 3, 78, 32, 53, 93, 21, 53, 5, 62, 78];
//let suma = 0;
//for (let i = 0; i < taula.length; i++) {
//    suma += taula[i];
//}
//let mitjana = suma / taula.length;
//console.log("Mitjana:", mitjana);

//21.11.- Fes un programa que calculi i escrigui a la consola els valors més gran i més petit de la taula.

//let taula = [23, 45, 63, 78, 23, 68, 3, 78, 32, 53, 93, 21, 53, 5, 62, 78];
//let max = taula[0];
//let min = taula[0];
//for (let i = 1; i < taula.length; i++) {  
//    if (taula[i] > max) {
//        max = taula[i];
 //   }
   // if (taula[i] < min) {
     //   min = taula[i];
    //}
//}
//console.log("Valor màxim:", max);
//console.log("Valor mínim:", min);

//21.12.- Fes un programa que crei una nova taula on s’emmagatzemin només els valors parells de la taula i que escrigui el contingut d’aquesta nova taula a la consola. 

//let taula = [23, 45, 63, 78, 23, 68, 3, 78, 32, 53, 93, 21, 53, 5, 62, 78];
//let novaTaula = [];
//for (let i = 0; i < taula.length; i++) {
//    if (taula[i] % 2 === 0) {
//        novaTaula.push(taula[i]);
//    }
//}
//console.log(novaTaula);

//21.13.- Fes un programa que demani a l’usuari un valor (fent servir prompt()) i escrigui a la consola quants cops apareix aquest valor a la taula. 

//let taula = [23, 45, 63, 78, 23, 68, 3, 78, 32, 53, 93, 21, 53, 5, 62, 78];
//let valor = prompt("Introdueix un valor:");
//let comptador = 0;

//for (let i = 0; i < taula.length; i++) {
//    if (taula[i] === parseInt(valor)) {
//        comptador++;
//    }
//}
//console.log("El valor apareix", comptador, "vegades a la taula."); 

//21.14.- Fes un programa que, donats dos arrays de números, comprovi si tots dos tenen el mateix número d’elements i, si és així, crei una nova taula que contingui la suma de cada element que es trobi a la mateixa posició als dos arrys.

//let array = [1, 2, 3, 4, 5];
//let array2 = [10, 20, 30, 40, 50];

//if (array.length === array2.length) {
//    let novaTaula = [];
//    for (let i = 0; i < array.length; i++) {
//        novaTaula[i] = array[i] + array2[i];
//    }
//    console.log(novaTaula);
//} else {
//    console.log("Els dos arrays no tenen el mateix número d'elements.");
//}

//21.15.- Fes un programa que, donats una taula amb números, guardi a una nova taula els valors de la primera però donant-li la volta.

//let array = [1, 2,3, 4, 5];
//let novaTaula = [];
//for (let i = 0; i < array.length; i++) {
//    novaTaula[i] = array[array.length - 1 - i];
//}
//console.log(novaTaula); 

//21.16.- Fes un programa que demani un número a l’usuari (fent servir prompt()) i escrigui a la consola si es troba o no a la taula. IMPORTANT: Fes-lo fent servir un while de manera que si es troba l’element, s’acabi el bucle.

//let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];

//let numero = parseInt(prompt("Introdueix un número:"));
//let i = 0;
//let trobat = false; 

//while (i < taula.length && !trobat) {
//    if (taula[i] === numero) {
//        trobat = true;
//    } else {
//        i++;
//    }   
//}
//if (trobat) {
//    console.log("El número " + numero + " SI es troba a la taula.");
//} else {
//    console.log("El número " + numero + " NO es troba a la taula.");
//}

//21.17.- Fes un programa que demani un número a l’usuari (fent servir prompt()) i escrigui a la consola si hi ha algun valor més gran a la taula. IMPORTANT: Fes-lo fent servir un while de manera que si es troba que hi ha un element més gran, s’acabi el bucle.

//let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];

//let numero = parseInt(prompt("Introdueix un número:"));
//let i = 0;
//let trobat = false; 
//while (i < taula.length && !trobat) {
//    if (taula[i] > numero) {
//        trobat = true;
//    } else {
//        i++;
//    }
//    if (trobat){
//        console.log("Hi ha algun valor més gran a la taula que " + numero + ".");
//    } else {
//        console.log("No hi ha cap valor més gran a la taula que "  + numero + ".");
//    }
//}

//21.18.- Fes un programa que escrigui “Sí” si el primer número de la taula està repetit i “No” en cas contrari.

//let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
//let primerElement = taula[0];
//let estaRepetit = false;

//for (let i = 1; i < taula.length; i++) {
//    if (taula[i] === primerElement) {
//        estaRepetit = true;
//        break;
//    }
//}

//if (estaRepetit) {
//    console.log("Sí");
//} else {
//    console.log("No");
//}

// 21.19.- Fes un programa que donades dues taules de la mateixa mida, crei una nova taula amb la unió de les dues taules de manera alterna.

//let taula1 = [1, 2, 3, 4, 5];
//let taula2 = [10, 20, 30, 40, 50];
//let novaTaula = [];

//for (let i = 0; i < taula1.length; i++) {
//    novaTaula.push(taula1[i]);
//    novaTaula.push(taula2[i]);
//}

//console.log(novaTaula)

//21.20.- Fes un programa que, donada una taula i un valor, crei una nova taula sense el valor proporcionat.

//let taulaOriginal = [10, 20, 30, 20, 40, 50];
//let valorAEliminar = 20;

//let novaTaula = [];
//for (let i = 0; i < taulaOriginal.length; i++) {
//    if (taulaOriginal[i] !== valorAEliminar) {
//        novaTaula.push(taulaOriginal[i]);
//    }
//}    
//console.log(novaTaula);

//21.21.- Fes un programa que, donada una taula i una posició, guardi a una altra taula la taula inicial, però des de la posició donada fins al final. 

//let TaulaOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//let posicio = parseInt(prompt("Introdueix una posició:"));
//let novaTaula = [];
//for (let i = posicio; i < TaulaOriginal.length; i++) {
//    novaTaula.push(TaulaOriginal[i]);
//}
//console.log(novaTaula);

//21.22.- Fes un programa que, donada una taula escrigui a la pantalla el primer número que estigui repetit.

let TaulaValors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 6, 8, 19, 5, 3, 4 ,2 , 6, 9, 11, 3];
let primerRepetit = null;
let trobat = false;

for (let i = 0; i < TaulaValors.length && !trobat; i++) {  
    for (let j = i + 1; j < TaulaValors.length && !trobat; j++) {
        if (TaulaValors[i] === TaulaValors[j]) {
            primerRepetit = TaulaValors[i];
            trobat = true;
        }
}
if (primerRepetit !== null) {
    console.log("El primer número que està repetit és: " + primerRepetit);
} else {
    console.log("No hi ha cap número repetit.");
}
}
