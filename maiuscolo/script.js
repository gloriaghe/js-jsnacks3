// A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo 
//e con l’iniziale maiuscola.

// Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]


const nomi = ["gloria", "ALESSANDRO", "nathan", "noah"];

const parolaNormaizzata = nomi.map((item) => {
    let min = item.toLowerCase();
    let inizio = min[0].toUpperCase();
    let fine = inizio+ min.slice(1);
    //con slice tolgo la prima lettera
    return fine;
});

console.log(parolaNormaizzata);