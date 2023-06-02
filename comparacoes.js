// (=) Atribuir valor// (==) comparaçao pelo valor somente // (===) comparaçao pelo tipo e valor
// = só compara o valor
// === compara o valor e o tipo de dado

const numero = 5;
const texto = "5";

// == (comparaçao implicita)
console.log(numero==texto)

// === (comparaçao explicita)
console.log(numero===texto)

//typeof
console.log(typeof numero )
console.log(typeof texto )

// conversao explicita
Number()
String()

// ||: Operador “ou”, retorna true caso uma condição seja válida;

// &&: Operador “e”, retorna true somente se todas as condições forem válidas;

//!= e !==: Operadores “não igual” e “estritamente não igual”, utilizados para comparação, da mesma forma que == e === retornam true ou false.

const a = [];
if (a == 0){
    console.log('verdade')
}    else{
        console.log('falso')
    }

