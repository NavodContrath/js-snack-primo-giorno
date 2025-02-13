/*L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */

const firstWord = prompt("type here the first word")
const secondWord = prompt("type here the second word")
if (firstWord.length < secondWord.length) {
    console.log(firstWord);
} else if (secondWord.length < firstWord.length) {
    console.log(secondWord);
}
if (firstWord.length > secondWord.length) {
    console.log(firstWord);
} else if (secondWord.length > firstWord.length) {
    console.log(secondWord);
}
