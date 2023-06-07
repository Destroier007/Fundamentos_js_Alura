/* Um professor acidentalmente adicionou nomes repetidos na lista de chamada:
Ana
Clara
Maria
Maria
João
João
João
Remova os nomes repetidos, deixando apenas um de cada.*/ 

// SET() NAO PERMITE TERMOS REPETIDOS

const nomes = ['Ana', 'Clara', 'Maria' ,'Maria', 'João', 'João', 'João'];

const meuSet = new Set(nomes);

const nomesAtualizados = [...meuSet];

console.log(nomesAtualizados);