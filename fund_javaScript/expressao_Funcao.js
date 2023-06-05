
//DECLARAÇAO DE FUNÇAO
function minhaFuncao(parametro){
    //bloco de codigo
}
minhaFuncao("parametro")

// EXPRESSAO de Função
const soma = function(numero1, numero2) {return numero1 + numero2}
console.log(soma(1,3))


// Com a forma "DECLARAÇAO" é possivel chamar o resultado da função antes da mesma, por exemplo:

console.log(exemplo01())

function exemplo01(){
    return "olá";
}
// porem da forma "EXPRESSAO" nao é possivel chamar a função antes dela, somente dps, por exemplo:

//const soma = function(numero1, numero2) {return numero1 + numero2}
//console.log(soma(1,3))