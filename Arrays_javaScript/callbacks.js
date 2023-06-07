// TRES manenira de fazer funçao callbacks

const nomes = ["evaldo", "Mari", "Camis"];

nomes.forEach(function (nome){
    console.log(nome);
});
//------------------------------------------
nomes.forEach((nome) =>{
    console.log(nome);
});
//--------------------------------------------
function imprimeNome(nome){
    console.log.apply(nome);
}
nomes.forEach(imprimeNome);