// tipo de dado
// Booleanos
// conversao implicita 
// permite converter um dado em outro EX: converter String em numero.
const numero = 10;
const numeroString = "10";

console.log(numero == numeroString)
console.log(numero+numeroString)

// Number()
// String()
console.log(numero+Number(numeroString)) //No exemplo esta sendo convertido String em number

// conversao explicita

//-----------------------------------------------------------------------------------------------
// Alguns exemplos de conversao de numeros e Booleanos atraves de String();
let telefone = 988736054;
console.log("O telefone e " + String(telefone)); //Teremos a conversao do numero 988736054 para uma string "988736054" e assim poderemos fazer a concatenaçao entre as strings
// outra opçao seria usar o .toString();o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.
console.log("O telefone e " + telefone.toString());

let usuarioConectado = false;
console.log(String(usuarioConectado)); // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.
usuarioConectado = true;
console.log(String(usuarioConectado)); // agora teremos uma string “true”.

// Number()
//Vamos fazer alguns exemplos de conversão de textos e booleanos através de Number():
// Vamos calcular a área de um retângulo
let largura = "10";
let altura = "5";
console.log(Number(largura) * Number(altura)); // teremos a conversão de String para números, possibilitando a realização da multiplicação

//Podemos usar o operador de soma + para fazer a conversão de textos para números, colocando-os antes das variáveis:
let largura1 = "10";
let altura1 = "5";
console.log( + largura1 * + altura1); // teremos a conversão de String para números realizado usando o + antes das variáveis

