const listaLivros = require('./arrays');
const trocaLugar = require('./encontraMenores');

function quiickSort(array, esquerda, direita) {
    if (array.length > 1) {
        let indiceAtual = particiona(array, esquerda, direita);
        if (esquerda < indiceAtual - 1) {
            quiickSort(array, esquerda, indiceAtual - 1);
        }
        if (indiceAtual < direita) {
            quiickSort(array, indiceAtual, direita)
        }
    }
    return array;
}

function particiona(array, esquerda, direita) {
    let pivo = array[Math.floor((esquerda + direita) / 2)]
    let atualEsquerda = esquerda; //0
    let atualDireita = direita; //10

    while (atualEsquerda <= atualDireita) {
        while (array[atualEsquerda].preco < pivo.preco) {
            atualEsquerda++
        }
        while (array[atualDireita].preco > pivo.preco) {
            atualDireita--
        }
        if (atualEsquerda <= atualDireita) {
            trocaLugar(array, atualEsquerda, atualDireita);
            atualEsquerda++;
            atualDireita--;
        }
    }
    return atualEsquerda;
}

console.log(quiickSort(listaLivros, 0, listaLivros.length - 1))
