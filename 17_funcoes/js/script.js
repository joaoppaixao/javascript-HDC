// 1 - criando uma função

function minhaFuncao() {
    console.log("Testando")
}

minhaFuncao();

const minhaFuncaoEmVariavel = function() {
    console.log("Função em variável.")
}

minhaFuncaoEmVariavel();

function funcaoComParametro(txt) {
    console.log(`Imprimindo: ${txt}`)
}

funcaoComParametro("Imprimindo alguma coisa...");

funcaoComParametro("outra função.");

// 2 - return
const a = 10;
const b = 20;
const c = 30;
const d = 40;

function soma(n1, n2) {
    return n1 + n2;
}

const resultado = soma(a, b);

console.log(resultado);

console.log(soma(c, d));

// 3 - escopo da função
let y = 10;

function testandoEscopo() {
    let y = 20;
    console.log(`Y dentro da função é: ${y}`);
}

console.log(`Y fora da função é: ${y}`);

testandoEscopo();

// 4 - escopo aninhado
let m = 10;

function escopoAninhado() {
    let m = 20;

    if(true) {
        let m = 30;

        if(true) {
            let m = 40;

            console.log(m);
        }

        console.log(m);
    }

    console.log(m);
}

escopoAninhado();

console.log(m);

// 5 - arrow function
const testeArrow = () => {
    console.log("Esta é uma arrow function")
}

testeArrow();

const parOuImpar = (n) => {
    if (n % 2 === 0) {
        console.log("É par!");
        return;
    } 
    
    console.log("É ímpar!");
}

parOuImpar(12);

parOuImpar(3);

// 6 - mais sobre arrow functions
const raizQuadrada = (x) => {
    return x * x;
}

console.log(raizQuadrada(26));

const raizQuadrada2 = (x) => x * x

console.log(raizQuadrada2(12));

const helloWorld = () => console.log("Hello, World! ");

helloWorld();

// 7 - parametro opcional

const multiplication = function(m, n) {
    if (n === undefined) {
        return m * 2;
    } else {
        return m * n;
    }
}

console.log(multiplication(5));

console.log(multiplication(3, 12));

const greeting = (name) => {

    if(!name) {
        return console.log("Olá!");
    } else {
        return console.log(`Olá, ${name}!`);
    }
 }

 greeting();

 greeting("João");

 // 8 - valor default

 const customGreeting = (name, greet = "Olá") => {
    return console.log(`${greet}, ${name}!`);
 }

 customGreeting("João Paixão");
 
 customGreeting("Bruna", "Bom dia");

 const repeatText = (text, repeat = 2) => {
    
    for (let i = 0; i < repeat; i++) {
        console.log(text);
    }
 }

 repeatText("teste");

 repeatText("Teste 2", 5);

 // 9- closure
 function someFunction() {
    let txt = "Alguma coisa";

    function display() {
        console.log(txt);
    }

    display();
 }

 someFunction();

 // 10 - mais sobre closure

const multiplicationClosure = (n) => {
    return (m) => {
        return m * n;
    }
}

const c1 = multiplicationClosure(5);

const c2 = multiplicationClosure(10);

console.log(c1(5));

console.log(c2(10));

// 11 - recursion
const untilTen = (n, m) => {
    if (n < 10) {
        console.log("A função parou de executar! ");
    } else {
        const x = n - m;
        
        console.log(x);

        untilTen(x, m);
    }
}

untilTen(26, 2);

function factorial(x) {
    if (x === 0) {
        return 1;
    } else {
        return x * factorial(x - 1);
    }
}

const num = 6;

const result = factorial(num);

console.log(`O fatorial do número ${num} é ${result}.`);

// teste recursividade

const somaTodosOsNumeros = (n) => {
    if (n === 0) {
        return 0;
    } else {
        return n + somaTodosOsNumeros(n - 1);
    }
}

let numSoma = 12;

let resultSoma = somaTodosOsNumeros(numSoma);

console.log(`A soma de todos os números de ${numSoma} é: ${resultSoma}.`);

