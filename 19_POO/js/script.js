// 1 - método
const animal = {
    nome: "Julie",
    latir: function() {
        console.log("Au au");
    }
}

console.log(animal.nome)

animal.latir()

// 2 - aprofundando em métodos
const pessoa = {
    nome: "João",

    getNome: function() {
        return this.nome;
    },

    setNome: function(novoNome) {
        this.nome = novoNome;
    }
}

console.log(pessoa.nome);

console.log(pessoa.getNome());

pessoa.setNome("Bruna");

console.log(pessoa.getNome());

// 3 - prototype
const text = "asd";

console.log(Object.getPrototypeOf(text));

const bool = true

console.log(Object.getPrototypeOf(bool));

const arr = [];

console.log(Object.getPrototypeOf(arr));

console.log(Object.getPrototypeOf(arr) === Array.prototype);

// 4 - mais sobre prototypes
const myObject = {
    a: "b",
}

console.log(Object.getPrototypeOf(myObject) === Object.prototype);

const mySecondObject = Object.create(myObject);

console.log(mySecondObject);

console.log(mySecondObject.a);

console.log(Object.getPrototypeOf(mySecondObject) === myObject);

// 5 - classes básicas
const cachorro = {
    raca: null,
    patas: 4,
}

const pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = "Pastor Alemão";

console.log(pastorAlemao);

console.log(pastorAlemao.patas);

const bulldog = Object.create(cachorro);

bulldog.raca = "Bulldog";

console.log(bulldog);

// 6 - função como classe - função construtora
function criarCachorro(nome, raca) {

    const cachorro = Object.create({});

    cachorro.nome = nome;
    cachorro.raca = raca;

    return cachorro;
}

const julie = criarCachorro("Julie", "Vira-lata");
console.log(julie);

const titi = criarCachorro("Titi", "Vira-lata");
console.log(titi);

console.log(Object.getPrototypeOf(titi));

// funções como classe
function Cachorro(nome, raca) {
    this.nome = nome;
    this.raca = raca;
}

const bad = new Cachorro("Bad", "Lhasa-apso");

console.log(bad);

