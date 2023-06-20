
// requite serve para chamar outro arquivo
const dados = require("./cliente.json");
console.log(dados);
console.log(typeof dados);
//                          transformou o objeto em String
const clienteEmString = JSON.stringify(dados);
console.log(clienteEmString);

//Para tranformar de String para Objeto novamente

const objetoCliente = JSON.parse(clienteEmString);
console.log(objetoCliente);