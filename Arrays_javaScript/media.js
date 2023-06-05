// Imagine precisar fazer uma media de mais de 1000 valores, nao daria pra criar uma const pra cada um.
/*
const nota1 = 10;
const nota2 =6.5;
const nota3 = 8;
const nota4 =7.5;

const media = (nota1 + nota2 + nota3 + nota4)/ 4;
console.log(media);
*/

/* posiçoes:
                0   1   2   3   */
const notas = [10, 6.5, 8., 7.5];
const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
// (length) = largura ou tamanho, ele vai puxar a quantidade de posiçoes do Array no caso, 4
console.log(media);
