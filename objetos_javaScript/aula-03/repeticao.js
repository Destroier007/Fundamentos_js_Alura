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
//  a palavra reservada (in), ela faz com que seja capturado cada uma das chaves no objeto cliente
for (let chave in cliente){
    let tipo = typeof cliente[chave];
    if (tipo !== 'object' && tipo !== "function"){
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
}