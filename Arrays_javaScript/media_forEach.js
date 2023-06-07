/*Calcule a média entre as seguintes notas usando o forEach:

10
6.5
8
7.5*/

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

notas.forEach(function(nota) {
    somaDasNotas += nota;
});

media = somaDasNotas/notas.length;
console.log(`A média é ${media}`);