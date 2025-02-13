/* Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. */

const numbers = []
for (let i = 0; i < 6; i++) {
    const thisNumber = prompt("type here your number, it must be a number, es: 1")
    if (thisNumber % 2 !== 0) {
        numbers.push(thisNumber)
    }
}
console.log(numbers);
