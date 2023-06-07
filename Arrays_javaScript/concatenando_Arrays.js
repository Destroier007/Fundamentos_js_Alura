/* haverá uma palestra sobre padroes de projetos para as alunas das salas de Javascript e Python.
Junte amas as salas em uma unica lista que exiba todas as alunas.*/

const sala_javaScript = ["Evaldo", "Camis", "Mari"];
const sala_python = ["ju", "Leo", "Raquel"];

const salasUnificadas = sala_javaScript.concat(sala_python);
console.log(salasUnificadas)

// "concat" vai concatenar as listas entre elas, é nescessario criar uma nova função, pois o "concat" vai retornar um novo array