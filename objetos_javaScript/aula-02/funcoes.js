/*Entendemos que além de dados primitivos (boolean e string, por exemplo) podemos armazenar listas e outros objetos dentro do nosso objeto.

Neste vídeo, vamos aprender que podemos guardar funções como propriedade de um objeto. Isso nos possibilita alterar o comportamento de um objeto e a deixar descrito junto com ele, como uma propriedade.

Vamos supor que agora implementaremos uma parte do sistema de compra da loja. Deixaremos que o cliente efetue um pagamento.*/

const cliente = {
    nome: "Amanda Martinez",
    idade: 21,
    email: "amanda.martinez@mulherlinda.com",
    telefone: ["1155555550","112355648"],
    saldo: 200,
    efetuaPagamento: function(valor) {
        //Para acessarmos o saldo do objeto, usaremos a palavra reservada (this) ("isso"). Esta palavra representa a instância do objeto atual em que estamos trabalhando, sendo o cliente João com idade de 24 anos. Para acessar o saldo desse cliente, usamos o this.saldo: 
        if (valor > this.saldo) {
            console.log("saldo insuficiente");
        } else {
            this.saldo -= valor;
            console.log(`pagamento realizado. Novo saldo: ${this.saldo}`);
        }
    },
};

cliente.efetuaPagamento(65);