//String = Textos 


const texto1 = "Olá mundo";
const texto2 = 'Olá Mundo';
const senha = "SenhaSegura123456!"
const StringDeNumeros = "34567";

const citacao = "Meu nome é";
const meuNome =" Nickolas";

//Concatenação (juntar textos)

console.log(citacao+meuNome)

// template string OU template literal

const cifrao = '\u0024'
console.log(cifrao)

// -----------------------------SEM Templates Strings-----------------------------------
const planeta = "Jupter";
const idade = 4.603*Math.pow(10, 9);
const localDeNascimento = "Sistema Solar"

const apresetacao = "O planeta " + planeta + " possui mais de "+ idade + " anos de vida, e surgiu em nossa casa, o " + localDeNascimento
console.log(apresetacao)

// -----------------------------COM Templates Strings-----------------------------------
// ultilizar (craze)[`eu sou um texto`]

const nome = "Nickolas";
const idade1 = 24;
const cidade = "Praia Grande";

const apresetacao1 = `meu nome é ${nome}, minha idade é ${idade1} e nasci na cidade de ${cidade}`;
console.log(apresetacao1)