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

//###################################################################
//  Último exercício sobre  objetos                                 #
//      faz o spread de um objeto externo  para dentro da function  #
//          imprime uma frase organizada com os itens dos objetos   #
//###################################################################

/* pessoa = {
    nome: 'Rafael',
    idade: 20,
    sexo: 'M',
    segue: 'Jesus',
};

function receberObjeto(objeto) {
    puxar = {
        ...objeto,
    };

    comida = {
        comidasFav: [
            'Escondidinho',
            ' Strogonoff',
            ' Lasanha',
            ' Arroz com Molho',
            ' Remi',
            ' Massa c/ Batata e Molho',
        ],
    };

    melhorAmiga = {
        nomeMA: 'Êmily',
        idadeMA: 16,
    };

    console.log(
        `O nome da pessoa é: ${objeto.nome} e suas comidas favoritas são: ${comida.comidasFav}. Sua melhor amiga se chama ${melhorAmiga.nomeMA} e tem ${melhorAmiga.idadeMA} anos.`
    );
}

receberObjeto(pessoa); */

//################################
//  Exerício 1  -  Condicionais  #
//################################

/* numberOne = 4;
numberTwo = 3;

if (numberOne === numberTwo) {
    console.log(`Os números ${numberOne} e ${numberTwo} são iguais!`);
} else {
    console.log(`Os números ${numberOne} e ${numberTwo} são diferentes!`);
} */

/* function comparacao(num1 = prompt('Digite o número 1'), num2 = prompt('Digite o número 2')) {
    if (num1 === num2) {
        return `Os números ${num1} e ${num2} são iguais.`;
    } else {
        return `Os números ${num1} e ${num2} são diferentes.`;
    }
}

console.log(comparacao()); */

//##################################
//  Exerício 1.1  -  Condicionais  #
//##################################

/* function cnh(nome = prompt('Digite o seu nome'), idade = Number(prompt('Digite a sua idade'))) {
    if (idade >= 18) {
        return `Parabéns, ${nome}! Você pode dirigir`;
    } else {
        return `Foi mal, ${nome}, você ainda não pode dirigir!`;
    }
}

console.log(cnh()); */

//##################################
//  Exerício 3  -  Condicionais    #
//##################################

function comparacao2(num1_1 = prompt('Digite o número 1'), num2_2 = prompt('Digite o número 2')) {
    if (num1_1 > num2_2) {
        console.log('Número 1 é maior que número 2');
    } else if (num1_1 < num2_2) {
        console.log('Número 1 é menor que número 2');
    } else {
        console.log('Os números são iguais!');
    }
}

comparacao2();

//############################################
//  Exerício 4  -  Switch Case (Pokémons)    #
//############################################

/* var pokemons = Number(prompt('Bem vindo ao campo de batalha!\n\nEscolha o seu Pokémon:\n 1- Bulbassauro (Planta e veneno);\n2- Charmander (Fogo);\n3- Squirtle (Água)'));

switch (pokemons) {
    case 1:
        console.log('Você escolheu o Bulbassauro!');
        break;
    case 2:
        console.log('Você escolheu o Charmander!');
        break;
    case 3:
        console.log('Você escolheu o Squirtle!');
        break;
    default:
        console.log('Pokémon não identificado.');
        break;
} */

//############################################
//  Exerício 5 - Entrar ou não na faculdade  #
//############################################

/* function entradaFaculdade(
    ensino = Number(prompt('Você concluiu o ensino médio? Digite 1 para sim e 2 para não')),
    maioridade = Number(prompt('Você tem que idade?')),
    cursando = Number(prompt('Você está cursando outra faculdade? Digite 1 para sim e 2 para não'))
) {
    if (ensino === 1 && maioridade >= 18 && cursando === 2) {
        console.log('Você pode estudar em nossa faculdade!');
    } else {
        console.log('Você não pode estudar em nossa faculdade!');
    }
}

entradaFaculdade(); */

//###################################################
//  Exercício Complementar 1 - Calculadora Simples  #
//###################################################

/* function calculator(num1_3 = prompt('Digite o número 1'), operador = prompt('Digite o operador'), num2_3 = prompt('Digite o número 2')) {
    switch (operador) {
        case '*':
            console.log(num1_3 * num2_3);
            break;
        case '/':
            console.log(num1_3 / num2_3);
            break;
        case '+':
            console.log(num1_3 + num2_3);
            break;
        case '-':
            console.log(num1_3 - num2_3);
            break;
        default:
            console.log('Operador inválido');
    }
}

calculator(); */

//###########################################################################
//  Exercício Complementar 2 - Média de notas  +  Explicação .split e .map  #
//###########################################################################

/* alert('Bem vindo à automação para médias escolares!');

function catarNotas(catarnota = []) {
    var aluno = prompt('Digite o nome do aluno');
    var entradaNotas = prompt(`Digite as notas do aluno ${aluno} separadas pro vírgula`);
    catarnota = entradaNotas.split(',').map(Number);
    //alert(catarnota);

    var somaNotas = 0;

    for (var i = 0; i < catarnota.length; i++) {
        somaNotas = catarnota[i] + somaNotas;
    }
    alert(somaNotas / catarnota.length);
}
catarNotas();

function explainSplitOrMap(optionExplain) {
    if (optionExplain === 1) {
        console.log(
            "split('separator'), serve para dividir strings em uma array de substrings (não necessário utilizar realmente um caractere no parâmetro separator, caso não use, a string inteira se tornará em um array de caracteres)"
        );
    } else if (optionExplain === 2) {
        console.log(
            "map(callback), é utilizado em arrays e cria um novo array aplicando uma função callback a cada elemento do array original, 'callback' será chamada para cada elemento do array e retorna o valor que será armazenado no novo array resultante\n\n Usos: currentValue(obrigatorio) | Opcionais => Number, parseFloat, index, array"
        );
    } else {
        console.log('Opção inválida');
    }
} */
