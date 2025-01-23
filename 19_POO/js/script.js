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

// 8 - metodos na função construtora
Cachorro.prototype.uivar = function() {
    console.log("Auuuuuuu!");
}

console.log(Cachorro.prototype)

bad.uivar();

// 9 - classes es6
class CachorroClasse {
    constructor(nome, raca) {
        this.nome = nome;
        this.raca = raca;
    }
}

const rayla = new CachorroClasse("Rayla", "Bulldog");

console.log(rayla);

// 10 - mais sobre classes
class Caminhao {
    constructor(eixos, cor) {
        this.eixos = eixos;
        this.cor = cor;
    }

    descreverCaminhao() {
        console.log(`Esse caminhão possui ${this.eixos} eixos e é da cor ${this.cor}.`)
    }
}

const scania = new Caminhao(4, "Preto");

console.log(Caminhao);

scania.descreverCaminhao();

const c2 = new Caminhao(6, "Azul");

c2.descreverCaminhao();

Caminhao.prototype.motor = 4.0;

console.log(c2.motor);

// 11 - override
class Humano {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const joao = new Humano("João", 19);

console.log(joao);

console.log(Humano.prototype.idade);

Humano.prototype.idade = "Não definida";

console.log(joao.idade);

console.log(Humano.prototype.idade);

// 12 - symbols em classes
class Aviao {
    constructor(marca, turbinas) {
        this.marca = marca;
        this.turbinas = turbinas;
    }
}

const asas = Symbol();
const pilotos = Symbol();

Aviao.prototype[asas] = 2;

Aviao.prototype[pilotos] = 3;

const boeing = new Aviao("Boeing", 10);

console.log(boeing);

console.log(boeing[asas]);

console.log(boeing[pilotos]);

// 13 - getters e setters
class Post {
    constructor(titulo, descricao, tags) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.tags = tags;
    }

    get exibirTitulo() {
        return `Você está lendo ${this.titulo}!`;
    }

    set adicionarTags(tags) {
        const tagsArray = tags.split(", ");
        this.tags = tagsArray;
    }
}

const myPost = new Post("Algum post", "É um post sobre programação");

console.log(myPost);

console.log(myPost.exibirTitulo);

myPost.adicionarTags = "programação, javascript, js";

console.log(myPost);

// 14 - herança
class Mamifero {
    constructor(patas) {
        this.patas = patas;
    }
}

class Lobo extends Mamifero {
    constructor(patas, nome) {
        super(patas, patas);
        this.nome = nome;
    }
}

const shark = new Lobo(4, "Shark");

console.log(shark);

console.log(shark.patas);

// 15 - instanceof
console.log(shark instanceof Lobo);

console.log(shark instanceof Mamifero);

console.log(shark instanceof Post);