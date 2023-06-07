/*
Um aluno recebeu um ponto extra nas suas notas. Adicione esse ponto nas notas da seguinte lista:

10
9.5
8
7
6
*/

const notas = [10, 9.5, 8, 7, 6];

const notasAtualizadas = notas.map((nota) => {
    return nota +1 >= 10? 10:nota +1;
});

console.log(notasAtualizadas);

// o codigo funciona bem, porem nao existe noma > que 10 logo vamos adicionar uma linha para verificar se a nota está > q 10.


//Multiplicando numeros com o MAP 
const arrayNums = [1,2,3,4];

function multiplicaPorDez(num){
    return num*10
}
const arraySomada = arrayNums.map(multiplicaPorDez);
console.log(arraySomada)
