//No exemplo a baixo nao funiona.
//let x = "";
//console.log(x)
//x = "oi";

// DECLARAÇÃO DE FUNÇAO 

// 1) declara a função
                        //string
function imprimeTexto(texto) {
    console.log(texto)
}

// 2) executa a função (uma ou + vezes)

imprimeTexto(soma());
imprimeTexto("outro texto");

// ----------------três formas de escrever funçoes-----------------

function soma(){
    //Outros codigos/ consoles.logs/etc...
    //(return precisa ser a ultima linha da função)
    return 2+2;
}

console.log(soma())

