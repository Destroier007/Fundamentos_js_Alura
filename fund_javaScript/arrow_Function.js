function apresentar(nome){
    return `meu nome é ${nome}`;
}

const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 * num2;

// Arrow function com mais de 1 linha:

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10){
        return "Somente numeros de 1 a 9"
    }   else{
        return num1 + num2;
    }
}
//Explicando a const "somaNumerosPequenos"
// Se num1 for maior q 10 OU num2 for maior que 10 retornar "somente numeros de 1 a 9" se nao, retornar valor da soma
