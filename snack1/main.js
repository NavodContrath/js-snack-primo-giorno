/* L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

const number_1 = Numberprompt("insert a number")
const number_2 = Numberprompt("insert a second number")
if (number_1 > number_2) {
    console.log(`the larger number is ${number_1}`);
} else if (number_1 === number_2) {
    console.log(`the numbers are equal`);
} else {
    console.log(`the larger number is ${number_2}`);
}