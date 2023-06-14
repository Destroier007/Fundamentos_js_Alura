/*Agora, validaremos a compra do cliente, e desejamos visualizar se o cliente possui um endereço cadastrado no momento da compra.

Há um método novo que nos retorna um array com todos os nomes das propriedades que foram inicializados. No final do arquivo, criaremos uma variável para salvar as chaves.

Criaremos uma const chavesDoObjeto, depois usaremos uma classe que é um conjunto de várias funções que nos ajudam a lidar com objetos. Vamos chamar o Object.keys() e passaremos como parâmetro o cliente.*/

const cliente = {
    nome: "Amanda Martinez",
    idade: 21,
    email: "amanda.martinez@mulherlinda.com",
    telefone: ["1155555550", "112355648"],
};

cliente.endereco = [
    {
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
    },
];

const chavesDoObjeto = Object.keys(cliente);
console.log(chavesDoObjeto);
if (!chavesDoObjeto.includes("endereco")){
    console.error("Erro. é nescessario ter um endereço cadastrado.");
}
