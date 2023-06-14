/*No vídeo anterior, vimos que conseguimos salvar um array dentro de um objeto. Nesta aula, vamos entender casos em que desejamos salvar um objeto dentro de outro objeto.
A palavra "aninhados" é justamente estar dentro do outro, podendo ser um código ou bloco aninhado.*/

const cliente = {
    nome: "Amanda Martinez",
    idade: 21,
    email: "amanda.martinez@mulherlinda.com",
    telefone: ["1155555550","112355648"],
};

cliente.endereco = {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
};

console.log(cliente.endereco);