/*Calcule a média entre as seguintes notas, usando o for:
10
6.5
8
7.5
*/
// (i) => indicie

const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0
for (let i = 0; i < notas.length; i ++) {
    somaDasNotas += notas[i];
}
const media = somaDasNotas / notas.length;
console.log(`A media das notas é ${media}`);

// TREINO 

const numeros = [125,181,194,60,110,62,	39,	88,	52,	58,	68,	180,55,	12,	61,	95,	87,	158,8,33,135,149,1,200,35,97,31,82,	42,	172,49,	153,187,108,162,141,191,164,90,	80,	81,	113,29,	137,199,169,174,27,	83,	192,];
let somaNumeros = 0;
for (let i1 = 0;i1 < numeros.length; i1++){
    somaNumeros += numeros[i1];
}
const mediaNumeros = somaNumeros / numeros.length;
console.log(mediaNumeros);

// TREINO 2

const numeros2 = [125,181,194,60,110,62,39,	88,	52,	58,	68,	180,55,	12,	61,	95,	87,	158,8,33,135,149,1,200,35,97,31,82,	42,	172,49,	153,187,108,162,141,191,164,90,	80,	81,	113,29,	137,199,169,174,27,	83,	192, 658, 215, 256, 458, 256, 23, 65, 98, 145, 12, 78, 35, 69, 58, 36, 25, 14 ,7 ,8 ,6 ,5 , 158, 365, 3586, 458, 25, 20 ,123, 569, 458, 369, 369, 256, 369, 369, 254 ,3,3,3,3,3,3,3,3,3,3,3,25, 256, 987 ,98, 14, 24, 125, 365, 256, 1245, 125, 56985, 89652, 2,22,2,45,65,75,27,8,6718,7186,6725,267,786,7165,4526,786,7186,71564,675,786,1756,456,786,7861,7156427,78265,7826,6715,1625,57,175,12,71856,71,1,617,8];

let somaNumeros2 = 0;
for (let i2 = 0; i2 < numeros2.length; i2++){
    somaNumeros2 += numeros2[i2];
}
const mediaNumeros2 = somaNumeros2 / numeros2.length;
console.log(mediaNumeros2);

// For com mais de 1 matriz

const notas1 = [10 , 6.5, 8 ,7.5]
const notas2 = [9  , 6  , 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1,notas2,notas3]

let media1 = 0;

for (let i3 = 0; i3 < notasGerais.length; i3++) {
    for (let j = 0; j < notasGerais[i3].length; j++) {
      media1 += notasGerais[i3][j]/notasGerais[i3].length;
    }
  }
  media1 = media1/notasGerais.length;

  console.log(media1);