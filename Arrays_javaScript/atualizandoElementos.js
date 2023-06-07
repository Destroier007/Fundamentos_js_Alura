/* Crie uma lista de chamada com os seguintes alunos:
'Joao', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo', porém, a 'Ana' e o 'Caio' mudaram de escola e o Rodrigo entrou nesta sala.
Atualize a lista.*/

const nomes = ['Joao', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];
// (splice), primeiro vai "cortar" dps imendar, 1 , 2 foram os indicies q ele cortou, e o 3° elemento ele emendou
nomes.splice(1, 2, "Rodrigo");
console.log(nomes)

