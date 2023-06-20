/*Vamos criar uma função para tentar resolver nosso problema, filtrando somente as pessoas que marcaram que vivem em apartamento, mas não forneceram um complemento.

Para isso, primeiro criamos uma variável const clientes e recebemos a função require() para o arquivo local de clientes.*/

const clientes = require("./clientes.json");

function filtrarApartamentoSemComplemento(clientes){
    return clientes.filter((cliente) => {
        return (cliente.endereco.apartamento && 
            !cliente.endereco.hasOwnProperty("complementp"));
    });
}

const filtrados = filtrarApartamentoSemComplemento(clientes);
console.log(filtrados);