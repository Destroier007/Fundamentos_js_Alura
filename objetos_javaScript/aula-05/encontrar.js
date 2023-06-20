/*Dentro desse arquivo, devemos ler aquele array com objetos que correspondem aos clientes.

Para isso, chamamos uma variável const clientes recebendo a função require(). Como parâmetro da função usaremos o caminho do arquivo local JSON de clientes.*/

const clientes = require("./clientes.json");
//função find, Vamos dar um item da lista para ele e, se aquela chamada sair verdadeira, o método nos retorna aquele item.
function encontrar(lista, chave, valor){
    return lista.find((item) => item[chave].includes(valor));
} 

const encontrado = encontrar(clientes, "nome", "Juliet");
const encontrado2 = encontrar(clientes, "telefone", "24992442110");
console.log(encontrado2);