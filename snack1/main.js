/* L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

const number_1 = Number(prompt("insert a number"))
const number_2 = Number(prompt("insert a second number"))
if (isNaN(number_1) || isNaN(number_2)) {
    alert("please insert a numeric value")
}
if (number_1 > number_2) {
    console.log(`the larger number is ${number_1}`);
} else if (number_1 === number_2) {
    console.log(`the numbers are equal`);
} else {
    console.log(`the larger number is ${number_2}`);
}