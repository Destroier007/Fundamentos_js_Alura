function verificarNumero(numero){
    if (numero > 20) {
        return 'Numero maior que 20';
    } else {
        return 'numero nao é maior que 20';
    }
}
// console.log(verificarNumero(19))
   
    

function ligarAquario(horario){
    if (horario >= 11) {
        return 'Ligando luzes os aquarios'
    } else{
        return 'ainda nao está na hora de ligar as luzes'
    }
}
// console.log(ligarAquario(11))

const comparacaoNumero = 5;
if (comparacaoNumero > 10 || comparacaoNumero == ""){
    console.log('numero nao valido')
} else{
    console.log("numero validado")
}

const numero = 37;
if (numero >=0 && numero <=10){
    console.log('Numero entre zero e dez');
} else if (numero > 10 && numero < 20){
    console.log('numero entre onze e vinte');
} else if (numero > 20 && numero < 30){
    console.log('numero entre vinte e um e trinta');
} else if(numero > 30 && numero < 40){
    console.log('Numero entre trinta e um e quarenta');
} else {
    console.log('outro numero');
}

const num1 = 5;
const num2 = 6;
const resultado = num1 + num2;

function soma(num1, num2){
    return num1 + num2;
}
console.log(soma(5, 6))
