/* Desafio 16: médias das turmas
Com a média de todos os alunos de 3 salas, calcule a média geral de cada sala: */

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acc, nota) => acc + nota, 0);
//                                          acc = acumulador
    const media = somaDasNotas / notasDaSala.lenght;

    return media;
}

console.log(`A média da sala de JavaScript é ${calculaMedia(salaJS)}`);
console.log(`A média da sala de Java é ${calculaMedia(salaJava)}`);
console.log(`A média da sala de python ${calculaMedia(salaPython)}`);

//estrutura do reduce()

const numeros = [43, 50, 65, 12];

const soma = numeros.reduce((acc, atual) => atual + acc, 0)

console.log(soma) //170