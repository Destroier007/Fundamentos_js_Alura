//Acidentalmente um professor lançou uma nota a + no sistema para o aluno, resolva esse problema deletando a ultima nota do aluno. 

const notas = [10, 6, 8, 5.5, 10]
//      (pop) remove o ultimo dado do array
notas.pop();

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(`A média é ${media}`);