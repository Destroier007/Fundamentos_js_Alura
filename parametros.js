// Parametros de funçao
//              1° argumento, 2° argumento
//function soma(numero1, numero2){
//    return numero1 + numero2;
//}

//console.log(soma(2,3))
//console.log(soma(300,-150))
//console.log(soma(6000,-5000))

// ordem dos parametros

function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

//console.log(nomeIdade(50, "nick"))

function soma(numero1, numero2){
    return numero1 + numero2;
}

function multiplica(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}

console.log(multiplica(soma(4,5),soma(3,9)))