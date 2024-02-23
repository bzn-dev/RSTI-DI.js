// this is a js file
// Rafael Bauer

//*********************************************************************************
//  Retorna o nome digitado pelo usuário e a cor favorita digitada pelo usuário,  *
//  sem nenhum tipo de filtração ou correção.                                     *
//*********************************************************************************

/* var nome = prompt("Qual é o seu nome?");
var corFav = prompt("E qual é a sua cor favorita?");

retorno = ("Certo," + nome + ", muito legal saber que sua cor favorita é" + corFav + " !")

console.log(retorno)
console.log("Certo,", nome, ", muito legal saber que sua cor favorita é", corFav, "!"); */

//************************************************************************************************************************
//  Retorna para o usuário a frase digitada pelo mesmo maiúscula, minúscula ou na língua do i                            *
//  Utilizando um while, pode-se ser filtrada e corrigida a opção do usuário quanto ao tipo de retorno textual ele quer  *
//************************************************************************************************************************

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

//**************************************************
//  Imprime o item na array 2 da lista de compras  *
//**************************************************

/* const listaDeCompras = ["Abacate", "Banana", "Tomate"]
const segundoItem = listaDeCompras[2]

console.log(segundoItem) */

//**************************************************************
//  Uma array com 5 raças de cachorro (índice 0 - 4)           *
//  O usuário escolhe um número, retorna uma raça de cachorro  *
//**************************************************************

/* var racasCachorro = ["Bulldog", "Pitbull", "Pinscher", "Husky Siberiano", "Golden Retriever"];

var option = prompt("digite um número de 0 a 4");

console.log(racasCachorro[option]); */

//****************************************************
//  Lenght - "Mutador" para ver tamanho da variável  *
//****************************************************

/* const pokemon = ["bullbasauro", "squirtle", "charmander"];
console.log(pokemon.length); // .lenght = quanto tem, nesse caso, a quantia de itens na array */

//**********************************************************************************
//  Splice - Mutador removedor de índices (talvez possa ser usado para outro fim)  *
//**********************************************************************************

/* var array = ["a", "b", "c", "d", "e", "f", "g", "h"]
//           [0    1    2    3    4    5    6    7 ]

array.splice(3, 1) // .splice(aPartirDe, quantiaDeRemoções)
console.log(array)
 */

//********************************************************
//  Sequência de utilizações dos modificadores na array  *
//********************************************************

/* var array = ["1", "2", "3", "4", "5", "6"];

console.log(array.length);
console.log("adicionando o número 7...");
array.push("7");
console.log(array);
console.log("removendo o número 4 e 5...")
array.splice(4, 2);
console.log(array);
console.log(array.length); */

//******************************************************
//  Forma demorada de calcular a área de um retângulo  *
//******************************************************
/* const altura = 2
const largura = 3
const area = altura * largura
console.log(area); */

//*******************************************************************************
//  Forma mais rápida e usando uma function para fazer vários cálculos de área  *
//*******************************************************************************

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

//************************************************************
//  Função para facilitar a impressão de um nome no console  *
//************************************************************

/*  function receberNome(nome) {
    console.log(`Olá ${nome}`)
}

receberNome("Rafael")  */

//

/* const a = 1

function imprimeVariavel() {
    const b = 2
    console.log('Variável A', a)
    console.log('Variável B', b)
}

imprimeVariavel()

console.log('Variável A', a)
console.log('Variável B', b) */

//

/* function calcularArea(altura, largura) {
    const area = altura * largura;
    return area;
}

const areaCalculada = calcularArea(2, 3);

console.log(calcularArea(2, 3));
console.log(areaCalculada);
 */

//

/* function calcularSoma(numa, numb) {
    return numa + numb;
}

console.log(calcularSoma(1, 2)); */

//

/* function receberArray(arrayDeNumeros = []) {
    return [arrayDeNumeros.length, arrayDeNumeros[0]];
}

console.log(receberArray([1, 2, 3, 4, 5, 6]));
 */

/* function soma(a, b) {
    return a + b;
}

console.log(soma(1, 2));*/

//

/* function somaDois(i, ii) {
    console.log(i + ii);
}

console.log(somaDois(1, 2));*/

//***********************
//  Expressão de Array  *
//***********************

/* const receberArray = function (arrayDeNumeros = []) {
    return [arrayDeNumeros.length, arrayDeNumeros[0]];
};

console.log(receberArray([1, 2, 3, 4, 5, 6, 7])); */


//*******************
//  Array function  *
//*******************

/* const receberArrayII = (arrayDeNumerosII = []) => {
    return [arrayDeNumerosII.length, arrayDeNumerosII[0]];
};

console.log(receberArrayII([1, 2, 3, 4, 5, 6, 7])); */

//

/* const professor = {
    nome: 'Bzn',
    idade: 20,
    tarefas: ['Dar aula', 'Responder dúvidas'],
    contarPiada: function () {
        console.log('É pavê ou pa comê?');
    }
}

console.log(professor.idade) */

/* const teacher = {
    nome: prompt('Digite o seu nome:'),
    idade: prompt('Digite sua idade:'),
    email: prompt('Digite seu email:'),
}

console.log(teacher.nome);
teacher.nome = 'Rafael Bauer';
console.log(teacher.nome);
console.log(teacher.idade);
console.log(teacher.email); */

//######################################
//  OBJETO (IMPORTANTES ENSINAMENTOS)  #
//######################################

/* aProcuraDaFelicidade = {
    nomeDoFilme: 'À procura da felicidade',
    direcao: 'Gabriele Muccino',
    roteiro: 'Steve Conrad',
    elenco: ['Will Smith', 'Thandiwe Newton', 'Jaden Smith'],
    lancamento: '2 de Fevereiro de 2007',
    assistiu: true
}

aProcuraDaFelicidade.personagens = ['Chris Gardner', 'Christopher Jr.'] // Forma de adicionar algo ao objeto

console.log(aProcuraDaFelicidade.personagens[0], 'e', aProcuraDaFelicidade.personagens[1])

aProcuraDaFelicidade.personagens[0] = 'Xuxa' // Forma de modificar algo no objeto

console.log(aProcuraDaFelicidade.personagens[0], 'e', aProcuraDaFelicidade.personagens[1]) */

/* console.log(aProcuraDaFelicidade.nomeDoFilme);
console.log(aProcuraDaFelicidade.direcao);
console.log(aProcuraDaFelicidade.roteiro);
console.log(aProcuraDaFelicidade.elenco[0], ',', aProcuraDaFelicidade.elenco[1], ',', aProcuraDaFelicidade.elenco[2]);
console.log(aProcuraDaFelicidade['lancamento']);
if (aProcuraDaFelicidade.assistiu === true) {
    console.log('Assisti');
}
else {
    console.log('Não assisti');
} */

//#####################################################
//  Objeto simples e console log fraseando o objeto   #
//#####################################################

/* pessoa = {
    nome: 'Rafael',
    idade: 20,
    generoMusical: 'Som da última trombeta'
}

console.log('O nome da pessoa é:', pessoa.nome, ', ela tem', pessoa.idade, 'anos e gosta muito de', pessoa.generoMusical); */

// Um objeto dentro de outro objeto

/* const donoDoPet = {
    nome: 'Dono do Pet',
    pet: {
        nomeDoPet: "Cosmo",
        raca: "Vira-Lata",
        idade: 1
    }
}

console.log(donoDoPet.pet.nomeDoPet) */

//*******************************************
//  Acessando um array dentro de um objeto  *
//*******************************************

/* const curso = {
    nome: 'Noturn Frontend',
    linguagens: ['JS', 'CSS', 'HTML']
}

console.log(curso.linguagens[0]) */

//*********************
//  Array de objetos  *
//*********************

/* const professores = [
    { nome: 'Professor1', modulo: 1 },
    { nome: 'Professor2', modulo: 2 },
    { nome: 'Professor2', modulo: 3 }
]

console.log(professores[1].nome)

professores.numeroEstudantes = 50

console.log(professores)

console.log(typeof (professores.numeroEstudantes)) */

//###################################################
//  Espalhamento ou Spread  / Utilizando um objeto  #
//###################################################

/* const usuario = {
    nome: 'Prof',
    idade: 25,
    email: 'prof@senacrs.com.br',
    cidade: 'São Paulo'
} */

/* console.log(usuario)

const novoUsuario = {
    ...usuario,
    nome: 'João',
    idade: 28
}

console.log(novoUsuario) */

//#############################
//  Spread utilizando arrays  #
//#############################

/* const listaDeNomes = ['Nome1', 'Nome2', 'Nome3']

const copiaNomes = [...listaDeNomes]

console.log(copiaNomes) */

//################
//  Exercício 4  #
//################

pessoa = {
    nome: 'Rafael',
    idade: 20,
    generoMusical: 'Som da última trombeta'
}

var a = {
    a: 'A',
    b: 'B'
}

function exercicio4(objeto1) {
    objeto2 = {
        ...objeto1,
        listaComidas: {

        }
    }

    console.log(objeto2)
}

exercicio4(a)