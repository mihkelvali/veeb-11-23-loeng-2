function liida1(number1, number2) {
    const summa = number1 + number2;
    return summa;
}

const liida2 = (number1, number2) => {
    const summa = number1 + number2;
    return summa;
}

const liida3 = (number1, number2) => number1 + number2;

const paneNimiKokku1 = (inimene) => {
    return inimene.eesnimi + ' ' + inimene.perenimi;
}

const paneNimiKokku2 = (inimene) => {
    // const eesnimi = inimene.eesnimi;
    // const perenimi = inimene.perenimi;
    const { eesnimi, perenimi } = inimene;
    return eesnimi + ' ' + perenimi;
}

const paneNimiKokku3 = ({ eesnimi, perenimi }) => eesnimi + ' ' + perenimi;

const inimene1 = {
    eesnimi: 'Mihkel',
    perenimi: 'Väli'
}
const inimene2 = {
    eesnimi: 'Peeter',
    perenimi: 'Paan'
}
const inimesed = [inimene1, inimene2];
console.log(inimesed);
// for (let i = 0; i < inimesed.length; i++) {
//     inimesed[i] = inimesed[i].eesnimi + inimesed[i].perenimi;
// }
// inimesed.forEach((inimene, i, array) => array[i] = inimene.eesnimi + inimene.perenimi);

const inimesteNimed = inimesed.map((inimene) => inimene.eesnimi + inimene.perenimi);
// for (let i = 0; i < inimesed.length; i++) {
//     inimesteNimed[i] = inimesed[i].eesnimi + inimesed[i].perenimi;
// }

console.log(inimesed);
console.log(inimesteNimed);
