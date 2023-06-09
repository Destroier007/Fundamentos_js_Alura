const pessoa = {
    nome: "Luma",
    profissão: "Engenheira",
};

console.log(pessoa.nome);
//digamos q eu queira acessasr o telefone dessa pessoa, que nao existe no sistema 
console.log(pessoa.telefone);
// é possivel atribuir propriedades mesmo dps do objeto ter sido criado por ex:
pessoa.telefone = "11 222333444";
console.log(pessoa.telefone);

pessoa.nome = "Luma Silva";
console.log(pessoa);