/* No arquivo criado, vamos imaginar um trecho simplificado de uma aplicação que temos uma loja, em que temos clientes. Vamos modelar, isto é, traduzir algumas informações físicas ou características em um objeto. Logo, vamos modelar um cliente. */

const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "12635468",
    email: "andre@dominio.com",
};
// ultilizando o (.) após o nome da variavel é possivel acessar qualquer uma das chaves dessa const
console.log(`o nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos.`);
//Podemos tbm chamar metodos desse valor que recebemos
console.log(`os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`);
//substring(0, 3) pega somente os 3 primeiros digitos da String CPF