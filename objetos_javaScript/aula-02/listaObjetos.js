/* Aprendemos que conseguimos armazenar um objeto dentro de outro em uma propriedade. Mas podemos querer ter uma lista com vários objetos.

Assim como o telefone, em que guardamos mais de um para um mesmo cliente, pode ser que a pessoa tenha mais de um endereço. Desse modo, seria interessante termos uma lista com vários endereços. Porém, esse endereço é um objeto! Como fazemos isso?*/


const cliente = {
    nome: "Amanda Martinez",
    idade: 21,
    email: "amanda.martinez@mulherlinda.com",
    telefone: ["1155555550","112355648"],
};

cliente.enderecos = [
    {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
    },
];
//                   (.Push), ultilizado para adicionar novos dados ao Array
// ultiliza {} dentro do push pois estamos adicionando um obto dedntro 
cliente.enderecos.push({
    rua: "R. Joseph Letter",
    numero: 404,
    apartamento: false,
});

const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);
console.log(listaApenasApartamentos)