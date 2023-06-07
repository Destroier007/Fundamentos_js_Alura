/* Desafio 17: criando cópias
Considere o seguinte array de notas:

const notas = [7, 7, 8, 9];

Crie um novo array com a nota 10 a mais, sem alterar o array original. 
*/

const notas = [7,7,8,9];
// (...) funciona como um operador de espalhamento, ele pega todo o conteudo do Array e espalha seus valores dentro desse []
const novasNotas = [...notas, 10];

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais sao ${notas}`);
