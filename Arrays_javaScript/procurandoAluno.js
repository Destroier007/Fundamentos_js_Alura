/* Crie uma função que recebe como argumento o nome de um aluno
verifique se o aluno está presente na lista e retorne a média final que se ecnontra no mesmo indice.
Caso o nome do aluno nao esteja na lista, retorne uma mensagem indicando que o aluno nao foi encontrado.
*/

const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno){
    if(listaDeAlunosEMedias[0].includes(aluno)){
        //const alunos = listaDeAlunosEMedias[0];
        //const medias = listaDeAlunosEMedias[1]            Tabem podemos ultilizar da seguinte forma
        const [alunos, medias] = listaDeAlunosEMedias;

        const indice = alunos.indexOf(aluno);

        const mediaDoAluno = medias[indice];
        console.log(`${aluno} tem a media ${mediaDoAluno}`);
    } else{
        console.log("Aluno nao encontrado!");
    }
}

exibeNomeENota("Juliana");


// (TREINO) DESAFIO PROPRIO, PLANETAS DO SISTEMA SOLAR E SUAS POSIÇOES


const planeta = ["Mercúrio", "Vênus", "Terra", "Marte", "Júpiter", "Saturno", "Urano", "Netuno"];
const posicao = ["primeiro", "segundo", "terceiro", "quarto", "quinto", "sexto", "sétimo", "oitavo"];

const planetaEPosicoes = [planeta, posicao];

function qualAPosicaoDoPlaneta(nomePlaneta){
    if(planetaEPosicoes[0].includes(nomePlaneta)){
        const planeta = planetaEPosicoes[0];
        const posicao = planetaEPosicoes[1];

        const indiceDoPlaneta = planeta.indexOf(nomePlaneta);

        const indiceDaPosicao = posicao[indiceDoPlaneta];
        console.log(`O Planeta ${nomePlaneta} é o ${indiceDaPosicao} dos 8 planetas do sistema solar.`);
    }else {console.log(`Dado informado nao é referente a um planeta!`)}
}

qualAPosicaoDoPlaneta("Netuno");

// (TREINO)

const carros = ["Fiat Argo", "Fiat Cronos", "Volkswagen Polo", "Chevrolet Onix", "Toyota Yaris", "Hyundai HB20", "Chevrolet Onix", "Fiat Pulse", "Toyota Yaris", "Peugeot 208", "Chevrolet Spin", "Renault Sandero", "Nissan Versa", "Hyundai HB20S", "Citroën C4", "Renault Duster", "Nissan Kicks", "Hyundai Creta", "Volkswagen Virtus", "Honda City"];
const cavalos = ["109 cv", "109 cv", "116 cv", "116 cv", "110 cv", "120 cv", "116 cv", "109 cv", "110 cv", "118 cv", "111 cv", "118 cv", "114 cv", "120 cv", "122 cv", "120 cv", "114 cv", "130 cv", "128 cv", "126 cv"];

const CarrosECavalos = [carros, cavalos];

function quantosCavalosTem(nomeDoCarro){
    if (CarrosECavalos[0].includes(nomeDoCarro)){
        const carros = CarrosECavalos[0];
        const cavalos = CarrosECavalos[1];
        
        const indiceCarro = carros.indexOf(nomeDoCarro);

        const indiceCavalos = cavalos[indiceCarro];
        console.log(`O ${nomeDoCarro} possui ${indiceCavalos} de potencia.`);
    } else {console.log(`O carro nao foi encontrado no sistema.`)}
}

quantosCavalosTem("Nissan Kicks");




