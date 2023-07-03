/*const listaLivros = require('./arrays');


function encontraMenores(pivo, array3) {
    let menores = 0;
    for (let atual = 0; atual < array3.length; atual++) {
        let produtoAtual = array3[atual]
        if (produtoAtual.preco < pivo.preco) {
            menores++
        }
    }

    return menores
}

trocaLugar(listaLivros, listaLivros.indexOf(pivo), menores)
return array3

function trocaLugar(array3, de, para) {
    const elem1 = array3[de];
    const elem2 = array3[para];

    array3[para] = elem1
    array3[de] = elem2
}
function divideNoPivo(array3) {
    let pivo = array3[Math.floor(array3.length / 2)];
    encontraMenores(pivo, array3);
    let valoresMenores = 0;

    for (let analisando = 0; analisando < array3.length; analisando++) {
        let atual = array3[analisando];
        if (atual.preco <= pivo.preco && atual !== pivo) {
            trocaLugar(array3, analisando, valoresMenores)
            valoresMenores
        }
    }

    return array3;
}
console.log(encontraMenores(listaLivros[2], listaLivros));
console.logI(divideNoPivo(listaLivros));

module.exports = trocaLugar;
*/

const listaLivros = require('./arrays')

function encontraMenores(pivo, array = []){
    let menores = 0;

for(let atual = 0; atual < array.length; atual++){
    let produtoAtual = array[atual]
    if(produtoAtual.preco < pivo.preco){
        menores++
    }
}
    trocaLugar(array, array.indexOf(pivo), menores)
    return array
}

function trocaLugar(array, de, para){
    const elem1 = array[de]
    const elem2 = array[para]

    array[para] = elem1
    array[de] = elem2
}

console.log(encontraMenores(listaLivros[2], listaLivros));
module.exports = trocaLugar;