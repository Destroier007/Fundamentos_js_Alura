/* Divida os alunos da sala abaixo em duas listas com a mesma quantidade deed alunos:
'joão', 'juliana', 'Ana', 'Caio', 'Lara', 'marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinicius', 'Renan', 'Renata', 'Daisy', 'Camilo'. */

const alunos = ['joão', 'juliana', 'Ana', 'Caio', 'Lara', 'marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinicius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

// quero colocar os 10 primeiros alunos em outro grupo, posso usar o "slice()" pois ele dividi o grupo .
// 0 -> primeiro termo e 10 o ultimo termo, slice vai selecionar todos entre eles. se atentar pois o slice nao seleciona o indicie q está por ultimo "10" mas sim seleciona o 9

const sala1 = alunos.slice(0, alunos.length / 2);
// no caso da sala2 nao é preciso adicionar a posição do ultimo aluno, pois o java já entende q é nescessario selecionar até o ultimo.
const sala2 = alunos.slice(alunos.length / 2);
console.log(sala1);
console.log(sala2);

