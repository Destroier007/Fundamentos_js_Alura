//VAR - Variaveis que o javaScript vai carregar priemiro, logo nao precisam estar em ordem.

var altura = 5;
var comprimento = 5;

area = altura*comprimento;
console.log(area)
var area;

// LET - Permite trocar os valore, mas deve ser declarada antes do processamento

let forma1 = 'retangulo'
let altura1 = 5;
let comprimento1 = 7;
let area1;

if (forma1 === 'retangulo') {
    area1 = altura1*comprimento1;
} else{
    area = (altura1 * comprimento1) / 2;
}

console.log(area1)

//const - nao e possivel alterar o valor dela dps de definido, no exemplo a baixo precisamos usar a variavel LET, por se usar 'const' dara erro.

const forma2 = 'quadrado';
const altura2 = 5;
const comprimento2 = 7;
let area2; 

if (forma2 === 'quadrado') {
    area2 = altura2*comprimento2;
} else {
    area2 = (altura2*comprimento2) / 2;
}
console.log(area2)
//-------------------------------------------------------------------------------------------
//Variaveis e a resposta de tudo (Desafio)

var respostaDeTudo = 42;
let idade = 29;
const pi = 3.14;

{
    var respostaDeTudo = 3.14
    let idade = 42
    const pi = 29
    console.log(respostaDeTudo, idade, pi)
}

console.log(respostaDeTudo, idade, pi)