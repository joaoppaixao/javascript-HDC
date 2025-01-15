// 1 - Variáveis
let nome = "Bruna";

console.log(nome);

nome = "Bruna Moreira Marvulle";

console.log(nome);

const idade = 19;

console.log(idade);

// idade = 20; (não é possível mudar o valor da variável const)

console.log(typeof nome);

console.log(typeof idade);

// 2 - Mais sobre variáveis
let a = 10, b = 20, c = 30;

console.log(a, b, c);

let nomecompleto = "João Augusto Palma Paixão";

let nomeCompleto = "Bruna Moreira Marvulle";

console.log(nomecompleto);

console.log(nomeCompleto);

// 3 - Prompt
// const age = prompt("Digite a sua idade: ");

// console.log(`Você tem ${age} anos!`);

// 4 - Alert
// alert("Testando");

// const z = 12;

// alert(`O número é ${z} `)

// 5 - Math
console.log(Math.max(5, 2, 1, 12, 26));

console.log(Math.floor(12.26));

console.log(Math.ceil(12.26));

// // 6 - Console
// console.log("Teste!");

// console.error("Erro!");

// console.warn("Aviso!");
 
// 7 - If
const m = 10;

if (m > 5) {
    console.log("M é maior que 5!");
} 

const user = "João";

if (user === "João") {
    console.log("Olá, João!");
}

// 8 - else
const loggedIn = false;

if (loggedIn) {
    console.log("Você está conectado!")
} else {
    console.log("Você está desconectado!")
}

const q = 10;
const w = 15;

if (q > 5 && w > 20) {
    console.log("Números mais altos");
} else {
    console.log("Os números NÃO são mais altos")
}

// 9 - else if
if (1 > 2) {
    console.log("Teste")
} else if (2 > 3) {
    console.log("Teste 2")
} else if(3 > 2) {
    console.log("Agora sim!")
}

const username = "Bruna";
const userAge = 19;

if (username === "João") {
    console.log("Bem-vindo, João! ");
} else if (username === "Bruna" && userAge === 19) {
    console.log("Olá Bruna, você tem 19 anos. ")
} else {
    console.log("Nenhuma condição aceita.")
}

// 10 - while

let p = 0;

while (p < 5) {
    console.log(`Repetindo ${p}`);
    p += 1;
}

// 11 - do while

let o = 10;
 do {
    console.log(`Valor de o: ${o}`);
    o--
 } while (o >= 1);

 // 12 - for 

 for (let i = 1; i <= 10; i++) {
    console.log(`Repetindo algo ${i}...`);
 }

 // 14 - break

 for(let i = 20; i > 10; i--) {
    console.log(`O valor de i é: ${i}`)

    if (i === 12) {
        console.log("O i é 12!")
        break;
    }
 }

 // 15 - continue

 for( let i = 0; i < 10; i++) {
    // operador de resto = %
    if (i % 2 === 0) {
        console.log("Número par!");
        continue;
    }

    console.log(i);
 }

 // 16 - switch

 const job = "Programador"

 switch(job) {
    case "Programador":
        console.log("Você é um programador!");
        break;
    case "Advogado":
        console.log("Você é um advogado!");
        break;
    case "Engenheiro":
        console.log("Você é um engenheiro!");
        break;
    default:
        console.log("Profissão não encontrada.");    
 }