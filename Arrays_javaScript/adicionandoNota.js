//Um professor acidentalmente esqueceu de adicionar uma nota a media do aluno, sobrando somente 3 no sistema ao inves de 4, aqui vamos adicionar essa 4° nota ao sistema


const notas = [10, 6, 8];
//      (push) funciona como "empurrar" adicionando o termo ao final do Array
notas.push(7);

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(media)