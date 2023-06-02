const idadeMinima = 18;
const idadeCliente = 19;

const nome = "Amanda";
const idade = 21;
const bebidaMaior = "wisk";
const bebidaMenor = "suco";

if (idadeCliente >= idadeMinima){
    console.log("aceita cerveja?")
} else {
    console.log("aceita suco?")
}

// operador ternario
            //condição                      //true              //false
console.log(idadeCliente >= idadeMinima ? "aceita cerveja ?" : "aceita suco?") 


// Exercicio -----

const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior:bebidaMenor}`
console.log(pedido)

const nomeDoCarro = "toyota Supra"
const km = 200
const kmReaisDoCarro = 60.000
const novo = "novo"
const velho = "velho"

const orçamento = `Estou com meu ${nomeDoCarro} e preciso de um orçamento, ele possue apenas ${km} quilometos rodados, quero saber se ele é novo ou velho. Resposta do mecanico: Seu ${nomeDoCarro} é considerado um carro ${kmReaisDoCarro <= 50.000 ? novo:velho} pois o painel marca ${kmReaisDoCarro} mil quilometros rodados`
console.log(orçamento)