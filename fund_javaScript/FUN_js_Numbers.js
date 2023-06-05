// Fundamentos do java Script
// Funda_javaScript.js

const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

const operacao_Soma = primeiroNumero + segundoNumero;

console.log(operacao_Soma)

//Ponto Flutuante

const numeroPontoFlutuante = 3.3;
const pontoFlutuanteSemZero = .5; // é a mesma coisa de 0.5;

const novaOperacao = primeiroNumero / numeroPontoFlutuante;

console.log(novaOperacao)

//NaN -> Not a Number (Nao é um numero)

const nickolas = "Nickolas";

const SomaNaN = nickolas / novaOperacao;

console.log(SomaNaN)

// Resultado Infinito
var a = 10;
var b = 0;
console.log(a/b)

// Exercicio basico de funçoes matematicas 

const x = "20";
const y = "300";

const primieroValor = x;
const segundoValor = y;

const operacaoMatematica = (primieroValor*segundoValor)/5;
console.log(operacaoMatematica)


// Tentativa de fazer uma regra de 3 simples

//Dado01 --> Dado01B
//Dado02 --> x

const Dado01 = "16";
const Dado01B = "56";
const Dado02 = "54";

const Dado02B_Resultado = (Dado02*Dado01B)/Dado01;
console.log(Dado02B_Resultado)
console.log(Dado02B_Resultado >= operacaoMatematica);
console.time(Dado02B_Resultado)
console.timeEnd(Dado02B_Resultado)
console.trace(Dado02B_Resultado)