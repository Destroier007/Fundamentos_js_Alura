/* crie uma lista com os seguintes alunos e alunas;
'Joao', Juliana','Caio','Ana'

Crie uma lista com as seguintes médias:
10, 8, 7.5, 9

Crie uma lista que contem as duas listas acima.*/

const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];
console.log(listaDeAlunosEMedias);

// feito isso, juntando elas, como eu consigo acessar a Juliana por exemplo dentro dessa nova lista ?
//                                                                          0 representa o lista de indicie 0 e o 1 representa o nome da posição 1
console.log(`A aluna da posição 1 da lista de alunos é: ${listaDeAlunosEMedias[0][1]}, A nota dessa aluna é ${listaDeAlunosEMedias [1][1]}`);

const nomes = ["Ana", "Juliana", "Leonardo"];
const idades = [30, 35, 28];
const faculdade = [false, true, true];

const funcionarios = [nomes, idades, faculdade];

console.log(`A(o) Funcionaria(o) ${nomes[0]} que possui ${idades[0]} anos`);