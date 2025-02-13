/* L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

const number_1 = prompt("insert a number")
const number_2 = prompt("insert a second number")
if (number_1 > number_2) {
    console.log(`the larger number is ${number_1}`);
} else {
    console.log(`the larger number is ${number_2}`);
}