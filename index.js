// this is a js file
// Rafael Bauer

// Retorna o nome digitado pelo usuário e a cor favorita digitada pelo usuário,
// sem nenhum tipo de filtração ou correção.

/* var nome = prompt("Qual é o seu nome?");
var corFav = prompt("E qual é a sua cor favorita?");

retorno = ("Certo," + nome + ", muito legal saber que sua cor favorita é" + corFav + " !")

console.log(retorno)
console.log("Certo,", nome, ", muito legal saber que sua cor favorita é", corFav, "!"); */

// Retorna para o usuário a frase digitada pelo mesmo maiúscula, minúscula ou na língua do i
// Utilizando um while, pode-se ser filtrada e corrigida a opção do usuário quanto ao tipo de retorno textual ele quer

/* var userFrase = prompt("Digite aqui uma frase aleatória");

fraseMaiuscula = userFrase.toUpperCase();
fraseMinuscula = userFrase.toLowerCase();
fraseI = userFrase.replaceAll("o", "i");



while (option !== "1" && option !== "2" && option !== "3") {
    var option = prompt("Como você prefere o seu texto: 1 - Maiúsculo 2 - Minúsculo 3 - Na língua do I")
    if (option === "1") {
        console.log(fraseMaiuscula);
    }
    else if (option === "2") {
        console.log(fraseMinuscula);
    }
    else if (option === "3") {
        console.log(fraseI);
    }
    else {
        console.log("Opção inválida, tente novamente!");
    }
} */

// Imprime o item na array 2 da lista de compras

/* const listaDeCompras = ["Abacate", "Banana", "Tomate"]
const segundoItem = listaDeCompras[2]

console.log(segundoItem) */

// Uma array com 5 raças de cachorro (índice 0 - 4)
// O usuário escolhe um número, retorna uma raça de cachorro

/* var racasCachorro = ["Bulldog", "Pitbull", "Pinscher", "Husky Siberiano", "Golden Retriever"];

var option = prompt("digite um número de 0 a 4");

console.log(racasCachorro[option]); */

// Lenght

/* const pokemon = ["bullbasauro", "squirtle", "charmander"];
console.log(pokemon.length); // .lenght = quanto tem, nesse caso, a quantia de itens na array */

// Splice

/* var array = ["a", "b", "c", "d", "e", "f", "g", "h"]
//           [0    1    2    3    4    5    6    7 ]

array.splice(3, 1) // .splice(aPartirDe, quantiaDeRemoções)
console.log(array)
 */

// Sequência de utilizações dos modificadores na array

/* var array = ["1", "2", "3", "4", "5", "6"];

console.log(array.length);
console.log("adicionando o número 7...");
array.push("7");
console.log(array);
console.log("removendo o número 4 e 5...")
array.splice(4, 2);
console.log(array);
console.log(array.length); */

// Forma demorada de calcular a área de um retângulo

/* const altura = 2
const largura = 3
const area = altura * largura
console.log(area); */

// Forma mais rápida e usando uma function para fazer vários cálculos de área

/* function calcularArea(altura, largura) {
    const area = altura * largura;
    console.log(area);
}

calcularArea(2, 3.5); */

// Função para imprimir "Olá Mundo"

/* function imprimirOlaMundo() {
    console.log("Olá Mundo")
}

imprimirOlaMundo() */

// Função para facilitar a impressão de um nome no console

/*  function receberNome(nome) {
    console.log(`Olá ${nome}`)
}

receberNome("Rafael")  */