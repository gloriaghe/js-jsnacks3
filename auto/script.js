// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, 
// nel terzo il resto delle auto.
// Infine stampa separatamente i 3 array.


const auto = [
    {
        "marca" : "audi",
        "modello": "Topolino",
        "alimentazione": "benzina"
    },
    {
        "marca" : "fiat",
        "modello": "Paperino",
        "alimentazione": "diesel"
    },
    {
        "marca" : "ferrari",
        "modello": "pjMask",
        "alimentazione": "benzina"
    },
    {
        "marca" : "pegeout",
        "modello": "Paw Patrol",
        "alimentazione": "elettrico"
    },
    {
        "marca" : "maserati",
        "modello": "Sirenetta",
        "alimentazione": "diesel"
    },
    {
        "marca" : "fiat",
        "modello": "Re Leone",
        "alimentazione": "gpl"
    },
    {
        "marca" : "fiat",
        "modello": "Harry Potter",
        "alimentazione": "benzina"
    },
    {
        "marca" : "lamborghini",
        "modello": "Puffi",
        "alimentazione": "metano"
    },
    {
        "marca" : "opel",
        "modello": "Dobby",
        "alimentazione": "gpl"
    },
    {
        "marca" : "opel",
        "modello": "Biancaneve",
        "alimentazione": "gpl"
    }
];



const benzina = [];

const diesel = [];

const altraAlimentazione = [];

const alimentazioneDiversa = auto.filter((element) => {
    if (element.alimentazione === "benzina"){
        benzina.push(element);
    } else if (element.alimentazione === "diesel") {
        diesel.push(element);
    } else {
        altraAlimentazione.push(element);
    }
});        

console.log(benzina);
console.log(diesel);
console.log(altraAlimentazione);
