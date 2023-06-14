/*Vamos supor que temos uma função externa (ou seja, que não é nossa) e precisamos usá-la em casos que desejarmos ligar ou ter algum tipo de contato com o cliente.

Chamaremos essa função assumindo que ela veio de fora. Usaremos o comando function ligaParaCliente(), que receberá os dois números de telefones do cliente.*/

const cliente = {
    nome: "Amanda Martinez",
    idade: 21,
    email: "amanda.martinez@mulherlinda.com",
    telefone: ["1155555550", "112355648"],
};

cliente.endereco = [
    {
        rua: "R. Leonel Azevedo",
        numero: 35,
        apartamento: false,
        complemento: "proximo a praia",
    },
];

function ligaParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}

ligaParaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.endereco[0],    
};
console.log(encomenda);
